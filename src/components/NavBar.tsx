import { ThemeSwitcher } from "@/components/ThemeSwitcher";

type NavBarProps = {
	children: React.ReactNode; // 👈️ type children
};
const NavBar = (props: NavBarProps) => {
	return (
		<div>
			<ThemeSwitcher />
		</div>
	);
};

export default NavBar;
