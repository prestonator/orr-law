import styles from "@/src/styles/components/Navbar.module.css";
import { getNavData } from "@/src/api/fetchData/fetchNav";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import Link from "next/link";
import Image from "next/image";

async function getNavigationData() {
	const navItemData = await getNavData();
	const [navLogoData] = await getMediaData([20]);
	const navItems = navItemData.data.renderNavigation;
	return {
		navItems,
		navLogoData,
	};
}

export default async function Navbar({ children }) {
	const { navItems, navLogoData } = await getNavigationData();
	return (
		<>
			<div className={styles.logoWrapper}>
				<Link href="/">
					<Image
						src={navLogoData.fullUrl}
						alt={navLogoData.altText}
						fill
						priority
						sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
					/>
				</Link>
			</div>
			<ul className={styles.navItemContainer}>
				{navItems.map((item) => (
					<li key={item.path} className={styles.navItem}>
						<Link href={item.path} className={styles.menuLink}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
			{children}
		</>
	);
}
