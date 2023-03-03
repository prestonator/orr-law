import { getPageTemplateData } from "@/src/api/fetchData/pageTemplateAPI";
import Footer from "@/src/components/Footer";
import ButtonPrimary from "@/src/components/ButtonPrimary";
import styles from "@/src/styles/pages/PracticeAreas.module.css";
import AccordionContainer from "./Accordion";

async function getTemplateData() {
	const templateData = await getPageTemplateData("practice");
	return templateData;
}

export default async function PracticeAreas() {
	const templateData = await getTemplateData();
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `linear-gradient(var(--color-blue-overlay), var(--color-blue-overlay)), url(${templateData.heroImageUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.col}>
					<div className={styles.row}>
						<h1>{templateData.pageHeading}</h1>
					</div>
					<div className={styles.row}>
						<p>
							{templateData.pageSubHeading}
						</p>
					</div>
					<div className={`${styles.row} ${styles.buttonContainer}`}>
						<ButtonPrimary
							href="/practice-areas"
							color="var(--color-white)"
							fontsize="var(--font-size-small)"
							background="var(--color-gold)"
							borderWidth="0"
						>
							Request Consultation
						</ButtonPrimary>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<div className={`${styles.row} ${styles.rowOne}`}>
						<h2>Main Services</h2>
						<hr />
						<AccordionContainer />
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}></div>
				</div>
			</section>
			<Footer
				icons={templateData.icons}
				copyright={templateData.copyrightNotice}
				links={templateData.links}
				footerQuote={templateData.footerQuote}
			/>
		</>
	);
}
