import { fetchData } from "@/src/api/server";
import { PreviewPostQuery, AllPostsQuery } from "@/src/api/queries";

export const getPostData = async () => {
	const previewPostData = await fetchData(PreviewPostQuery).then((res) => {
		return res.data.posts.data;
	});

	const allPostData = await fetchData(AllPostsQuery).then((res) => {
		return res.data.posts.data;
	});

	return {
		previewPostData,
		allPostData,
	};
};
