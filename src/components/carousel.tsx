'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const banners = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5', 'banner6', 'banner7'];

const Carousel = () => {
	const [imageIndex, setImageIndex] = useState<number>(0);
	const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);

	function showPreviousBanner() {
		setImageIndex((index) => {
			if (index === 0) return banners.length - 1;
			return index - 1;
		});
	}

	function showNextBanner() {
		setImageIndex((index) => {
			if (index === banners.length - 1) return 0;
			return index + 1;
		});
	}

	useEffect(() => {
		const intervalID = setInterval(showNextBanner, 3000);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<div
			className="slider-item-container relative flex overflow-hidden max-w-[1440px] m-auto"
			onMouseEnter={() => setIsBannerHovered(true)}
			onMouseLeave={() => setIsBannerHovered(false)}
		>
			{banners.map((slide) => (
				<Image
					key={slide}
					src={`/images/${slide}.jpeg`}
					alt={`${slide}`}
					width={1920}
					height={600}
					style={{ transform: `translateX(${-100 * imageIndex}%)` }}
					className="shrink-0 w-full h-full transition-transform duration-200 ease-in-out"
				/>
			))}
			<button className={`absolute top-[50%] left-[15%] ${isBannerHovered ? 'block' : 'hidden'}`}>
				<Image
					src="/images/prev-button.png"
					alt="previous button"
					width={16}
					height={28.59}
					onClick={showPreviousBanner}
				/>
			</button>
			<button className={`absolute top-[50%] right-[15%] ${isBannerHovered ? 'block' : 'hidden'}`}>
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
