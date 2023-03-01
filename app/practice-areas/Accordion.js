"use client";
import { BsHouseDoor, BsPeople } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Text, Group, Accordion, createStyles } from "@mantine/core";


const mainServices = [
	{
		id: "estate-planning",
		icon: <BsHouseDoor />,
		title: "Estate Planning",
		description:
			"Specializing in estate planning, our law firm provides personalized solutions for clients to secure their assets for future generations.",
	},
	{
		id: "contract-review",
		icon: <IoDocumentTextOutline />,
		title: "Contract Review and Formation",
		description:
			"Ensure the protection and growth of your business with our comprehensive contract review services.",
	},
	{
		id: "business-formation",
		icon: <BsPeople />,
		title: "Business Formation",
		description:
			"Orr law assist clients in successfully forming and establishing their businesses, navigating complex legal processes with ease.",
	},
];

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		borderRadius: theme.radius.sm,
	},

	item: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		border: "1px solid transparent",
		position: "relative",
		zIndex: 0,
		transition: "transform 150ms ease",

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

	chevron: {
		"&[data-rotate]": {
			transform: "rotate(-90deg)",
		},
	},
}));

const AccordionLabel = (props) => {
	return (
		<Group noWrap>
			{props.icon}
			<div>
				<Text>{props.title}</Text>
				<Text>{props.description}</Text>
			</div>
		</Group>
	);
};

const AccordionDemo = async () => {
	const { classes } = useStyles();

	const services = mainServices.map((service) => (
		<Accordion.Item value={service.id} key={service.id}>
			<Accordion.Control>
				<AccordionLabel {...service} />
			</Accordion.Control>
			<Accordion.Panel>
				<Text size="sm">{service.description}</Text>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			sx={{ maxWidth: 720 }}
			mx="auto"
			variant="filled"
			defaultValue="customization"
			classNames={classes}
			className={classes.root}
		>
			{services}
		</Accordion>
	);
};

export default AccordionDemo;
