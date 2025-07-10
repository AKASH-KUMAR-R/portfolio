import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedTextBox from "./animate-components/AnimatedTextBox";

const ImportTags = [
	{
		text: `import { FrontEnd } from "web";`,
		initialPos: {},
		delay: 0,
	},
	{
		text: `import { BackEnd } from "server";`,
		initialPos: {},
		delay: 0,
	},
	{
		text: `import { FullStack } from "dev";`,
		initialPos: {},
		delay: 0,
	},
	{
		text: `import React from "react";`,
		initialPos: {},
		delay: 0,
	},
	{
		text: `import Tailwind from "styles";`,
		initialPos: {},
		delay: 0,
	},
];

const getRandom = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const HeroSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const targetRefs = useRef<Array<HTMLDivElement | null>>([]);

	useLayoutEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		const containerWidth = container?.offsetWidth;
		const containerHeight = container?.offsetHeight;

		console.log(containerHeight, containerWidth);

		const velocities = ImportTags.map((_, index) => ({
			x: getRandom(0.2, 1),
			y: getRandom(0.2, 1),
		}));

		const positions = ImportTags.map(() => ({
			x: getRandom(50, containerWidth - 240),
			y: getRandom(50, containerHeight - 40),
		}));

		const animatingFunc = () => {
			targetRefs.current.forEach((el, i) => {
				if (!el) return;

				const vel = velocities[i];
				const pos = positions[i];

				pos.x += vel.x;
				pos.y += vel.y;

				const elWidth = el.offsetWidth;
				const elHeight = el.offsetHeight;

				if (pos.x <= 0 || pos.x + elWidth >= containerWidth) vel.x *= -1;
				if (pos.y <= 0 || pos.y + elHeight >= containerHeight) vel.y *= -1;

				gsap.set(targetRefs.current[i], { x: pos.x, y: pos.y });
			});

			requestAnimationFrame(animatingFunc);
		};

		animatingFunc();
	}, []);
	return (
		<div
			ref={containerRef}
			className=" relative w-full text-primary-light h-full  overflow-hidden"
		>
			{ImportTags.map((eachItem, index) => (
				<div
					className=" absolute p-2 border border-white w-fit rounded-md"
					ref={(el) => {
						targetRefs.current[index] = el;
					}}
				>
					<AnimatedTextBox
						key={index + eachItem.text}
						text={eachItem.text}
						// divRef={(el) => (targetRefs.current[index] = el)}
					/>
				</div>
			))}
			<div className=" w-full h-full flex justify-center items-center">
				<div className=" flex flex-col items-center gap-10">
					<div className=" text-center font-bold text-5xl">
						<span>Akash Kumar R</span>
						<p className=" opacity-60">Blending tech and design.</p>
					</div>
					<div className=" flex gap-10">
						<button className="px-3 py-1 flex justify-center items-center bg-primary-light text-primary font-semibold rounded-4xl ">
							View Work
						</button>
						<button className="px-3 py-1 flex justify-center items-center bg-primary-500 text-primary-light font-semibold rounded-4xl ">
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
