"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostBlurb from "@/src/utils/PostPreviewPartial";
import { getPreviewPostData } from "@/src/api/fetchData/fetchPost";

const PreviewPostSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const PostBlurbSection = () => {
	const [previewData, setPreviewData] = useState(null);

	useEffect(() => {
		getPreviewPostData().then((data) => {
			if (data) setPreviewData(data);
		});
	}, []);

	if (!previewData || previewData.length === 0) return <div>Loading...</div>;

	
	return (
		<PreviewPostSection>
			{previewData
				.sort((a, b) => b.attributes.datePublished - a.attributes.datePublished)
				.slice(0, 3)
				.map((post) => (
					<PostBlurb
						key={post.attributes.slug}
						title={post.attributes.title}
						image={post.attributes.image.data.attributes.url}
						alt={post.attributes.image.data.attributes.alternativeText}
						slug={post.attributes.slug}
					/>
				))}
		</PreviewPostSection>
	);
};

export default PostBlurbSection;
