"use client";
import { BsHouseDoor, BsPeople } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Accordion } from "@mantine/core";

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

const AccordionDemo = () => {
	return (
		<Accordion variant="contained">
			<Accordion.Item value="photos">
				<Accordion.Control icon={<BsHouseDoor />}>
					Recent photos
				</Accordion.Control>
				<Accordion.Panel>Content</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="print">
				<Accordion.Control icon={<IoDocumentTextOutline />}>
					Print photos
				</Accordion.Control>
				<Accordion.Panel>Content</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="camera">
				<Accordion.Control icon={<BsPeople />}>
					Camera settings
				</Accordion.Control>
				<Accordion.Panel>Content</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};

export default AccordionDemo;
