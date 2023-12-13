import React from 'react'
import Image from 'next/image'

interface Props {
  active:boolean,
  title:string,
  imgUrl:string,
  alt:string,
  onClick: ()=>void
}

const TabHead: React.FC<Props> = ({ active, title, imgUrl, alt, onClick }) => {
	return (<div className='flex flex-col pt-5 items-center w-fit cursor-pointer' onClick={onClick}>
    <Image
      src={imgUrl}
      alt={alt}
      width={40}
      height={40}
    />
    <span className='px-5 py-2 text-black dark:text-white'>{title}</span>
    <hr className={`${active ? 'border-yellow-500 border-2' : 'border-slate-500 border-0'} w-full`} />
  </div>)
}

export default TabHead