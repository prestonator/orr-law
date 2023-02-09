"use client";
import Image from "next/image";
import urlBuilder from "../utils/urlBuilder";
import styled from "styled-components";

const InfoBlurbContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    padding: var(--sizing-xs) var(--sizing-small);
	text-align: center;
    flex-basis: var(--sizing-super);
    background: ${(props) => props.background || "transparent"};
    border-radius: var(--default-border-radius);
	.iconWrapper {
		svg {
			width: var(--sizing-xl);
			height: var(--sizing-xl);
            color: ${(props) => props.iconColor || "var(--color-white)"};
		}
	}
	.textContainer {
        color: ${(props) => props.textColor || "var(--color-white)"};
        h2 {
            font: 600 var(--font-size-title) var(--font-family-fancy);
        }
        p {
            font: 500 var(--font-size-body) var(--font-family-content);
        }
	}

    @media(max-width: 900px) {
        justify-content: center;
        flex-basis: var(--sizing-xxxl);
        padding: var(--sizing-xs) var(--sizing-medium);
        .textContainer {
            p {
                display: none;
            }
        }
    }
`;

const InfoBlurb = ({ title, text, icon, background, textColor, iconColor }) => {
	return (
		<InfoBlurbContainer className="infoBlurb" background={background} textColor={textColor} iconColor={iconColor}>
			<div className="iconWrapper">{icon}</div>
			<div className="textContainer">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</InfoBlurbContainer>
	);
};

export default InfoBlurb;
