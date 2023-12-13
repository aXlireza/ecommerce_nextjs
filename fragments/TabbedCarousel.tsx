import React, { useState } from 'react'
import TabHead from '@/components/Carousel/TabHead';
import { Item } from '@/types/TabbedCarousel';
import TabBody from '@/components/Carousel/TabBody';

interface Props {
	data: Item[]
}

const TabbedCarousel: React.FC<Props> = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0)

	return (
      <div className='rounded-lg bg-white border-slate-samen border-2'>
        <div className={`flex flex-row gap-10 ${data.length > 1 ? 'justify-center' : 'justify-start'}`}>
          {data.map(item => item.head).map((head, key) => <TabHead key={key} active={key == activeTab} title={head.title} imgUrl={head.imgUrl} alt={head.alt} onClick={() => setActiveTab(key)} />)}
        </div>
        <hr className={`border-1 border-slate-samen`} />
        <div className='flex flex-col gap-3 justify-center py-5 px-10'>
          {data.map(item => item.body).map((items, key) => <TabBody key={key} active={key == activeTab} items={items} />)}
        </div>
      </div>
	)
}

export default TabbedCarousel