import { fetchPostData } from "@/src/api/fetchData/blogAPI";
import { fetchPostDataBySlug } from "@/src/api/fetchData/blogAPI";
import Image from "next/image";
import styles from "@/src/styles/pages/BlogPost.module.css";
import { getToc } from "@/src/components/Article/utils/getTOC";
import PostBody from "@/src/components/Article/components/articleBody";

export async function generateStaticParams() {
	const allPostData = await fetchPostData();

	return allPostData.map((post) => ({
		slug: post.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const postRes = await fetchPostDataBySlug(params.slug);
	const toc = getToc(postRes.postContent);
	return (
		<>
			<div className="sectionBorder"></div>
			<section className={styles.sectionOne}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<span className={styles.author}>{postRes.authorName}</span>
					<h1 className={styles.title}>{postRes.postTitle}</h1>
					<p className={styles.excerpt}>{postRes.excerpt}</p>
					{postRes.categories && (
						<span className={styles.categories}>
							{postRes.categories.join(", ")}
						</span>
					)}
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={styles.imageWrapper}>
						<Image src={postRes.imageUrl} alt={postRes.imageAlt} fill />
					</div>
					<div className={styles.textContainer}>
						<span>Published On</span>
						<p>{postRes.publishDate}</p>
					</div>
				</div>
			</section>
			<hr className={styles.sectionDivider} />

			<PostBody content={postRes.postContent} toc={toc} />
		</>
	);
}
