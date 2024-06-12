'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const banners = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5', 'banner6', 'banner7'];
const duplicatedBanners = [banners[banners.length - 1], ...banners, banners[0]];

const Carousel = () => {
	const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(1);
	const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);
	const [isButtonDisabled, setIsButtonDisable] = useState(false);
	const durationDiv = useRef<HTMLDivElement>(null);

	function showPreviousBanner() {
		if (currentBannerIndex === duplicatedBanners.length - 2) {
			if (!durationDiv.current) return;
			durationDiv.current.style.transitionDuration = '';
		}
		setCurrentBannerIndex((index) => {
			if (index === 0) return banners.length - 1;
			return index - 1;
		});
	}

	function showNextBanner() {
		if (currentBannerIndex === 1) {
			if (!durationDiv.current) return;
			durationDiv.current.style.transitionDuration = '';
		}

		setCurrentBannerIndex((index) => {
			if (index === duplicatedBanners.length - 1) return 2;
			return index + 1;
		});

		setIsButtonDisable(true);
	}

	useEffect(() => {
		const intervalID = setInterval(showNextBanner, 3000);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<div
			className="relative max-w-[1440px] m-auto overflow-hidden"
			onMouseEnter={() => setIsBannerHovered(true)}
			onMouseLeave={() => setIsBannerHovered(false)}
		>
			<div
				className="flex transition-transform duration-200 ease-in-out"
				style={{ transform: `translateX(${-100 * currentBannerIndex}%)` }}
				ref={durationDiv}
				onTransitionEnd={() => {
					if (currentBannerIndex === duplicatedBanners.length - 1) {
						if (!durationDiv.current) return;
						durationDiv.current.style.transitionDuration = '0ms';
						setCurrentBannerIndex(1);
					}

					if (currentBannerIndex === 0) {
						if (!durationDiv.current) return;
						durationDiv.current.style.transitionDuration = '0ms';
						setCurrentBannerIndex(duplicatedBanners.length - 2);
					}

					setIsButtonDisable(false);
				}}
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
				disabled={isButtonDisabled}
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
				disabled={isButtonDisabled}
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
