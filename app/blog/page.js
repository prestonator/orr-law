import { getPostData } from "@/src/api/fetchData/fetchPost";
import BlogCard from "@/src/components/BlogCard";

export default async function Page() {
	const { allPostData } = await getPostData();
	// console.log(allPostData);
	return (
		<>
			
			<section className="sectionOne">
				{allPostData.map((post) => (
					<BlogCard
						key={post.attributes.slug}
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
				))}
			</section>
		</>
	);
}
