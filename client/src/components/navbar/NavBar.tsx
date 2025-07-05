const NAVBAR_ITEMS = [
	{
		name: "About",
		link: "",
	},
	{
		name: "Projects",
		link: "",
	},
	{
		name: "Contact",
		link: "",
	},
]

const NavBar = () => {
	return (
		<div className=" px-6 py-4 w-full flex justify-between items-center text-primary-light">
			<div className=" font-bold text-xl">Portfolio</div>
			<div className=" flex items-center gap-4">
				{NAVBAR_ITEMS.map((eachItem, index) => (
					<div
						key={index + eachItem.name}
						className="px-5 py-1 font-semibold  bg-primary-500 rounded-3xl "
					>
						{eachItem.name}
					</div>
				))}
			</div>
		</div>
	)
}

export default NavBar
