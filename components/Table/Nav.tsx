import { Nav } from '@/types/Table';
import React from 'react'
import { FiCheck, FiClock } from 'react-icons/fi';

export default function TableNav({ rateActive=false, title, date, rateFunc, upToDate=true }: Nav) {
	return (
    <section className="relative w-full flex items-center bg-white justify-between overflow-hidden samen-border">
			{/* right part */}
			<div className='flex flex-row items-center'>
				<div className={`z-10 ${upToDate ? 'bg-samen-orange' : 'bg-samen-gray'} w-fit h-[50px] flex items-center justify-center pr-5`}>
					<p className="text-center font-semibold samen-text text-sm sm:text-base">{title}</p>
				</div>
				{/* triangle */}
				<span className={`w-0 h-0 
					border-t-[50px] border-t-transparent
					border-r-[40px] ${upToDate ? 'border-r-samen-orange' : 'border-r-samen-gray'}
					border-b-[0px] border-b-transparent`}>
				</span>

				{/* date */}
				<article className='flex flex-row items-center gap-1 -mr-2'>
					{upToDate ? <FiClock className="stroke-samen-orange" /> : null}
					<span className='samen-text text-sm sm:text-base'>{date}</span>
				</article>
			</div>

			{/* left part */}
			<div className='flex flex-row items-center gap-2 pl-5 cursor-pointer' onClick={rateFunc}>
				<FiCheck className={`${rateActive ? 'bg-green-500 stroke-white' : 'samen-border' } !rounded-md transition-all`} />
				<span className='samen-text text-sm sm:text-base'>نمایش با ارزش افزوده</span>
			</div>
    </section>
  );
}
