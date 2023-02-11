import styles from "@/src/styles/pages/About.module.css";
import Image from "next/image";
import urlBuilder from "@/src/utils/urlBuilder";
import { getAuthorData } from "@/src/api/fetchData/fetchAuthor";
import ReactMarkdown from "react-markdown";
import { PageWrapper } from "@/src/utils/pageWrapper";

export default async function About() {
	const authorData = await getAuthorData("1");
	const author = authorData.attributes;
	// console.log(author);

	return (
		<>
			<div className="sectionBorder"></div>
			<section className={styles.sectionOne}>
				<div className={styles.row}>
					<div className={styles.heading}>
						<h1>
							<span style={{ color: "var(--color-gold)" }}>About</span>{" "}
							{author.name}
						</h1>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							src={urlBuilder(author.headshot.data.attributes.url)}
							alt={author.headshot.data.attributes.alternativeText}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
					<ReactMarkdown
						className={styles.textWrapper}
					>{`${author.bio}`}</ReactMarkdown>
				</div>
			</section>
		</>
	);
}
