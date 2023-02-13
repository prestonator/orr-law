import Link from "next/link";
import formatDate from "../utils/FormatDate";
import urlBuilder from "../utils/urlBuilder";
import ReactMarkdown from "react-markdown";
import styles from "@/src/styles/components/BlogCard.module.css";
import ButtonPrimary from "./ButtonPrimary";
import { AiOutlineCalendar, AiOutlineTags } from "react-icons/ai";

const BlogCard = (props) => {
	const { title, author, excerpt, date, image, imageAlt, categories, slug } =
		props;

	return (
		<div
			className={`${styles.blogCard}`}
			style={{
				backgroundImage: `url(${urlBuilder(image)})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className={styles.titleContent}>
				<h3 className={styles.titleHeading}>{title}</h3>
					<span className={styles.introContent}>Written by {author}</span>
			</div>
			<div className={styles.cardInfo}>
				<ReactMarkdown>{`${excerpt.substring(0, 50)}...`}</ReactMarkdown>
				<div className={`${styles.buttonLink}`}>
					<ButtonPrimary
						bordercolor="var(--color-gold)"
						color="var(--color-white)"
						href={`blog/${slug}`}
					>
						Read Article
					</ButtonPrimary>
				</div>
			</div>
			<div className={styles.utilityInfo}>
				<ul className={styles.utilityList}>
					<li className={styles.utilityListItem}>
						<AiOutlineCalendar />
						<span>{formatDate(date)}</span>
					</li>
					<li className={styles.utilityListItem}>
						<AiOutlineTags />
						<span className={styles.metaTags}>{categories}</span>
					</li>
				</ul>
			</div>
			<div className={styles.gradientOverlay}></div>
			<div className={styles.colorOverlay}></div>
		</div>
	);
};

export default BlogCard;
