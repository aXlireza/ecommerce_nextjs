import { Nav } from '@/types/Table';
import React from 'react'
import { FiCheck, FiClock } from 'react-icons/fi';

const TableNav: React.FC<Nav> = ({ rateActive=false, title, date, rateFunc }) => {
	return (
    <section className="relative w-full flex items-center bg-white justify-between rounded-lg overflow-hidden border-slate-samen border-2">
			{/* right part */}
			<div className='flex flex-row items-center'>
				<div className="z-10 bg-samen w-fit h-[50px] flex items-center justify-center pr-5">
					<p className="text-center font-semibold text-slate-700 text-sm sm:text-lg">{title}</p>
				</div>
				{/* triangle */}
				<span className="w-0 h-0 
					border-t-[50px] border-t-transparent
					border-r-[40px] border-r-samen
					border-b-[0px] border-b-transparent">
				</span>

				{/* date */}
				<article className='flex flex-row items-center gap-1 -mr-2'>
					<FiClock className="stroke-samen" />
					<span className='text-slate-700 text-sm sm:text-lg'>{date}</span>
				</article>
			</div>

			{/* left part */}
			<div className='flex flex-row items-center gap-2 pl-5' onClick={rateFunc}>
				<FiCheck className={`${rateActive ? 'bg-green-500 stroke-white' : 'border-slate-500 border-2' } transition-all rounded-md`} />
				<span className='text-slate-700 text-sm sm:text-lg'>نمایش با ارزش افزوده</span>
			</div>
    </section>
  );
}

export default TableNav