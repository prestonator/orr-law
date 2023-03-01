import styles from "@/src/styles/components/Footer.module.css";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Footer = async ({ footerQuote, links, copyright }) => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={`${styles.footerContainer}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<ReactMarkdown>{footerQuote}</ReactMarkdown>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<FaLinkedinIn />
					<FaTwitter />
					<FaFacebookF />
				</div>
				<div className={`${styles.row} ${styles.rowThree}`}>
					<ul className={styles.footerLinkContainer}>
						{links.map((item) => (
							<li key={item.path} className={styles.footerLinkWrapper}>
								<Link href={item.path} className={styles.footerLink}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={`${styles.row} ${styles.rowFour}`}>
					<ReactMarkdown>{`${copyright}`}</ReactMarkdown>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
