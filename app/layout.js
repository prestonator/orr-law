import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import RenderNav from "@/src/components/RenderNav";
import Navbar from "./Navbar";




export const metadata = {
	title: "Orr Law.",
	description: "Website for Orr Law.",
	themeColor: "#c49b65",
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
		apple: "/favicon.svg",
	},
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<RenderNav>
					<Navbar />
				</RenderNav>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
