import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Props {
  title: string,
  imgUrl: string,
  alt: string,
  date: string,
  link: string}

const ProductBox: React.FC<Props> = ({ title, imgUrl, date, alt, link }) => {
	return (<Link href={link} className={`flex flex-col items-center w-fit samen-border m-auto`}>
    <Image
      src={imgUrl}
      alt={alt}
      width={300}
      height={200}
      className='rounded-t-xl'
    />

    <div className='flex flex-row py-3'>
      <h5 className='px-5 text-base samen-text'>{title}</h5>
      <span className='px-5 text-samen-orange font-semibold text-md border-samen-orange border-2 rounded-lg'>{date}</span>
    </div>
  </Link>)
}

export default ProductBox