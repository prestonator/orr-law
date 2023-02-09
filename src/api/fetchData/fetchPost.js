import { fetchData } from "@/src/api/server";
import { PreviewPostQuery, AllPostsQuery } from "@/src/api/queries";

export const getPreviewPostData = async () => {
	const previewPostData = await fetchData(PreviewPostQuery).then((res) => {
		return res.data.posts.data;
	});

	return previewPostData;
};
