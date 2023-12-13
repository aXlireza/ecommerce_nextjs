import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiCpu } from 'react-icons/fi';
import { MegamenuItem, MegamenuSubItem } from '@/types/megamenu';

const MenuItemMobile: React.FC<MegamenuItem> = ({ icon, text, link, subcategories }) => {
  
  // Function to toggle the dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (status:boolean) => setIsOpen(status || !isOpen);

  function item(text:string, link:string, subitems:MegamenuSubItem[], arrow=true, key=0) {
    return (
      <div key={key}>
        <Link href={link} className='text-black dark:text-white hover:text-red-700 p-1 flex flex-row items-center w-full justify-between'>

          {/* title */}
          <div className='flex flex-row items-center gap-2'>
            <span className='text-sm'>{text}</span>
          </div>

          {/* the arrow pointing left */}
          {arrow ? <FiChevronLeft /> : <span></span>}

        </Link>

        {/* render subitems of the list if available (the ones with no arrow icon) */}
        <div className={`overflow-hidden flex flex-col flex-wrap px-3`}>
          {subitems.map((subitem, key) => item(subitem.text, subitem.link, subitem.subitems, subitem.arrow, key))}
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col dark:bg-black' onClick={() => toggleDropdown(!isOpen)}>

        <Link href={link} className={`hover:text-red-700 ${isOpen ? 'dark:bg-slate-700 bg-slate-200 text-red-700' : 'text-black dark:text-white dark:bg-slate-800'} transition flex flex-row items-center w-full p-3 justify-between cursor-pointer`}>

          {/* title and the associated icon */}
          <div className='flex flex-row items-center gap-1'>
            {/* TODO: There might be a need to change the icon to font icon or image */}
            <FiCpu />
            <span className='text-base'>{text}</span>
          </div>

          {/* the arrow pointing left */}
          <FiChevronLeft />

        </Link>

        {/* the secondary flyout menu that appear as a primary column item is hovered */}
        <div className={`bg-slate-100 dark:bg-slate-900 overflow-hidden flex flex-col ${isOpen ? 'w-full py-2 px-4' : 'max-h-0 max-w-0'}`}>

          {/* the megamenu content */}
          <div className='flex flex-col'>
            {subcategories.map((subitem, key) => item(subitem.text, subitem.link, subitem.subitems, subitem.arrow, key))}
          </div>

        </div>

      </div>
  );
}

export default MenuItemMobile;
