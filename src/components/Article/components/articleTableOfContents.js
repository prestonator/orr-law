import styled from "styled-components";
import React from "react";

const ToCWrapper = styled.div`
	position: sticky;
	top: var(--sizing-small);
	margin-bottom: var(--sizing-small);
	background-color: var(--color-blue-overlay);
	padding: var(--sizing-medium);
	border-radius: var(--default-border-radius);
	font-size: var(--font-size-normal);
`;

const ToCTitle = styled.p`
	font-size: var(--font-size-heading);
	margin-bottom: var(--sizing-small);
	text-align: center;
`;

const ToCList = styled.ol`
	padding-inline-start: 0;
	display: flex;
	flex-direction: column;
	gap: var(--sizing-small);
`;
const ToCListItem = styled.li`
	list-style-type: none;
	padding-left: var(--sizing-xxs);
	padding-top: var(--sizing-xxs);
	padding-bottom: var(--sizing-xxs);
	border-left: 3px solid var(--color-gold);
`;

const ToCItemTitle = styled.a`
	transition: 0.2s;
	text-decoration: none;
	color: var(--color-white);
	:hover {
		color: var(--color-gold);
	}
`;

export default function TableOfContents({ toc }) {
	function TOC() {
		return (
			<ToCList className="table-of-contents">
				{toc.map(({ level, id, title, anchor }) => (
					//console.log(title) &&
					<ToCListItem key={id} level={level}>
						<ToCItemTitle href={anchor}>{title}</ToCItemTitle>
					</ToCListItem>
				))}
			</ToCList>
		);
	}

	return (
		<>
			<ToCTitle>Table of contents</ToCTitle>
			<ToCWrapper>
				<TOC />
			</ToCWrapper>
		</>
	);
}
