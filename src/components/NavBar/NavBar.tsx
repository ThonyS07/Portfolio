import ThemeSwitcher from "@/components/NavBar/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";



const NavBar = () => {

	return (
		<Navbar
			isBordered
			isBlurred
			maxWidth='xl'
			
			>
			<NavbarBrand>
				<Link color='foreground' href='/'>
					LOGO
				</Link>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='/about'>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='/projects'>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='/contact'>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
				{/* <NavbarItem>
					<Button as={Link} color='primary' href='#' variant='flat'>
						Sign Up
					</Button>
				</NavbarItem> */}
			</NavbarContent>
		</Navbar>
	);
}




// const NavBar = () => {





// 	return (
// 		<div className={styles.nav}>
// 			<div className={styles.logo}>
// 				<Link href='/'>logo</Link>
// 			</div>
// 			<div className={styles.routes}>
// 				<Link href='/about'>About</Link>
// 				<Link href='/projects'>Projects</Link>
// 				<Link href='/contact'>Contact</Link>
// 			</div>

// 			<ThemeSwitcher />
// 		</div>
// 	);
// };

export default NavBar;
