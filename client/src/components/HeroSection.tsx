const HeroSection = () => {
	return (
		<div className=" w-full text-primary-light h-full flex justify-center items-center">
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
	)
}

export default HeroSection
