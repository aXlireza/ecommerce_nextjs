import { Breadcrumb } from '@/types/breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

const Breadcrumb: React.FC<Breadcrumb> = ({ items }) => {
	return (
    <nav className='flex flex-row items-center my-3'>
      {items.map((item, key) => (
        <div key={key} className='flex flex-row  items-center'>
          <Link href={item.link}>{item.title}</Link>
          <span className={`${key+1 == items.length ? 'hidden' : ''} px-3`}><FiArrowLeft className='text-sm' /></span>
        </div>
      ))}
    </nav>
	)
}

export default Breadcrumb