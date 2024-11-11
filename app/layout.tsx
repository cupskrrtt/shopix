import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layouts/main-header";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<MainHeader />
				{children}
			</body>
		</html>
	);
}
