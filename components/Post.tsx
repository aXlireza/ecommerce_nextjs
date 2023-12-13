import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Post } from '@/types/Post'

interface Props {
  post: Post,
  rowOrCol: string
}

const Post: React.FC<Props> = ({ post: { title, link, imgUrl, alt, btnText }, rowOrCol='flex-col' }) => {
	return (
		<Link href={link} className="flex flex-col gap-2 m-auto">
      <Image
        className='rounded-lg'
        src={imgUrl}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={400}
        height={200}
      />
      <div className={`flex ${rowOrCol} gap-3`}>
        <h4 className='text-black text-xl'>{title}</h4>
        <button className='text-orange-400 bg-white border-2 border-orange-samen px-5 rounded-lg w-fit'>{btnText}</button>
      </div>
		</Link>
	)
}

export default Post