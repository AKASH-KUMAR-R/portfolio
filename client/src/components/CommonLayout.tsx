import type { ReactNode } from "react";
import type React from "react";
import NavBar from "./navbar/NavBar";

type CommonLayoutProps = {
	children: ReactNode;
};

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
	return (
		<div
			id="scroll-container"
			className=" w-full h-screen bg-primary overflow-y-auto"
		>
			<NavBar />
			<div className=" px-6 h-full space-y-10">{children}</div>
		</div>
	);
};

export default CommonLayout;
