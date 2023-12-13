import AdsBanner from '@/components/AdsBanner'
import { AdsBanner as AdsBanner_d } from '@/types/AdsBanner'
import React from 'react'

interface Props {
	banners: AdsBanner_d[],
}

const AdsBanners: React.FC<Props> = ({ banners }) => {
	return (
    <section className='flex justify-center bg-white px-10 lg:px-24'>
      <section className='flex flex-row flex-wrap py-8 gap-6 overflow-x-hidden w-fit justify-center'>
        {banners.map((banner, key) => <AdsBanner key={key} title={banner.title} description={banner.description} imgUrl={banner.imgUrl} alt={banner.alt} link={banner.link} />)}
      </section>
    </section>
	)
}

export default AdsBanners