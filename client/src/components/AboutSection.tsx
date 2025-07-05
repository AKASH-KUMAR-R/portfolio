const ParagraphContent = [
	{
		description:
			"I'm a creative technologist with a love for elegant problem solving. With roots in both software engineering and visual design, I aim to bring thoughtful, enduring solutions to every project.",
	},
	{
		description:
			"My portfolio reflects a commitment to clarity, function, and aesthetics—combining modern minimalism with classic sensibilities for results that last.",
	},
	{
		description:
			"Away from the screen, you'll likely find me exploring type, music, or good coffee. Download my resume or reach out to connect.",
	},
]

const AboutSection = () => {
	return (
		<div className=" w-full flex flex-col gap-6 text-primary-light">
			<h2 className=" font-bold text-2xl ">About Me</h2>
			{ParagraphContent.map((eachItem, index) => (
				<p
					className=" max-w-3xl text-primary-light opacity-60 font-semibold"
					key={index}
				>
					{eachItem.description}
				</p>
			))}
		</div>
	)
}

export default AboutSection
