import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				<Link href='/'>logo</Link>
			</div>
			<div className={styles.routes}>
				<Link href='/about'>About</Link>
				<Link href='/projects'>Projects</Link>
				<Link href='/contact'>Contact</Link>
			</div>

			<ThemeSwitcher />
		</div>
	);
};

export default NavBar;
