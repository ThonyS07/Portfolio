import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",

	theme: {
		extend: {
		
			backgroundColor: {
				dark: "#A57BF5",
				light: "#FFFFFF",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},

	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: "#4F4FFF",
						secondary: "#A57BF5",
						background: "#FFFFFF",
						foreground: "#1A1D2C",
					},
				},

				dark: {
					colors: {
						primary: "#A57BF5",
						secondary: "#6B6BFF",
						background: "#0F1116",
						foreground: "#FFFFFF",
					},
				},
			},
		}),
	],
};

export default config;
