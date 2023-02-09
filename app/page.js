import Image from "next/image";
import styles from "./page.module.css";
import urlBuilder from "@/src/utils/urlBuilder";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import ButtonPrimary from "@/src/components/ButtonPrimary";
import InfoBlurb from "@/src/components/InfoBlurb";
import { GiScales, GiFamilyHouse } from "react-icons/gi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import PostBlurbSection from "@/src/components/PostPreviewSection";

export default async function Home() {
	const heroImageQuery = await getMediaData(4);
	const brandonHeadshotQuery = await getMediaData(5);
	const heroImageUrl = urlBuilder(heroImageQuery.attributes.url);
	const brandonHeadshotUrl = urlBuilder(brandonHeadshotQuery.attributes.url);
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
						<h1>
							Welcome to Orr <br />& Associates
						</h1>
					</div>
					<div className={styles.row}>
						<p>
							This is where we will put a SEO paragraph, explaining areas of
							practice, etc.
						</p>
					</div>
					<div className={`${styles.row} ${styles.buttonContainer}`}>
						<ButtonPrimary
							href="/practice-areas"
							color="var(--color-white)"
							fontsize="var(--font-size-small)"
							background="var(--color-gold)"
							borderwidth="0"
						>
							Practice Areas
						</ButtonPrimary>
						<ButtonPrimary
							href="/about"
							color="var(--color-white)"
							fontsize="var(--font-size-small)"
							background="var(--color-blue)"
							borderwidth="0"
						>
							About Us
						</ButtonPrimary>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<div className={`${styles.row} ${styles.rowOne}`}>
						<InfoBlurb
							title="Contract Review"
							text="Family issues, domestic relations, divorce, child custody and support, alimony, adoption."
							icon={<GiScales />}
							background="var(--color-blue)"
							iconColor="var(--color-gold)"
						/>
						<InfoBlurb
							title="Estate Law"
							text="Drafting and reviewing wills/trusts, probate and estate administration, and estate dispute litigation."
							icon={<GiFamilyHouse />}
							background="var(--color-gold)"
							iconColor="var(--color-white)"
						/>
						<InfoBlurb
							title="Business Formation"
							text="Learn more about the cases Orr & Associates handles, and see how we can help you"
							icon={<HiOutlinePresentationChartLine />}
							background="var(--color-blue)"
							iconColor="var(--color-gold)"
						/>
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<ButtonPrimary
							href="/about"
							color="var(--color-white)"
							fontsize="var(--font-size-small)"
							background="var(--color-blue)"
							borderwidth="0"
						>
							Learn More
						</ButtonPrimary>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={brandonHeadshotUrl}
							alt={brandonHeadshotQuery.attributes.alternativeText}
							fill
							priority
						/>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<span>Attorney</span>
					<h3>Brandon Orr</h3>
					<p>Serving Oklahoma City and surrounding areas</p>
					<p>
						We specialize in making the legal process affordable and accessible
						for everyone. We understand that estate planning and contract law
						can be complex and overwhelming, which is why we take the time to
						clearly explain the process and guide you through every step.
					</p>
				</div>
				<div className={`${styles.col} ${styles.colThree}`}>
					<p>
						At Orr Law Firm, we believe that everyone deserves access to quality
						legal representation, which is why we offer competitive rates and
						flexible payment plans. Whether you are a small business owner, an
						individual, or a family, we are here to help you protect your assets
						and secure your future. Contact us today to schedule a consultation
						and see how we can help you.
					</p>
				</div>
			</section>
			<section className={styles.sectionFour}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<h3>News Updates</h3>
					<span>Blog</span>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<PostBlurbSection />
				</div>
			</section>
		</>
	);
}
