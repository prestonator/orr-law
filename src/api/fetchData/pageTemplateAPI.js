import { fetchData } from "../server";
import { PageTemplateQuery } from "../queries";


export const getPageTemplateData = async (title) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const response = await fetchData(PageTemplateQuery, {
		filters: {
			title: {
				containsi: title,
			},
		},
	});

	if (!response?.data?.pages?.data[0]) return null;

	const { heading, subHeading, heroImage, blocks } =
		response.data.pages.data[0].attributes;

	const heroImageUrl = `${strapiUrl}${heroImage.data.attributes.url}`;
	const heroImageAlt = heroImage.data.attributes.alternativeText;
	const pageHeading = heading;
	const pageSubHeading = subHeading;
	const footerQuote = blocks[0].footer.footerQuote;
	const links = blocks[0].links.pages;
	const copyrightNotice = blocks[0].copyrightNotice;
	const services = blocks[1]?.services;


	return {
		heroImageUrl,
		heroImageAlt,
		pageHeading,
		pageSubHeading,
		footerQuote,
		links,
		copyrightNotice,
		services,
	};
};
