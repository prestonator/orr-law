"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import urlBuilder from "../utils/urlBuilder";

const PreviewPostBlurb = styled.div`
	flex-basis: var(--sizing-super);
	.imageWrapper {
		position: relative;
		width: var(--sizing-xxxxl);
		height: var(--sizing-xxxl);
		img {
			box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
				rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
				rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
		}
	}
	.blurbContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-decoration: none;
		color: var(--color-black);
		font: 500 var(--font-size-body) var(--font-family-content);
		gap: var(--sizing-xs);
        padding: var(--sizing-medium);
	}
	p {
		font: 500 var(--font-size-body) var(--font-family-content);
	}
`;

const PostBlurb = (props) => {
	return (
		<PreviewPostBlurb>
			<Link href={`/blog/${props.slug}`} className="blurbContainer">
				<div className="imageWrapper">
					<Image src={urlBuilder(props.image)} alt={props.alt} fill />
				</div>
				<div className="textContainer">
					<p className="textExcerpt">{`${props.title}`}</p>
				</div>
			</Link>
		</PreviewPostBlurb>
	);
};

export default PostBlurb;
