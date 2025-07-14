import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";
import ContactSection from "./components/ContactSection";

const PageWrapper = () => {
	const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

	useEffect(() => {
		const handleHashChange = () => {
			const currSection = sectionRefs.current[window.location.hash];

			if (currSection) {
				currSection.scrollIntoView({
					behavior: "smooth",
				});
			}
		};

		window.addEventListener("hashchange", handleHashChange);

		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [location]);

	return (
		<>
			<HeroSection secRef={(el) => (sectionRefs.current["#home"] = el)} />
			<AboutSection secRef={(el) => (sectionRefs.current["#about"] = el)} />
			<ProjectSection
				secRef={(el) => (sectionRefs.current["#projects"] = el)}
			/>
			<TechStack secRef={(el) => (sectionRefs.current["#tech"] = el)} />
			<ContactSection secRef={(el) => (sectionRefs.current["#contact"] = el)} />
		</>
	);
};

export default PageWrapper;
