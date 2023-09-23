// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";



export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
    }, []);
    
    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

	if (!mounted) return null;

	return (
		<Switch
			defaultSelected
			size='lg'
            color='success'
            onChange={handleThemeChange}
		>
			{theme}
			{/* <button onClick={() => setTheme("light")}>Light Mode</button> */}
			{/* <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
		</Switch>
	);
}
