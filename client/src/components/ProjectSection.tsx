import sparshamImage from "/sparsham.png";
import deviMessImage from "/devi-mess.png";
import udhymaImage from "/udhyma-project.png";
import sapienceImage from "/sapience.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	imageUrl,
	projectDetails,
	divRef,
}) => {
	return (
		<div
			ref={divRef}
			className=" h-96 flex flex-col gap-3 rounded-md scale-95 hover:scale-100 transition-transform overflow-hidden"
		>
			<div
				className=" w-full h-full bg-primary-500 bg-cover object-center"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className=" flex flex-col gap-1 text-primary-light font-bold text-sm ">
				<span>{name}</span>
				{/* <span className=" opacity-60">May 2024</span> */}
				<div className=" flex justify-between opacity-60">
					<span>{projectDetails.stack}</span>
					<span>{projectDetails.role}</span>
				</div>
			</div>
		</div>
	);
};

const ProjectSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const targetRefs = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {}, []);
	return (
		<div ref={containerRef} className=" w-full">
			<div className=" grid sm:grid-cols-1 lg:grid-cols-3">
				{ProjectList.map((eachProject, index) => (
					<ProjectCard
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
