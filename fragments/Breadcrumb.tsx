import { Breadcrumb } from '@/types/breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Breadcrumb: React.FC<Breadcrumb> = ({ items }) => {
	return (
    <nav>
      {items.map((item, key) => (
        <div key={key}>
          <Link href={item.link}>{item.title}</Link>
          <span><FiArrowRight /></span>
        </div>
      ))}
    </nav>
	)
}

export default Breadcrumb