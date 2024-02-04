import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
// const lato = Lato({ subsets: ["latin"] });
const lato = Lato({
	weight: ["100", "300", "400", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anthony Silva",
	description: "Portfolio Anthony Silva",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={lato.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
