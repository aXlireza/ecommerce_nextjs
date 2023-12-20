import React from 'react'
import Heading from '@/components/Heading';
import Post from '@/components/Post';
import { Post as Post_d } from '@/types/Post';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	title: string,
  rowOrCol: string,
  posts: Post_d[]
}

const Carousel: React.FC<Props> = ({ title, rowOrCol, posts }) => {

	return (
      <div className='rounded-lg'>
        <Heading text={title} color='border-yellow-400' underline='partial' textClasses='text-xl' />
        <div className='py-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            modules={[Pagination]}
            className='!pb-16'
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-300 p-2',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-samen-orange'
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 10
              },
            }}
          >
            {posts.map((post, key) => (
              <SwiperSlide key={key} className='w-fit'>
                <Post key={key} post={{
                  title: post.title,
                  link: post.link,
                  alt: post.alt,
                  imgUrl: post.imgUrl,
                  btnText: post.btnText
                }} rowOrCol={rowOrCol} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
	)
}

export default Carousel