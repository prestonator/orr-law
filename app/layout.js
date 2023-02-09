import "./globals.css";
import Navbar from "@/src/components/Navbar";
import RenderNav from "./RenderNav";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
