import { getPageTemplateData } from "@/src/api/fetchData/pageTemplateAPI";
import Footer from "@/src/components/Footer";
import ButtonPrimary from "@/src/components/ButtonPrimary";
import styles from "@/src/styles/pages/PracticeAreas.module.css";
import AccordionContainer from "./Accordion";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import Image from "next/image";

async function getTemplateData() {
	const templateData = await getPageTemplateData("practice");
	return templateData;
}

async function getImages() {
	const [houseImageData, familyImageData, contractImageData] =
		await getMediaData([39, 40, 41]);
	const houseImageUrl = houseImageData.fullUrl;
	const houseImageAlt = houseImageData.altText;
	const familyImageUrl = familyImageData.fullUrl;
	const familyImageAlt = familyImageData.altText;
	const contractImageUrl = contractImageData.fullUrl;
	const contractImageAlt = contractImageData.altText;
	return {
		houseImageUrl,
		houseImageAlt,
		familyImageUrl,
		familyImageAlt,
		contractImageUrl,
		contractImageAlt,
	};
}

export default async function PracticeAreas() {
	const templateData = await getTemplateData();
	const images = await getImages();
	const accordionContent = templateData.accordion[0].item;
	const accordionData = accordionContent.map((item) => {
		return {
			id: item.id,
			title: item.title,
			content: item.content,
			icon: item.icon.data.attributes.url,
		};
	});
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
						<p>{templateData.pageSubHeading}</p>
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
						<AccordionContainer accordionData={accordionData} />
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}></div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<span>Protecting your assets</span>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<div className={`${styles.imageWrapper}`}>
						<Image src={images.houseImageUrl} alt={images.houseImageAlt} fill />
					</div>
					<div className={`${styles.imageWrapper}`}>
						<Image src={images.familyImageUrl} alt={images.familyImageAlt} fill />
					</div>
					<div className={`${styles.imageWrapper}`}>
						<Image src={images.contractImageUrl} alt={images.contractImageAlt} fill />
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowThree}`}>
					<span>Securing your future</span>
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
