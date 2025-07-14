import AboutSection from "./components/AboutSection";
import CommonLayout from "./components/CommonLayout";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./components/TechStack";

ScrollTrigger.defaults({
	scroller: "#scroll-container",
});

function App() {
	return (
		<main>
			<CommonLayout>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<TechStack />
				<ContactSection />
			</CommonLayout>
		</main>
	);
}

export default App;
