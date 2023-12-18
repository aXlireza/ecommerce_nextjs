import { Banner as Banner_d } from '@/types/Banner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner: React.FC<Banner_d> = ({ title, link, description, imgUrl, alt }) => {
	return (
		<Link href={link} className='flex flex-row rounded-2xl overflow-hidden border-slate-samen border-2'>
      <div className='flex flex-col p-5 py-10'>
        <h4 className='text-2xl font-bold text-black '>{title}</h4>
        <hr className='border-orange-200 my-2' />
        <h5 className='text-lg text-black '>{description}</h5>
        <button className='bg-orange-400 mt-6 px-4 p-1 rounded-lg w-fit'>اطلاعات بیشتر</button>
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

export default Banner