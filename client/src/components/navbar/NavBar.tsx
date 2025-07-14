import { useEffect, useState } from "react";
import { TbLayoutNavbar } from "react-icons/tb";

const NAVBAR_ITEMS = [
	{
		name: "Home",
		link: "#home",
	},
	{
		name: "About",
		link: "#about",
	},
	{
		name: "Projects",
		link: "#projects",
	},
	{
		name: "Tech Stack",
		link: "#tech",
	},
	{
		name: "Contact Me",
		link: "#contact",
	},
];

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const triggerNavBar = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className=" z-50 sticky top-0 px-6 py-4 w-full flex justify-between items-center text-primary-light bg-primary">
			<div className=" font-bold text-xl">Portfolio</div>

			<div className=" block lg:hidden text-white">
				<TbLayoutNavbar
					onClick={triggerNavBar}
					size={24}
					className={` ${
						isOpen ? " -rotate-90" : " rotate-90"
					} transition-all ease-in-out`}
				/>
			</div>

			<div
				className={` px-4 pt-5 z-50 w-11/12 h-screen flex flex-col gap-4  lg:hidden absolute right-0 top-0 bg-primary-500 rounded-l-md overflow-y-auto ${
					isOpen ? " translate-0" : " translate-x-full"
				} transition-transform duration-300`}
			>
				<div className="text-white">
					<TbLayoutNavbar
						onClick={triggerNavBar}
						size={24}
						className={` ${
							isOpen ? " -rotate-90" : " rotate-90"
						} transition-all ease-in-out`}
					/>
				</div>
				{NAVBAR_ITEMS.map((eachItem, index) => (
					<a
						key={index + eachItem.name}
						href={eachItem.link}
						className=" no-underline"
						onClick={triggerNavBar}
					>
						<div className="px-5 py-2 font-semibold  bg-primary-500 hover:bg-primary rounded-3xl transition-colors cursor-pointer">
							{eachItem.name}
						</div>
					</a>
				))}
			</div>

			<div className=" hidden lg:flex items-center gap-4">
				{NAVBAR_ITEMS.map((eachItem, index) => (
					<a
						key={index + eachItem.name}
						href={eachItem.link}
						className=" no-underline"
					>
						<div className="px-5 py-1 font-semibold  bg-primary-500 rounded-3xl ">
							{eachItem.name}
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default NavBar;
