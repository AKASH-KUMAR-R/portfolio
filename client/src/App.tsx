import CommonLayout from "./components/CommonLayout";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageWrapper from "./PageWrapper";

ScrollTrigger.defaults({
	scroller: "#scroll-container",
});

function App() {
	return (
		<main>
			<CommonLayout>
				<PageWrapper />
			</CommonLayout>
		</main>
	);
}

export default App;
