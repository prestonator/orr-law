import { fetchPostData } from "@/src/api/fetchData/blogAPI";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import BlogCard from "@/src/components/BlogCard";
import styles from "@/src/styles/pages/Blog.module.css";
import urlBuilder from "@/src/utils/urlBuilder";

export default async function Page() {
	const allPostData = await fetchPostData();
	const [blogHeroUrl] = await getMediaData([9]);
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `linear-gradient(var(--color-blue-overlay), var(--color-blue-overlay)), url(${blogHeroUrl.fullUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<h1>
						Blog Posts
						<br />&<br />
						Current News
					</h1>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={`${styles.row}`}>
					{allPostData.slice(0, 1).map((post) => (
						<div
							className={`${styles.blogCardContainer} ${styles.blogCardContainerWide}`}
							key={post.attributes.slug}
						>
							<BlogCard
								className={styles.blogCardContainer}
								title={post.attributes.title}
								author={post.attributes.author.data.attributes.name}
								excerpt={post.attributes.excerpt}
								date={post.attributes.datePublished}
								image={post.attributes.image.data.attributes.url}
								imageAlt={post.attributes.image.data.attributes.alternativeText}
								slug={post.attributes.slug}
								categories={post.attributes.categories.data
									.map((item) => item.attributes.category)
									.join(", ")}
							/>
						</div>
					))}
					{allPostData.slice(1).map((post) => (
						<div
							className={`${styles.blogCardContainer}`}
							key={post.attributes.slug}
						>
							<BlogCard
								className={styles.blogCardContainer}
								title={post.attributes.title}
								author={post.attributes.author.data.attributes.name}
								excerpt={post.attributes.excerpt}
								date={post.attributes.datePublished}
								image={post.attributes.image.data.attributes.url}
								imageAlt={post.attributes.image.data.attributes.alternativeText}
								slug={post.attributes.slug}
								categories={post.attributes.categories.data
									.map((item) => item.attributes.category)
									.join(", ")}
							/>
						</div>
					))}
				</div>
			</section>
			<section className={styles.sectionThree}></section>
		</>
	);
}
