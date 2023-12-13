import Heading from '@/components/Heading'
import React from 'react'
import QuickSearch from './Quick-Serach'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface Props {
  slides: Slide[]
}

interface Slide {
  imgUrl: string,
  alt: string,
  link: string,
}

const Hero: React.FC<Props> = ({ slides }) => {
	return (
		<section className='flex lg:flex-row flex-col items-center gap-10 px-10 lg:px-24 py-5 bg-white dark:bg-black'>
      {/* the slider */}
      <div className='lg:w-7/12 overflow-hidden !h-[200px] sm:!h-[300px] md:!h-[300px] lg:!h-[400px] xl:!h-[450px] 2xl:!h-[500px]'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Pagination]}
          className='!h-[200px] sm:!h-[300px] md:!h-[300px] lg:!h-[400px] xl:!h-[450px] 2xl:!h-[500px] items-center justify-center'
          direction='vertical'
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet p-1 !opacity-100',
            bulletActiveClass: '!bg-[#eb7a36] swiper-pagination-bullet-active'
          }}
        >
          {slides.map((slide, key) => (
            <SwiperSlide key={key} className='!w-full !flex items-center justify-center !h-[200px] sm:!h-[300px] md:!h-[300px] lg:!h-[400px] xl:!h-[450px] 2xl:!h-[500px]'>
              <Link href={slide.link} className='!w-full'>
                <Image
                  className='rounded-2xl !max-h-[200px] sm:!max-h-[300px] md:!max-h-[300px] lg:!max-h-[400px] xl:!max-h-[450px] 2xl:!max-h-[500px]'
                  src={slide.imgUrl}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  height={400}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* quick search form */}
      <div className='w-full lg:w-5/12'>
        <QuickSearch />
      </div>
    </section>
	)
}

export default Hero