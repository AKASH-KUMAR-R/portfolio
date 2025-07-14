import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="w-full bg-[--color-primary] text-primary-light py-16 px-6"
		>
			<div className=" flex flex-col items-center">
				<h2 className=" font-bold text-3xl md:text-5xl">Contact Me</h2>
				<h2 className=" text-3xl md:text-4xl font-bold mb-6 text-center mt-4">
					Let's Talk Over Coffee ☕
				</h2>
				<p className="text-lg text-center max-w-xl mb-8">
					Got an opportunity, idea, or a bug report? Reach out — I'm just a
					click away.
				</p>

				<div className="flex flex-wrap justify-center items-center gap-6 text-xl">
					<a
						href="mailto:akashkumar210874@gmail.com"
						className="flex items-center gap-2 hover:text-gray-400 transition"
					>
						<MdEmail size={24} />
						akashkumar210874@gmail.com
					</a>

					<a
						href="https://www.linkedin.com/in/akash-kumar-r-165b092aa"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#0077b5] transition"
					>
						<FaLinkedin size={24} />
					</a>

					<a
						href="https://github.com/AKASH-KUMAR-R"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-300 transition"
					>
						<FaGithub size={24} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
