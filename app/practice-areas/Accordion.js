"use client";
import { BsHouseDoor, BsPeople } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Text, Group, Accordion } from "@mantine/core";

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

const AccordionLabel = ({ title, icon, description }) => {
	return (
		<Group noWrap>
			{icon}
			<div>
				<Text>{title}</Text>
				<Text>{description}</Text>
			</div>
		</Group>
	);
};

const AccordionDemo = () => {
	return (
		<Accordion variant="contained">
			{mainServices.map((service) => (
				<Accordion.Item value={service.id} key={service.id}>
					<Accordion.Control>
						<AccordionLabel {...service} />
					</Accordion.Control>
					<Accordion.Panel>{service.description}</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
};

export default AccordionDemo;
