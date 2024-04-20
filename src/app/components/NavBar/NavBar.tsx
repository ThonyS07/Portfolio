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

import HamburguerButton from "./MenuIcon";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
	};

		return (
			<Navbar
				className='dark:border-blanco border-negro1 w-full min-[360px]:h-[56px] min-[768px]:h-[64px]  min-[1360px]:px-[104px] lg:h-[80px] lg:py-[19px] lg:px-[48px]'
				isBordered
				isBlurred
				maxWidth='full'>
				<div className='w-1/12'>
					<NavbarBrand>
						<Link href='/'>
							<Logo />
						</Link>
					</NavbarBrand>
				</div>
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
					{}
					<NavbarContent
						className='max-[1024px]:flex max-[1024px]:gap-6 max-[1024px]:w-[110px] max-[1024px]:h-[24px] max-[1024px]:flex-row max-[1024px]:justify-start max-[1024px]:items-start'
						justify='end'>
						<ThemeSwitcher />
						<div className='lg:hidden w-[1px] h-[24px] bg-[#1a1d2c] dark:bg-blanco '></div>
						<div className='lg:hidden'>
							<HamburguerButton />
						</div>
						<div className='hidden lg:flex'>
							<Button size='l'>Descargar CV</Button>
						</div>
					</NavbarContent>
				</div>
			</Navbar>
		);
};

export default NavBar;
