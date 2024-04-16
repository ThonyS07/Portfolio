"use client";
import ThemeSwitcher from "@/app/components/NavBar/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Logo from "./Logo";
import { Tabs } from "@/app/components/NavBar/Tabs/Tabs";
import Button from "../Buttons/Button";
// import DownloadIcon from "./DownloadIcon";
import Icon from "./Icon";
import NavBarButton from "./NavBarButton";


const NavBar = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
	};
	
	
	return (
		<Navbar
			className='dark:border-blanco border-negro1  min-[360px]:h-[56px] md:h-[64px] min-[1360px]:py-[19px] min-[1360px]:px-[104px] lg:h-[80px] lg:py-[19px] lg:px-[48px]'
			isBordered
			isBlurred
			maxWidth='xl'>
			<NavbarBrand>
				<Link color='foreground' href='/'>
					<Logo />
				</Link>
			</NavbarBrand>
			<div className='w-8/12'>
				<NavbarContent className='hidden lg:flex gap-4' justify='start'>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						home
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						about me
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						my projects
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						contact me
					</Tabs>
				</NavbarContent>
			</div>
			<div>
				<NavbarContent justify='end'>
					<ThemeSwitcher />
					<div className='lg:hidden'>
						<p>hamburguesa</p>
					</div>
					<div>
						<NavBarButton />
					</div>
				</NavbarContent>
			</div>
		</Navbar>
	);
};

export default NavBar;
