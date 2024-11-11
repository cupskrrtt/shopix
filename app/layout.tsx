import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layouts/main-header";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
	title: "Shopix",
	description: "All your shopping need",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<MainHeader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
