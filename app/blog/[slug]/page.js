import { getPostData } from "@/src/api/fetchData/fetchPost";
import { fetchData } from "@/src/api/server";
import { PostBySlugQuery } from "@/src/api/queries";
import urlBuilder from "@/src/utils/urlBuilder";
import formatDate from "@/src/utils/FormatDate";
import Image from "next/image";
import styles from "@/src/styles/pages/BlogPost.module.css";
import ReactMarkdown from "react-markdown";


export async function generateStaticParams() {
	const { allPostData } = await getPostData();

	return allPostData.map((post) => ({
		slug: post.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const postRes = await fetchData(PostBySlugQuery, {
		filters: { slug: { contains: params.slug } },
	}).then((res) => {
		return res.data.posts.data[0].attributes;
	});

	// console.log(postRes);

	return (
		<>
			<div className="sectionBorder"></div>
			<section className={styles.sectionOne}>
				<div className={`${styles.col} ${styles.colOne}`}>
						<span className={styles.author}>
							{postRes.author.data.attributes.name}
						</span>
						<h1 className={styles.title}>{postRes.title}</h1>
						<p className={styles.excerpt}>{postRes.excerpt}</p>
						{postRes.categories && (
							<span className={styles.categories}>
								{postRes.categories.data
									.map((item) => item.attributes.category)
									.join(", ")}
							</span>
						)}
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={urlBuilder(postRes.image.data.attributes.url)}
							alt={postRes.image.data.attributes.alternativeText}
							fill
						/>
					</div>
					<div className={styles.textContainer}>
                        <span>Published On</span>
						<p>{`${formatDate(postRes.datePublished)}`}</p>
					</div>
				</div>
			</section>
            <hr className={styles.sectionDivider} />
			<section className={styles.sectionTwo}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<p>SideBar Content</p>
                    <p>SideBar Content</p>
                    <p>SideBar Content</p>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<ReactMarkdown>{postRes.content}</ReactMarkdown>
				</div>
			</section>
		</>
	);
}
