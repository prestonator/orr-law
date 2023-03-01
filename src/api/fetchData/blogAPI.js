import { fetchData } from "@/src/api/server";
import { BlogPostQuery, BlogPostBySlugQuery } from "@/src/api/queries";
import formatDate from "@/src/utils/FormatDate";

export const fetchPostData = async () => {
	const response = await fetchData(BlogPostQuery);
	const allPostData = response?.data?.posts.data ?? [];
	return allPostData;
};

export const fetchPostDataBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const response = await fetchData(BlogPostBySlugQuery, {
		filters: { slug: { contains: slug } },
	});

	if (!response?.data?.posts?.data[0]) return null;

	const {
		title,
		slug: postSlug,
		image,
		author,
		categories,
		content: postContent,
		datePublished,
        excerpt,
	} = response.data.posts.data[0].attributes;

	const imageUrl = `${strapiUrl}${image.data.attributes.url}`;
	const imageAlt = image.data.attributes.alternativeText;
	const avatarUrl = `${strapiUrl}${author.data.attributes.headshot.data.attributes.url}`;
	const avatarAlt =
		author.data.attributes.headshot.data.attributes.alternativeText;
	const authorName = author.data.attributes.name;
	const authorBio = author.data.attributes.bio;
	const publishDate = formatDate(datePublished);
	const postTitle = title;

	return {
		postTitle,
		postSlug,
		imageUrl,
		imageAlt,
		avatarUrl,
		avatarAlt,
		authorName,
		authorBio,
		publishDate,
		postContent,
		categories: categories.data.map((item) => item.attributes.category),
        excerpt
	};
};
