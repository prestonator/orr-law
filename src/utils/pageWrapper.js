"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const slideUp = {
	name: "Slide Up",
	in: {
		opacity: 0,
		top: "100vh",
		scale: 0.4,
	},
	animate: {
		opacity: 1,
		top: "0vh",
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.75,
		},
	},
	out: {
		opacity: 0,
		top: "100vh",
		scale: 0.4,
	},
};



export const PageWrapper = ({ children }) => {
	const asPath = usePathname();

	return (
		<div>
			<AnimatePresence initial={false} mode="wait">
				<motion.div
					key={asPath}
					variants={slideUp}
					animate="animate"
					initial="in"
					exit="out"
					transition="transition"
					layout
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
