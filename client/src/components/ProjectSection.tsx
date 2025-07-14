import sparshamImage from "/sparsham.png";
import deviMessImage from "/devi-mess.png";
import udhymaImage from "/udhyma-project.png";
import sapienceImage from "/sapience.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import StackBox from "./stack-box/StackBox";

gsap.registerPlugin(ScrollTrigger);

const ProjectList = [
	{
		name: "Sparsham Arimpur Elderly Care Management System",
		description:
			"A service management platform built for local governance — enabling Arimpur Panchayat to efficiently manage and monitor their social welfare services and beneficiaries.",
		imageUrl: sparshamImage,
		startDate: "",
		stack: "react,tailwind,node,express,mongo",
		role: "Full Stack Role",
	},
	{
		name: "Mess Management System",
		description:
			"A smart and streamlined platform designed to simplify mess and utility billing for a privately run mess. Built to manage members, automate billing, and provide full transparency for both admin and users.",
		imageUrl: deviMessImage,
		startDate: "React, Node, Express, Postgre",
		stack: "react,tailwind,node,express,postgre",
		role: "Full Stack Role",
	},
	{
		name: "Govt Conclave Event Management System",
		description:
			"A large-scale web platform developed to improve collaboration between students, government bodies, and industry leaders. The site streamlines event participation, idea submission, and institutional coordination for state-level conclaves and innovation programs.",
		imageUrl: udhymaImage,
		startDate: "",
		stack: "react,tailwind,node,express,mongo",
		role: "Full Stack Role",
	},
	{
		name: "Student Tutor Management System",
		description:
			"A role-based web platform designed to streamline academic management for tutors, students, and admins. Built to digitize class scheduling, test creation, progress tracking, and resource requests — all in one place.",
		imageUrl: sapienceImage,
		stack: "react,tailwind,django,postgre",
		role: "Frontend Role",
	},
];

type ProjectCardProps = {
	name: string;
	imageUrl: string;
	projectDetails: (typeof ProjectList)[0];
	divRef: (el: HTMLDivElement | null) => void;
	isReversed: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	imageUrl,
	projectDetails,
	divRef,
	isReversed = false,
}) => {
	return (
		<div
			ref={divRef}
			className={` h-full flex flex-col items-center  ${
				isReversed ? " lg:flex-row-reverse " : " lg:flex-row"
			} gap-3 px-2`}
		>
			<div
				className="image w-full max-w-lg h-80 bg-primary-500 bg-cover bg-center overflow-hidden rounded-md"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className=" w-full flex flex-col gap-4 text-primary-light font-bold text-sm text-center">
				<span className="project-title text-2xl">{name}</span>
				<div className=" self-center w-full max-w-lg opacity-60 text-justify">
					{projectDetails.description}
				</div>
				<div className=" w-full flex flex-wrap justify-center gap-3">
					{projectDetails.stack?.split(",").map((eachStack) => (
						<StackBox key={eachStack + projectDetails.name} stack={eachStack} />
					))}
				</div>
				<span className=" opacity-60 ">{projectDetails.role}</span>
			</div>
		</div>
	);
};

const ProjectSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const targetRefs = useRef<Array<HTMLDivElement | null>>([]);

	useGSAP(() => {
		const images = gsap.utils.toArray<HTMLElement>(".image");
		const projectTitles = gsap.utils.toArray<HTMLElement>(".project-title");

		images.forEach((eachImage, index) => {
			const isLeft = index % 2 == 0;

			gsap.fromTo(
				eachImage,
				{
					rotate: isLeft ? -90 : 90,
					x: isLeft ? -300 : 300,
					opacity: 0,
				},
				{
					rotate: 0,
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: eachImage,
						start: "top 80%",
						end: "+=400",
						scrub: true,
						markers: true,
					},
				}
			);
		});

		projectTitles.forEach((eachTitle) => {
			gsap.fromTo(
				eachTitle,
				{
					opacity: 0,
					y: -100,
				},
				{
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: eachTitle,
						start: "top 80%",
						end: "+=400",
						scrub: true,
					},
				}
			);
		});

		targetRefs.current.forEach((eachCard) => {
			const stackTags = eachCard?.querySelectorAll(".stack-tag");

			if (!stackTags) return;

			gsap
				.timeline({
					scrollTrigger: {
						trigger: eachCard,
						start: "top 80%",
						toggleActions: "play none play none",
					},
				})
				.from(stackTags, {
					y: 50,
					opacity: 0,
					stagger: 0.1,
					ease: "back.out(1.7)",
					duration: 0.6,
				});
		});
	});
	return (
		<div ref={containerRef} className=" w-full overflow-hidden">
			<div className=" flex flex-col gap-20">
				{ProjectList.map((eachProject, index) => (
					<ProjectCard
						isReversed={index % 2 === 1}
						key={index + eachProject.name}
						divRef={(el) => {
							targetRefs.current[index] = el;
						}}
						name={eachProject.name}
						imageUrl={eachProject.imageUrl}
						projectDetails={eachProject}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
