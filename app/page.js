import Image from "next/image";
import dynamic from "next/dynamic";
import { getPageTemplateData } from "@/src/api/fetchData/pageTemplateAPI";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import { fetchPostData } from "@/src/api/fetchData/blogAPI";
import styles from "./page.module.css";
import { GiScales, GiFamilyHouse } from "react-icons/gi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import Footer from "@/src/components/Footer";
const ButtonPrimary = dynamic(() => import("@/src/components/ButtonPrimary"));
const InfoBlurb = dynamic(() => import("@/src/components/InfoBlurb"));
const PostBlurb = dynamic(() => import("@/src/components/PostPreviewBlurb"));


async function getMedia() {
	const [brandonHeadshot] = await getMediaData([5]);
	return {
		brandonHeadshot,
	};
}

async function getPreviewPostData() {
	const previewPostData = await fetchPostData();
	return previewPostData;
}

async function getTemplateData() {
	const templateData = await getPageTemplateData("home");
	return templateData;
}

export default async function Home() {
	const { brandonHeadshot } = await getMedia();
	const previewPostData = await getPreviewPostData();
	const templateData = await getTemplateData();
	console.log(templateData);
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
							iconColor="var(--color-white)"
						/>
						<InfoBlurb
							title="Estate Law"
							text="Drafting and reviewing wills/trusts, probate and estate administration, and estate dispute litigation."
							icon={<GiFamilyHouse />}
							background="var(--color-blue)"
							iconColor="var(--color-white)"
						/>
						<InfoBlurb
							title="Business Formation"
							text="Learn more about the cases Orr & Associates handles, and see how we can help you"
							icon={<HiOutlinePresentationChartLine />}
							background="var(--color-blue)"
							iconColor="var(--color-white)"
						/>
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<ButtonPrimary
							href="/about"
							color="var(--color-white)"
							fontsize="var(--font-size-small)"
							background="var(--color-blue)"
							borderWidth="0"
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
							src={brandonHeadshot.fullUrl}
							alt={brandonHeadshot.altText}
							fill
							priority
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
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
					{previewPostData.slice(0, 3).map((post) => {
						return (
							<PostBlurb
								key={post.attributes.slug}
								title={post.attributes.title}
								image={post.attributes.image.data.attributes.url}
								alt={post.attributes.image.data.attributes.alternativeText}
								slug={post.attributes.slug}
							/>
						);
					})}
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
