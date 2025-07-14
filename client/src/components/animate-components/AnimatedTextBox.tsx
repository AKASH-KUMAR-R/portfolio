import { useEffect, useRef, useState } from "react";

type AnimatedTextBoxProps = {
	text: string;
	divRef?: (el: HTMLDivElement | null) => void;
	className?: string;
};

const AnimatedTextBox = ({ text, divRef, className }: AnimatedTextBoxProps) => {
	const localRef = useRef<HTMLDivElement | null>(null);

	const [display, setDisplay] = useState(text);

	useEffect(() => {
		let i = 0;
		let isDeleting = false;

		const interval = setInterval(() => {
			setDisplay(() => {
				if (!isDeleting) {
					// Typing phase
					const next = text.slice(0, i + 1);
					i++;
					if (i === text.length) {
						isDeleting = true;
						setTimeout(() => {}, 200);
					}
					return next;
				} else {
					// Deleting phase
					const next = text.slice(0, i - 1);
					i--;
					if (i === 0) {
						isDeleting = false;
					}
					return next;
				}
			});
		}, 100);

		return () => clearInterval(interval);
	}, [text]);

	return (
		<div
			ref={(el) => {
				if (divRef) divRef(el);
				localRef.current = el;
			}}
			className={` w-60 font-mono text-white text-sm ${className ?? ""}`}
		>
			{display}
			<span className="animate-ping">|</span>
		</div>
	);
};

export default AnimatedTextBox;
