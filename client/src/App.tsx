import AboutSection from "./components/AboutSection";
import CommonLayout from "./components/CommonLayout";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

import { ScrollTrigger } from "gsap/ScrollTrigger";

ScrollTrigger.defaults({
	scroller: "#scroll-container",
});

function App() {
	return (
		<div>
			<CommonLayout>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<ContactSection />
			</CommonLayout>
		</div>
	);
}

export default App;
