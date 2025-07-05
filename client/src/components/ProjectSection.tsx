import sparshamImage from "/sparsham.png"
import deviMessImage from "/devi-mess.png"
import udhymaImage from "/udhyma-project.png"
import sapienceImage from "/sapience.png"

const ProjectList = [
	{
		name: "Sparsham Arimpur Elderly Care Management System",
		description: "",
		imageUrl: sparshamImage,
		startDate: "",
	},
	{
		name: "Mess Management System",
		description: "",
		imageUrl: deviMessImage,
		startDate: "",
	},
	{
		name: "Govt Conclave Event Management System",
		description: "",
		imageUrl: udhymaImage,
		startDate: "",
	},
	{
		name: "Student Tutor Management System",
		description: "",
		imageUrl: sapienceImage,
		startDate: "",
	},
]

type ProjectCardProps = {
	name: string
	imageUrl: string
	projectDetails: Object
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	imageUrl,
	projectDetails,
}) => {
	return (
		<div className=" h-96 flex flex-col gap-3 rounded-md scale-95 hover:scale-100 transition-transform overflow-hidden">
			<div
				className=" w-full h-full bg-primary-500 bg-cover bg-center "
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className=" flex flex-col text-primary-light font-bold text-sm ">
				<span>{name}</span>
				<span className=" opacity-60">May 2024</span>
			</div>
		</div>
	)
}

const ProjectSection = () => {
	return (
		<div className=" w-full ">
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{ProjectList.map((eachProject, index) => (
					<ProjectCard
						key={index}
						name={eachProject.name}
						imageUrl={eachProject.imageUrl}
						projectDetails={eachProject}
					/>
				))}
			</div>
		</div>
	)
}

export default ProjectSection
