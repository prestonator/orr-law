import { fetchData } from "@/src/api/server";
import { NavItemQuery } from "@/src/api/queries";

export const getNavData = async () => {
	const data = await fetchData(NavItemQuery, {
		navigationIdOrSlug: "main-navigation",
	});

	return data;
};

