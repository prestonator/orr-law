import "./globals.css";
import RenderNav from "@/src/components/RenderNav";
import Navbar from "./Navbar";

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<RenderNav>
					<Navbar />
				</RenderNav>
				{children}
			</body>
		</html>
	);
}
