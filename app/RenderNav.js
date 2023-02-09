// app/RenderNav.js
"use client";
import { useMediaQuery } from "react-responsive";
import styles from "@/src/styles/components/Navbar.module.css";
import React, { useState, useEffect } from "react";

export default function RenderNav({ children }) {
	const [className, setClassName] = useState(styles.desktopNavContainer);
	const breakpoint = useMediaQuery({ minWidth: 1000 });
	useEffect(() => {
		setClassName(
			breakpoint ? styles.desktopNavContainer : styles.mobileNavContainer
		);
	}, [breakpoint]);

	// Hamburger menu stuff

	return (
		<>
			<nav className={className}>
				<input className={styles.checkbox} type="checkbox" name="" id="" />
				<div className={styles.hamburgerLines}>
					<span className={`${styles.line} ${styles.lineOne}`}></span>
					<span className={`${styles.line} ${styles.lineTwo}`}></span>
					<span className={`${styles.line} ${styles.lineThree}`}></span>
				</div>
				<h1 className={styles.navTitle}>Orr Law, LLC</h1>
				{children}
			</nav>
		</>
	);
}
