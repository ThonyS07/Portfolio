import { NavBarProps } from "@/Props/NavBarProps";
import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import React from 'react';


const Tabs = (props: NavBarProps) => {
    const { activeSection, onSectionClick, children } = props;
    // const formatChildren = children?.toLocaleString()
    // const visibleContent = formatChildren
	// 		? formatChildren.charAt(0).toUpperCase() + formatChildren.slice(1)
	// 		: "";
   const visibleContent = React.Children.toArray(children)
			.map((c) => (typeof c === "string" ? c : ""))
			.join("")
			.replace(/^./, (str) => str.toUpperCase());
	return (
		<NavbarItem>
			<Link
				onClick={() => onSectionClick(`${children}`)}
				className={`pl-0 h-5 ${activeSection === children ? "underline" : ""}`}
				color='foreground'
				href={`/#${children}`}>
				{visibleContent}
			</Link>
		</NavbarItem>
	);
};
export default Tabs;