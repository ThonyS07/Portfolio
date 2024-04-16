import React from 'react'
import Button from '../Buttons/Button';
import styles from './NavBar.module.css';
import { useTheme } from 'next-themes';

const NavBarButton = () => {
    const theme = useTheme()
    const strokeColor= theme.theme === 'dark' ? `${styles.icon}` : ''
  return (
		<div>
			<div>
				<Button size='l'>
					<div
						className={`lg:flex items-center py-[11px]  rounded-lg w-120 h-42  ${styles.iconContainer}`}>
						Descargar CV
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={16}
							height={16}
							className={`bg-none fill-none `}>
							<g clipPath='url(#a)'>
								<path
									className={`${strokeColor} dark:stroke-blanco  dark:hover:stroke-[#a57bf5]  dark:disabled:stroke-[#9747ff]  dark:active:stroke-[#ccb4fa]  stroke-negro1  hover:stroke-purple3 active:stroke-purple2 disabled:bg-purple9 `}
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={1}
									d='M15.333 10.444v3.26a1.63 1.63 0 0 1-1.63 1.63H2.297a1.63 1.63 0 0 1-1.63-1.63v-3.26m3.26-4.074L8 10.444m0 0 4.074-4.074M8 10.444V.668'
								/>
							</g>
							<defs>
								<clipPath id='a'>
									<path d='M0 0h16v16H0z' />
								</clipPath>
							</defs>
						</svg>
					</div>
				</Button>
			</div>
		</div>
	);
}

export default NavBarButton
