import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import { useRef } from "react";

import { stackConfig } from "./stack-box/stackConfig";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

type TechSectionProps = {
	secRef: (el: HTMLDivElement | null) => void;
};

const TechStack = ({ secRef }: TechSectionProps) => {
	const constraintsRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const container = constraintsRef.current;

		if (!container) return;

		const stackTags = container.querySelectorAll(".stack-drag");

		stackTags.forEach((eachItem) => {
			Draggable.create(eachItem, {
				type: "x,y",
				bounds: container,
				inertia: true,
				cursor: "grab",
				onRelease: () => {
					setTimeout(() => {
						gsap.to(eachItem, {
							x: 0,
							y: 0,
							duration: 0.6,
							ease: "power2.out",
						});
					}, 2000);
				},
			});
		});
	});

	const stacks = Object.keys(stackConfig).map(
		(eachKey) => stackConfig[eachKey]
	);

	return (
		<section ref={secRef}>
			<div>
				<h2 className=" font-bold text-white text-3xl md:text-5xl">
					My Tech Stack
				</h2>
				<div
					ref={constraintsRef}
					className="w-full min-h-96 border-2 border-secondary rounded-lg flex flex-wrap justify-center items-center gap-8 pt-8 relative"
				>
					{stacks.map((tech, index) => (
						<div
							key={index + tech.name}
							className={` stack-drag w-32 flex flex-col items-center p-4  bg-opacity-70 rounded-lg ${tech.borderColor} ${tech.shadowColor} ${tech.textColor} `}
						>
							<div className="text-secondary mb-2">
								<tech.icon size={24} />
							</div>
							<p>{tech.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
