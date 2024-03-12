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
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</head>
			<body className={lato.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
