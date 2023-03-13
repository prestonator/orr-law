"use client";
//import markdownStyles from "@/styles/markdown-styles.module.css";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import renderers from "../utils/renderers";
import TableOfContents from "./articleTableOfContents";

const PostContent = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: var(--sizing-large);
	padding-top: var(--sizing-large);
	padding-left: var(--sizing-medium);
	padding-right: var(--sizing-medium);
`;

const ContentWrapper = styled.div`
	flex-basis: var(--custom);
	h2 {
		font: 500 var(--font-size-title) var(--font-family-fancy);
		margin-top: var(--sizing-medium);
	}
	p {
		font: 300 var(--font-size-normal) var(--font-family-content);
		margin: var(--sizing-xs) 0;
		line-height: 2.2em;
		text-align: justify;
	}
`;

const Sidebar = styled.div`
	flex-basis: var(--sizing-super);
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

//const test = require("~static/docs/markdown.md");
export default function PostBody({ content, toc }) {
	return (
		<>
			<PostContent>
				{toc && toc.length > 0 ? (
					<Sidebar>
						<TableOfContents toc={toc} />
					</Sidebar>
				) : null}
				<ContentWrapper className="e-content">
					<ReactMarkdown
						components={renderers}
						style={{ width: "100%", height: "100%", position: "relative" }}
					>
						{content}
					</ReactMarkdown>
				</ContentWrapper>
			</PostContent>
		</>
	);
}
