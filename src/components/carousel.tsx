'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const banners = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5', 'banner6', 'banner7'];
const duplicatedBanners = [banners[banners.length - 1], ...banners, banners[0]];

const Carousel = () => {
	const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(1);
	const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);
	const [isTransitionRunning, setIsTransitionRunning] = useState(false);
	const durationDiv = useRef<HTMLDivElement>(null);

	function showPreviousBanner() {
		setCurrentBannerIndex((index) => {
			if (isLastBannerOfOrigin(index)) {
				onTransitionDuration();
			}
			return index - 1;
		});
	}

	function isLastBannerOfOrigin(index: number) {
		return index === lastIndexOfOrigin;
	}

	function isFirstBannerOfOrigin(index: number) {
		return index === firstIndexOfOrigin;
	}

	function isLastBannerOfDuplicate(index: number) {
		return index === duplicatedBanners.length - 1;
	}

	function isFirstBannerOfDuplicate(index: number) {
		return index === 0;
	}

	const lastIndexOfOrigin = duplicatedBanners.length - 2;
	const firstIndexOfOrigin = 1;

	const showNextBanner = useCallback(
		function showNextBanner() {
			setCurrentBannerIndex((index) => {
				if (isFirstBannerOfOrigin(index)) {
					onTransitionDuration();
				}
				return index + 1;
			});

			setIsTransitionRunning(true);
		},
		[setCurrentBannerIndex, setIsTransitionRunning]
	);

	useEffect(() => {
		const intervalID = setInterval(showNextBanner, 5000);

		return () => clearInterval(intervalID);
	}, [showNextBanner]);

	function offTransitionDuration() {
		if (!durationDiv.current) return;
		durationDiv.current.style.transitionDuration = '0ms';
	}

	function onTransitionDuration() {
		if (!durationDiv.current) return;
		durationDiv.current.style.transitionDuration = '';
	}

	function replaceDuplicatedImageWithOriginImage() {
		if (isLastBannerOfDuplicate(currentBannerIndex)) {
			offTransitionDuration();
			setCurrentBannerIndex(firstIndexOfOrigin);
		}
		if (isFirstBannerOfDuplicate(currentBannerIndex)) {
			offTransitionDuration();
			setCurrentBannerIndex(lastIndexOfOrigin);
		}
	}

	function handleTransitionEnd() {
		replaceDuplicatedImageWithOriginImage();
		setIsTransitionRunning(false);
	}

	return (
		<div
			className="relative max-w-[1440px] m-auto overflow-hidden"
			onMouseEnter={() => setIsBannerHovered(true)}
			onMouseLeave={() => setIsBannerHovered(false)}
		>
			<div
				className="flex transition-transform duration-300 ease-in-out"
				style={{ transform: `translateX(${-100 * currentBannerIndex}%)` }}
				ref={durationDiv}
				onTransitionEnd={handleTransitionEnd}
			>
				{duplicatedBanners.map((banner) => (
					<Image
						key={banner}
						src={`/images/${banner}.jpeg`}
						alt={`${banner}`}
						width={1920}
						height={600}
						className="shrink-0 w-full h-full"
					/>
				))}
			</div>
			<button
				className={`absolute top-[50%] -translate-y-1/2 left-[15%] ${isBannerHovered ? 'block' : 'hidden'}`}
				disabled={isTransitionRunning}
			>
				<Image
					src="/images/prev-button.png"
					alt="previous button"
					width={16}
					height={28.59}
					onClick={showPreviousBanner}
				/>
			</button>
			<button
				className={`absolute top-[50%] -translate-y-1/2 right-[15%] ${isBannerHovered ? 'block' : 'hidden'}`}
				disabled={isTransitionRunning}
			>
				<Image
					src="/images/next-button.png"
					alt="next button"
					width={16}
					height={28.59}
					onClick={showNextBanner}
				/>
			</button>
		</div>
	);
};

export default Carousel;
