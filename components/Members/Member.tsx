import Link from 'next/link'
import React from 'react'
import { FiPhone } from 'react-icons/fi' // phone icon
import { convertToEng } from '@/lib/number'
import { Member } from '@/types/Members'
import Image from 'next/image'

const Member: React.FC<Member> = ({ imgUrl, alt, name, role, tel }) => {
	return (
		<article className="flex flex-row w-fit gap-3 samen-border p-3">
			<Image
        className='rounded-lg border-2 dark:border-slate-600'
        src={imgUrl}
        alt={alt}
        width={140}
        height={140}
      />
			<div className='flex flex-col gap-1'>
        <h5 className='text-black text-xl'>{name}</h5>
        <h6 className='text-black text-base'>{role}</h6>
        <Link className='flex flex-row text-black border-2 border-samen rounded-lg px-2 py-1 items-center' href={`tel:+98${convertToEng(tel.slice(1).replaceAll(' ', '').replaceAll('-', ''))}`}>
          <span className='text-samen'>{tel}</span>
          <FiPhone className='stroke-none fill-black dark:fill-white' />
        </Link>
      </div>
		</article>
	)
}

export default Member