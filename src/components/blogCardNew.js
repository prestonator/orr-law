import Link from "next/link";
import Image from "next/image";
import formatDate from "../utils/FormatDate";
import urlBuilder from "../utils/urlBuilder";
import ReactMarkdown from "react-markdown";
import styles from "@/src/styles/components/card.module.css";

const BlogCard = (props) => {
	const { title, author, excerpt, date, image, imageAlt, categories, slug } =
		props;

	return (
			<Link
			href={`blog/${slug}`}
				className={`${styles.blogCard} ${styles.springFever}`}
				style={{
					backgroundImage: `url(${urlBuilder(image)})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className={styles.titleContent}>
					<h3 className={styles.titleHeading}>{title}</h3>
					<div className={styles.intro}><span className={styles.introContent}>Written by {author}</span></div>
				</div>
				<div className={styles.cardInfo}>
					<ReactMarkdown>{`${excerpt}...`}</ReactMarkdown>
					<Link href="#" className={styles.buttonLink}>
						Read Article
						<span
							className={`${styles.licon} ${styles.iconArr} ${styles.iconBlack} ${styles.learnIcon}`}
						></span>
					</Link>
				</div>
				<div className={styles.utilityInfo}>
					<ul className={styles.utilityList}>
						<li className={styles.utilityListItem}>
							<span className={`${styles.licon} ${styles.iconDat}`}></span>
							<span className={styles.metaTags}>{formatDate(date)}</span>
						</li>
						<li className={styles.utilityListItem}>
							<span className={`${styles.licon} ${styles.iconTag}`}></span>
							<span className={styles.metaTags}>{categories}</span>
						</li>
					</ul>
				</div>
				<div className={styles.gradientOverlay}></div>
				<div className={styles.colorOverlay}></div>
			</Link>
	);
};

export default BlogCard;
