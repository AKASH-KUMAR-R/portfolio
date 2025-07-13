import sparshamImage from "/sparsham.png";
import deviMessImage from "/devi-mess.png";
import udhymaImage from "/udhyma-project.png";
import sapienceImage from "/sapience.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectList = [
	{
		name: "Sparsham Arimpur Elderly Care Management System",
		description: "",
		imageUrl: sparshamImage,
		startDate: "",
		stack: "React, Node, Express, MongoDB",
		role: "Full Stack",
	},
	{
		name: "Mess Management System",
		description: "",
		imageUrl: deviMessImage,
		startDate: "React, Node, Express, Postgre",
		stack: "React, Node, Express, Postgre",
		role: "Full Stack",
	},
	{
		name: "Govt Conclave Event Management System",
		description: "",
		imageUrl: udhymaImage,
		startDate: "",
		stack: "React, Node, Express, MongoDB",
		role: "Full Stack",
	},
	{
		name: "Student Tutor Management System",
		description: "",
		imageUrl: sapienceImage,
		startDate: "React, Django, Postgre",
		role: "Frontend",
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
			className={` h-96 flex flex-col items-center  ${
				isReversed ? " lg:flex-row-reverse " : " lg:flex-row"
			} gap-3`}
		>
			<div
				className="image w-full max-w-lg h-full bg-primary-500 bg-cover bg-center overflow-hidden rounded-md"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className=" w-full items-center justify-center flex flex-col gap-1 text-primary-light font-bold text-sm ">
				<span className="project-title text-2xl">{name}</span>
				{/* <span className=" opacity-60">May 2024</span> */}
				<div className=" flex justify-between opacity-60">
					<span className=" ">{projectDetails.stack}</span>
					<span className="project-role">{projectDetails.role}</span>
				</div>
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
						markers: true,
					},
				}
			);
		});
	});
	return (
		<div ref={containerRef} className=" w-full overflow-hidden">
			<div className=" flex flex-col gap-4">
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
