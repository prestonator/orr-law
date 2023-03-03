import React from "react";
import Link from "next/link";



const renderers = {

	a: ({ children, href, title, alt }) => {
		return href.startsWith("/") ? (
			<Link className="external-link" href={href} title={title} alt={alt}>
				{children}
			</Link>
		) : (
			<a
				className="internal-link"
				href={href}
				title={title}
				alt={alt}
				rel="nofollow noopener"
			>
				{children}
			</a>
		);
	},
	h2: ({ children }) => {
		const anchor = `${children[0].replace(/ /g, "-").toLowerCase()}`;
		return <h2 id={anchor}>{children}</h2>;
	},
	h3: ({ children }) => {
		const anchor = `${children[0].replace(/ /g, "-").toLowerCase()}`;
		return <h2 id={anchor}>{children}</h2>;
	},
	h4: ({ children }) => {
		const anchor = `${children[0].replace(/ /g, "-").toLowerCase()}`;
		return <h2 id={anchor}>{children}</h2>;
	},
	h5: ({ children }) => {
		const anchor = `${children[0].replace(/ /g, "-").toLowerCase()}`;
		return <h2 id={anchor}>{children}</h2>;
	},
	h6: ({ children }) => {
		const anchor = `${children[0].replace(/ /g, "-").toLowerCase()}`;
		return <h2 id={anchor}>{children}</h2>;
	},
};

export default renderers;
