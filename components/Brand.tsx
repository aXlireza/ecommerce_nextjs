import { Brand } from '@/types/Brands'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brand: React.FC<Brand> = ({ imgUrl, alt, link }) => {
	return (
		<Link href={link} className='flex flex-col items-center'>
      <Image
        src={imgUrl}
        alt={alt}
        width={100}
        height={100}
        className='grayscale'
      />
    </Link>
	)
}

export default Brand