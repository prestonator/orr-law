import ReactMarkdown from "react-markdown";

export default function Services({ data }) {
	
	// Divide the data into three separate columns
	const columns = [[], [], []];
	data.forEach((item, index) => {
		columns[index % 3].push(item);
	});

	return (
		<div>
			{columns.map((column, index) => (
				<div key={index}>
					{column.map((item) => (
						<div key={item.id}>
							<h2>{item.title}</h2>
							<ReactMarkdown>{item.content}</ReactMarkdown>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
