import MenuItemMobile from '@/components/MegaMenu/Items-mobile';
import { MegamenuItem } from '@/types/megamenu';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

interface Props {
	items: MegamenuItem[]
}


const MegamenuMobile: React.FC<Props> = ({ items }) => {
	return (
		<section className='h-fit'>
			<div className='flex flex-row items-center gap-3 p-2.5 text-black dark:text-white'>
				<span className='flex'>قیمت روز محصولات</span>
			</div>
			<div className='bg-white'>
				{items.map(({text, link, icon, subcategories}, key) => (<MenuItemMobile key={key} icon={icon} text={text} link={link} subcategories={subcategories}/>))}
			</div>
		</section>
	)
}

export default MegamenuMobile