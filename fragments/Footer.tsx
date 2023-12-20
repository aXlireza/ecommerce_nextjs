import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { convertToEng } from '@/lib/number'

interface Props {
	logo_alt: string,
  tel: string,
  email: string,
  workSchedule: string,
  address: string,
  lists: List[]
}

interface List {
  head: Item,
  items: Item[]
}

interface Item {
  title: string,
  link: string,
}

const Footer: React.FC<Props> = ({ logo_alt, tel, email, workSchedule, address, lists }) => {
	return (
    <footer className='py-3 px-10 md:px-24 flex flex-col justify-center bg-white px-10 lg:px-24 py-5 gap-4'>
      <hr className='samen-border' />
      <Image
        src={'https://cloud.samentejarat.com/samen2 (1).webp'}
        alt={logo_alt}
        width={160}
        height={20}
      />
      <div className='text-black flex flex-col justify-between lg:flex-row w-full gap-10'>
        <ul className='w-full md:w-max flex flex-col gap-3'>
          <li>تلفن پشتیبانی و مشاور: <Link href={`tel:+98${convertToEng(tel.slice(1).replaceAll(' ', '').replaceAll('-', ''))}`}>{tel}</Link></li>
          <li>ایمیل: <Link href={`mailto:${email}`}>{email}</Link></li>
          <li>{workSchedule}</li>
          <li>آدرس: {address}</li>
        </ul>
        <div className='flex flex-row justify-between w-max gap-10'>
          {lists.map((list, key) => (
            <ul key={key} className='text-md text-slate-700'>
              <li className='text-base font-bold text-slate-900'><Link href={list.head.link}>{list.head.title}</Link></li>
              {list.items.map((item, key) => <li key={key}><Link href={item.link}>{item.title}</Link></li>)}
            </ul>
          ))}
        </div>
      </div>
    </footer>
	)
}

export default Footer