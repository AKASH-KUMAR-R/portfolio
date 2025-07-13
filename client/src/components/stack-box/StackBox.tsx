import { IoLogoReact } from "react-icons/io5";
import { getStackDetails } from "./stackConfig";

type StackBoxProps = {
	stack: string;
};

const StackBox = ({ stack }: StackBoxProps) => {
	const stackConfig = getStackDetails(stack);

	if (!stackConfig) return null;

	return (
		<div
			className={`stack-tag w-full h-20 max-w-24 flex flex-col justify-center items-center p-2 border-2 border-primary-500 rounded-md shadow-sm ${stackConfig.shadowColor} ${stackConfig.textColor} transition-colors duration-300`}
		>
			<div>
				<stackConfig.icon size={24} />
			</div>
			<span className=" text-sm ">{stackConfig.name}</span>
		</div>
	);
};

export default StackBox;
