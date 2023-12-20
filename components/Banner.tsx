import { Banner as Banner_d } from '@/types/Banner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner({ title, link, description, imgUrl, alt }: Banner_d) {
	return (
		<Link href={link} className='flex flex-row overflow-hidden samen-border'>
      <div className='flex flex-col p-5 py-10'>
        <h4 className='text-2xl font-bold samen-text '>{title}</h4>
        <hr className='border-samen-orange my-2' />
        <h5 className='text-base samen-text '>{description}</h5>
        <button className='bg-samen-orange mt-6 px-4 p-1 rounded-lg w-fit'>اطلاعات بیشتر</button>
      </div>
      <div>
        <Image
          src={imgUrl}
          alt={alt}
          width={300}
          height={200}
        />
      </div>
		</Link>
	)
}
