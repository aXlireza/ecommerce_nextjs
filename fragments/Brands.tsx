import Brand from '@/components/Brand'
import { Brand as Brand_d } from '@/types/Brands'
import React from 'react'

interface Props {
	brands: Brand_d[],
}

export default function Brands({ brands }: Props) {
	return (
    <section className='flex justify-center bg-white samen-container-padding'>
      <section className='flex flex-row flex-wrap py-8 gap-6 overflow-x-hidden w-fit justify-center'>
        {brands.map((brand, key) => <Brand key={key} link={brand.link} imgUrl={brand.imgUrl} alt={brand.alt} />)}
      </section>
    </section>
	)
}
