import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import urlBuilder from "@/src/utils/urlBuilder";
import ButtonPrimary from "@/src/components/ButtonPrimary";
import styles from "@/src/styles/pages/PracticeAreas.module.css";
import Demo from "./Accordion";
import InfoBlurb from "@/src/components/InfoBlurb";

export default async function PracticeAreas() {
	const [heroImageData] = await getMediaData([8]);
	const heroImageUrl = urlBuilder(heroImageData.attributes.url);
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `linear-gradient(var(--color-blue-overlay), var(--color-blue-overlay)), url(${heroImageUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.col}>
					<div className={styles.row}>
						<h1>Comprehensive Legal Services for Individuals and Families.</h1>
					</div>
					<div className={styles.row}>
						<p>
							Our firm provides services related to Estate Planning, Business
							Formation, and general contract reviews.
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
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<Demo />
					</div>
				</div>
			</section>
		</>
	);
}
