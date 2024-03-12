"use client";
import ThemeSwitcher from "@/app/components/NavBar/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Logo from "./Logo";
import { Tabs } from "@/app/format/Tabs";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
	};

	return (
		<Navbar
			className='dark:border-blanco border-negro1'
			isBordered
			isBlurred
			maxWidth='xl'>
			<NavbarBrand>
				<Link color='foreground' href='/'>
					<Logo />
				</Link>
			</NavbarBrand>
			<div className='w-8/12'>
				<NavbarContent className='hidden sm:flex gap-4' justify='start'>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						home
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						about
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						projects
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						contact
					</Tabs>
				</NavbarContent>
			</div>
			<NavbarContent justify='end'>
				<ThemeSwitcher />
				<Link color='foreground' href='/'>
					DESCARGAR CV
				</Link>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
