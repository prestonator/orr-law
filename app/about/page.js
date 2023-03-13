import styles from "@/src/styles/pages/About.module.css";
import Image from "next/image";
import { getAuthorData } from "@/src/api/fetchData/fetchAuthor";
import ReactMarkdown from "react-markdown";
import Footer from "@/src/components/Footer";
import { getPageTemplateData } from "@/src/api/fetchData/pageTemplateAPI";

async function getTemplateData() {
	const templateData = await getPageTemplateData("about");
	return templateData;
}

export default async function About() {
	const authorData = await getAuthorData("1");
	const author = authorData.attributes;
	const templateData = await getTemplateData();
	return (
		<>
			<div className="sectionBorder"></div>
			<section className={styles.sectionOne}>
				<div className={styles.row}>
					<div className={styles.heading}>
						<h1>
							<span style={{ color: "var(--color-gold)" }}>{templateData.pageHeading}</span>{" "}
							{templateData.pageSubHeading}
						</h1>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							src={templateData.heroImageUrl}
							alt={templateData.heroImageAlt}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
					<ReactMarkdown
						className={styles.textWrapper}
					>{`${author.bioExtended}`}</ReactMarkdown>
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
