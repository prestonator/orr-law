"use client";
import { GiFarmTractor, GiFamilyHouse } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { Accordion, createStyles, rem } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
	root: {
		borderRadius: theme.radius.sm,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "var(--sizing-medium)",
	},

	item: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		border: `1px solid transparent`,
		position: "relative",
		zIndex: 0,
		transition: "transform 150ms ease",
		boxShadow: "var(--default-box-shadow)",

		"&[data-active]": {
			transform: "scale(1.03)",
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
			boxShadow: theme.shadows.md,
			borderColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2],
			borderRadius: theme.radius.md,
			zIndex: 1,
		},
	},

	panel: {
		blockquote: {
			borderLeft: "3px solid var(--color-blue)",
			fontSize: "var(--font-size-normal)",
			fontStyle: "italic",
			lineHeight: "1.8em",
			padding: "var(--sizing-small) var(--sizing-medium)",
		},
	},

	content: {
		paddingLeft: "var(--sizing-medium)",
		paddingRight: "var(--sizing-medium)",
	},

	control: {
		fontSize: "var(--font-size-medium)",
	},

	icon: {
		img: {
			width: "var(--sizing-large)",
			height: "var(--sizing-large)",
			color: "var(--color-blue)",
		},
	},

	chevron: {
		"&[data-rotate]": {
			transform: "rotate(-90deg)",
		},
	},
}));

export default function AccordionContainer({ accordionData }) {
	const { classes } = useStyles();
	return (
		<Accordion
			maw="var(--sizing-super-xxl)"
			px="var(--sizing-medium)"
			mx="auto"
			variant="filled"
			defaultValue="customization"
			classNames={classes}
			className={classes.root}
		>
			{accordionData.map((item) => (
				<Accordion.Item key={item.id} value={item.id}>
					<Accordion.Control
						icon={
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.icon}`}
								alt={item.title}
								width={50}
								height={50}
								style={{ color: "var(--color-blue)" }}
							/>
						}
					>
						{item.title}
					</Accordion.Control>
					<Accordion.Panel>
						<ReactMarkdown>{item.content}</ReactMarkdown>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
