import profileImg from "/profile.jpg";

const ParagraphContent: Array<Record<"description", string>> = [];

const AboutSection = () => {
	return (
		<div className=" w-full flex flex-col gap-6 text-primary-light">
			<h2 className=" font-bold text-3xl md:text-5xl ">About Me</h2>

			<div className=" flex flex-col lg:flex-row lg:items-center gap-8">
				<div className=" w-52 h-52 rounded-full overflow-hidden">
					<img src={profileImg} className=" w-full h-full object-cover" />
				</div>

				<div className=" font-bold space-y-4 ">
					<h2 className=" text-3xl md:text-4xl">Full Stack Developer</h2>
					<p className="opacity-60 max-w-lg">
						Currently pursuing a B.Tech in Computer Science and Engineering.
					</p>
					<p className=" opacity-60 max-w-lg">
						I spend my spare time turning ideas into interactive web projects.
					</p>
				</div>
			</div>
			{ParagraphContent.map((eachItem, index) => (
				<p
					className=" max-w-3xl text-primary-light opacity-60 font-semibold"
					key={index}
				>
					{eachItem.description}
				</p>
			))}
		</div>
	);
};

export default AboutSection;
