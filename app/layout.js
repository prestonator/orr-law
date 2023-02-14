import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { open_sans, eb_garamond } from "@/src/utils/fonts";
import RenderNav from "@/src/components/RenderNav";
import Navbar from "./Navbar";
import Footer from "@/src/components/Footer";




export const metadata = {
	title: "Orr Law, LLC",
	description: "Website for Orr Law, LLC",
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
				<Footer />
			</body>
		</html>
	);
}
