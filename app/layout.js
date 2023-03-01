import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { open_sans, eb_garamond } from "@/src/utils/fonts";
import RenderNav from "@/src/components/RenderNav";
import Navbar from "./Navbar";

export const metadata = {
	title: "Orr Law, P.L.L.C.",
	description: "Website for Orr Law, P.L.L.C.",
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
