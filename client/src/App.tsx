import AboutSection from "./components/AboutSection"
import CommonLayout from "./components/CommonLayout"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"

function App() {
	return (
		<div>
			<CommonLayout>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
			</CommonLayout>
		</div>
	)
}

export default App
