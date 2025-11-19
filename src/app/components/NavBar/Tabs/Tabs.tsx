import { NavBarProps } from "@/Props/NavBarProps";
import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";


const Tabs = (props: NavBarProps) => {
    const { activeSection, onSectionClick, children } = props;
    const formatChildren = children?.toLocaleString()
    const visibleContent = formatChildren
			? formatChildren.charAt(0).toUpperCase() + formatChildren.slice(1)
			: "";
  
	return (
		<NavbarItem>
			<Link
				onClick={() => onSectionClick(`${children}`)}
				className={`pl-0 h-[20px] ${activeSection === children ? "underline" : ""}`}
				color='foreground'
				href={`/#${children}`}>
				{visibleContent}
			</Link>
		</NavbarItem>
	);
};
export default Tabs;