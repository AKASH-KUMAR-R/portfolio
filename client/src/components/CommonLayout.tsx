import type { ReactNode } from "react"
import type React from "react"
import NavBar from "./navbar/NavBar"

type CommonLayoutProps = {
	children: ReactNode
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
	return (
		<div className=" w-full h-screen bg-primary">
			<NavBar />
			<div className=" px-6 h-[calc(100%-64px)] overflow-y-auto space-y-10">
				{children}
			</div>
		</div>
	)
}

export default CommonLayout
