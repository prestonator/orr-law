"use client";
import Image from "next/image";
import styled from "styled-components";

const InfoBlurbContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: var(--sizing-large) var(--sizing-small);
	text-align: center;
	flex-basis: var(--sizing-super);
	background: ${(props) => props.background || "transparent"};
	border-radius: var(--default-border-radius);
	.iconWrapper {
		img {
			width: var(--sizing-xl);
			height: var(--sizing-xl);
			color: ${(props) => props.iconColor || "var(--color-white)"};
		}
	}
	.textContainer {
		color: ${(props) => props.textColor || "var(--color-white)"};
		h2 {
			font: 600 ${(props) => props.titleSize || "var(--font-size-title)"}
				var(--font-family-fancy);
			margin-bottom: ${(props) => props.titleMargin || "var(--sizing-xs)"};
		}
		p {
			font: 500 var(--font-size-body) var(--font-family-content);
		}
	}
`;

const InfoBlurb = ({
	title,
	text,
	icon,
	iconAlt,
	background,
	textColor,
	iconColor,
	titleMargin,
	titleSize,
}) => {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	return (
		<InfoBlurbContainer
			className="infoBlurb"
			background={background}
			textColor={textColor}
			iconColor={iconColor}
			iconAlt={iconAlt}
			titleMargin={titleMargin}
			titleSize={titleSize}
		>
			<div className="iconWrapper">
				<Image src={`${strapiUrl}${icon}`} alt={iconAlt} width={100} height={100} />
			</div>
			<div className="textContainer">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</InfoBlurbContainer>
	);
};

export default InfoBlurb;
