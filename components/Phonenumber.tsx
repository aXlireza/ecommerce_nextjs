import Link from 'next/link'
import React from 'react'
import { FiPhone } from 'react-icons/fi' // phone icon
import { convertToEng } from '@/lib/number'

interface Props {
	number: string,
}

const Phonenumber: React.FC<Props> = ({ number }) => {
	return (
		<Link href={`tel:+98${convertToEng(number.slice(1).replaceAll(' ', '').replaceAll('-', ''))}`} className="text-black flex flex-row items-center gap-2">
			<div className={'flex-col hidden xl:!flex'}>
				<span className="font-bold text-left">مشاوره و فروش</span>
				<span className="font-bold text-left" dir="ltr">{number}</span>
			</div>
			<div className='relative'>
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
				<FiPhone className="bg-samen-orange rounded-full fill-black stroke-none p-2 w-10 h-10" />
			</div>
		</Link>
	)
}

export default Phonenumber