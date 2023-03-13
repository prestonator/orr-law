import Image from "next/image";
import dynamic from "next/dynamic";
import { getPageTemplateData } from "@/src/api/fetchData/pageTemplateAPI";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import { fetchPostData } from "@/src/api/fetchData/blogAPI";
import styles from "./page.module.css";
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
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `linear-gradient(var(--color-blue-overlay), var(--color-blue-overlay)), url(${templateData.heroImageUrl})`,
					backgroundSize: "cover",
					backgroundPositionY: "calc(-1 * var(--sizing-xxxl))",
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
						{templateData.services.map((service) => {
							return (
								<InfoBlurb
									key={service.id}
									title={service.title}
									text={service.content}
									icon={service.icon.data.attributes.url}
									iconAlt={service.icon.data.attributes.alternativeText}
									background="var(--color-gold)"
									iconColor="var(--color-white)"
								/>
							);
						})}
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
						Brandon can help with making the legal process affordable and
						accessible for everyone. We understand that estate planning and
						contract law can be complex and overwhelming, which is why we take
						the time to clearly explain the process and guide you through every
						step.
					</p>
				</div>
				<div className={`${styles.col} ${styles.colThree}`}>
					<p>
						At Orr Law, we believe that everyone deserves access to quality
						legal representation, which is why we offer competitive rates and
						flexible payment plans. Whether you are a small business owner, an
						individual, or a family, we are here to help you protect your assets
						and secure your future. Contact us today to schedule a consultation
						and see how we can help you.
					</p>
				</div>
			</section>
			<section className={styles.sectionFour}>
				<div className={`${styles.rowOne}`}>
					<h3>Why Orr Law?</h3>
				</div>
				<div className={styles.rowTwo}>
				{templateData.blurbContent[0].services.map((blurb) => {
					return (
						<div key={blurb.id} className={styles.whyChooseUs}>
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blurb.icon.data.attributes.url}`}
								alt={blurb.icon.data.attributes.alternativeText}
								width={50}
								height={50}
							/>
							<h4>{blurb.title}</h4>
							<p>{blurb.content}</p>
						</div>
					);
				})}</div>
			</section>
			<section className={styles.sectionFive}>
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
