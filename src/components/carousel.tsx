import React from 'react';
import Image from 'next/image';

const slides = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5', 'banner6', 'banner7'];

const Carousel = () => {
	return (
		<div className="overflow-hidden">
			<div className="border border-gray-300 "></div>
			<div className="rail flex relative w-screen max-w-[1920px] h-[600px] m-auto translate-x-[-100%]">
				{slides.map((slide) => (
					<div
						key={slide}
						className="train flex-shrink-0 relative w-full h-full"
					>
						<Image
							src={`/images/${slide}.jpeg`}
							alt={`${slide}`}
							fill
						/>
					</div>
				))}
				<section>
					{/* 이 버튼을 클릭하면
          prevIndex -> prevIndex + 1 % slides.length */}
					<button className="absolute top-[50%] left-[15%]">
						<Image
							src="/images/prev-button.png"
							alt="previous button"
							width={16}
							height={28.59}
						/>
					</button>
					<button className="absolute top-[50%] right-[15%]">
						<Image
							src="/images/next-button.png"
							alt="next button"
							width={16}
							height={28.59}
						/>
					</button>
				</section>
			</div>
		</div>
	);
};

export default Carousel;
