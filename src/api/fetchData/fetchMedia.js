import { fetchData } from "@/src/api/server";
import { MediaQuery } from "@/src/api/queries";
export const getMediaData = async (ids) => {
	const promises = [];
	for (let id of ids) {
		promises.push(fetchData(MediaQuery, { uploadFileId: id }));
	}
	const data = await Promise.all(promises).then((res) => {
		return res.map((item) => item.data.uploadFile.data);
	});
	return data;
};
