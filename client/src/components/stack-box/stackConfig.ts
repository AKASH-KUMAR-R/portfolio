import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import type { IconType } from "react-icons";

type StackType = {
	name: string;
	icon: IconType;
	shadowColor: string;
	textColor: string;
	borderColor: string;
};
export const stackConfig: Record<string, StackType> = {
	react: {
		name: "React JS",
		icon: IoLogoReact,
		shadowColor: " shadow-cyan-800 hover:shadow-cyan-600",
		textColor: " text-cyan-800",
		borderColor: " border-2 border-cyan-600",
	},
	tailwind: {
		name: "Tailwindcss",
		icon: BiLogoTailwindCss,
		shadowColor: " shadow-cyan-800 hover:shadow-cyan-600",
		textColor: " text-cyan-800",
		borderColor: "border-2 border-cyan-600",
	},
	node: {
		name: "Node JS",
		icon: FaNode,
		shadowColor: " shadow-lime-800 hover:shadow-lime-600",
		textColor: " text-lime-800",
		borderColor: " border-2 border-lime-600",
	},
	express: {
		name: "Express JS",
		icon: SiExpress,
		shadowColor: " shadow-neutral-600 hover:shadow-neutral-400",
		textColor: " text-neutral-600",
		borderColor: " border-2 border-neutral-600",
	},
	django: {
		name: "Django",
		icon: BiLogoDjango,
		shadowColor: " shadow-emerald-800 hover:shadow-emerald-600",
		textColor: " text-emerald-800",
		borderColor: " border-2 border-emerald-600",
	},
	mongo: {
		name: "MongoDB",
		icon: SiMongodb,
		shadowColor: " shadow-green-800 hover:shadow-green-600",
		textColor: " text-green-800",
		borderColor: " border-2 border-green-600",
	},
	postgre: {
		name: "PostgreSQL",
		icon: BiLogoPostgresql,
		shadowColor: " shadow-blue-800 hover:shadow-blue-600",
		textColor: " text-blue-800",
		borderColor: " border-2 border-blue-600",
	},
};

export const getStackDetails = (stackName: string): StackType | null => {
	if (!stackName || !stackConfig[stackName]) return null;

	return stackConfig[stackName];
};
