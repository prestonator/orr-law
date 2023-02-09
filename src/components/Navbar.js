import styles from "@/src/styles/components/Navbar.module.css";
import Image from "next/image";
import urlBuilder from "@/src/utils/urlBuilder";
import Link from "next/link";
import { getNavData } from "@/src/api/fetchData/fetchNav";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";

export default async function Navbar() {
	const navItemData = await getNavData();
	const navLogoData = await getMediaData(3);
	const navItems = navItemData.data.renderNavigation;
	const navLogo = navLogoData.attributes;
	return (
		<>
			<div className={styles.logoWrapper}>
				<Image
					src={urlBuilder(navLogo.url)}
					alt={navLogo.alternativeText}
					fill
				/>
			</div>
			<ul className={styles.navItemContainer}>
				{navItems.map((item) => (
					<li key={item.title} className={styles.navItem}>
						<Link href={item.path} className={styles.menuLink}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
