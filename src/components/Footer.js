import styles from "@/src/styles/components/Footer.module.css";
import {
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiFillFacebook,
} from "react-icons/ai";
import { getNavData } from "@/src/api/fetchData/fetchNav";
import Link from "next/link";

const Footer = async () => {
	const navItemData = await getNavData();
	const navItems = navItemData.data.renderNavigation;
	return (
		<footer className={styles.footerWrapper}>
			<div className={`${styles.footerContainer}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
						<AiFillLinkedin />
						<AiFillTwitterSquare />
						<AiFillFacebook />
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<ul className={styles.footerLinkContainer}>
						{navItems.map((item) => (
							<li key={item.path} className={styles.footerLinkWrapper}>
								<Link href={item.path} className={styles.footerLink}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={`${styles.row} ${styles.rowThree}`}>
					<p>© 2023 | Orr Law, P.L.L.C. | All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
