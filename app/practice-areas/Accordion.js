"use client";
import { GiFarmTractor, GiFamilyHouse } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { Accordion, createStyles, rem } from "@mantine/core";

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

	control: {
		fontSize: "var(--font-size-medium)",
	},

	icon: {
		svg: {
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

export default function AccordionContainer() {
	const { classes } = useStyles();
	return (
		<Accordion
			maw={1080}
			mx="auto"
			variant="filled"
			defaultValue="customization"
			classNames={classes}
			className={classes.root}
		>
			<Accordion.Item value="agritourism-law">
				<Accordion.Control icon={<GiFarmTractor />}>
					Agritourism Law
				</Accordion.Control>
				<Accordion.Panel>
					<blockquote>
						This practice area covers legal issues related to agritourism,
						including zoning and land use, liability and risk management,
						contracts, and regulatory compliance. If you&apos;re a farmer or
						rancher looking to host visitors on your property, we can help
						ensure that you&apos;re legally protected.
					</blockquote>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="family-law">
				<Accordion.Control icon={<MdFamilyRestroom />}>
					Family Law
				</Accordion.Control>
				<Accordion.Panel>
					<blockquote>
						Our family law practice covers a range of legal issues related to
						families, including divorce, child custody and support, adoption,
						and domestic violence. We understand that family law issues can be
						emotional and stressful, and we&apos;re here to guide you through
						the process and advocate for your best interests.
					</blockquote>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="small-business-law">
				<Accordion.Control icon={<ImOffice />}>
					Small Business Law
				</Accordion.Control>
				<Accordion.Panel>
					<blockquote>
						Whether you&apos;re starting a new business or managing an existing
						one, our small business law practice can help you navigate the legal
						complexities of business ownership. We can assist with entity
						formation, contracts, employment law, intellectual property, and
						more.
					</blockquote>
				</Accordion.Panel>
			</Accordion.Item>
			<Accordion.Item value="estate-law">
				<Accordion.Control icon={<GiFamilyHouse />}>
					Estate Law
				</Accordion.Control>
				<Accordion.Panel>
					<blockquote>
						Our estate law practice covers all aspects of estate planning,
						including wills, trusts, powers of attorney, and probate. We can
						help you develop a plan that protects your assets and ensures that
						your wishes are carried out after you&apos;re gone.
					</blockquote>
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}
