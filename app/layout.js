import "./globals.css";
import { open_sans, eb_garamond } from "@/src/utils/fonts";
import RenderNav from "@/src/components/RenderNav";
import Navbar from "./Navbar";

export default async function RootLayout({ children }) {
	return (
		<html lang="en" className={`${open_sans.className} ${eb_garamond.className}`}>
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
