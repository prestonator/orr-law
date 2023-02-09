import { fetchData } from "@/src/api/server";
import { AuthorQuery } from "@/src/api/queries";

export const getAuthorData = async (id) => {
	const data = await fetchData(AuthorQuery, {
		authorId: id,
	}).then((res) => {
		return res.data.author.data;
	});

	return data;
};
