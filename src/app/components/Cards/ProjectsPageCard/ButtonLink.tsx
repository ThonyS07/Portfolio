import { ButtonL, ButtonM, ButtonS } from "@/app/format/ButtonsTypography";
import Link from "next/link";
import React from "react";

import styles from "@/app/format/Typography.module.css";


const ButtonLink = () => {
	
	return (
		<div>
			<div>
				<div className='block xl:hidden '>
					<Link href=''>
						<div
							className={`${styles.boldFont} gap-2 flex text-left tracking-normal text-base leading-[20px] items-center`}>
							<span>ver detalles</span>
							<svg
								width='9'
								height='14'
								viewBox='0 0 9 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1 15L8 8L1 1'
									stroke='#6F6FFF'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</Link>
				</div>
				<div className='hidden xl:block'>
					<Link href=''>
						<div
							className={`${styles.boldFont} gap-2 flex text-left tracking-normal text-base leading-[20px]`}>
							<span>ver detalles</span>
							<svg
								width='9'
								height='16'
								viewBox='0 0 9 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1 15L8 8L1 1'
									stroke='#6F6FFF'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ButtonLink;
