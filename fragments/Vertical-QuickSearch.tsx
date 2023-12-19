import CustomSelect from '@/components/CustomSelect'
import Heading from '@/components/Heading'
import React from 'react'

interface Props {
  title: string,
}

const VerticalQuickSearch: React.FC<Props> = ({ title }) => {
	return (
    <section className={`divide-y border-slate-samen border-2 rounded-xl bg-white`}>
      <Heading text={`جستجوی سریع ${title}`} underline={'partial'} textClasses='' customClasses='' onClick={()=>null} color='border-yellow-600' />
      <form className='w-full flex flex-row gap-4 p-6 items-center'>
        {/* Factory select options */}
        <CustomSelect rounded='full' options={[
          {
            text: 'کارخانه',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />

        {/* Size select options */}
        <CustomSelect rounded='full' options={[
          {
            text: 'سایز',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />

        {/* Size select options */}
        <CustomSelect rounded='full' options={[
          {
            text: 'استاندارد',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />

        {/* Product select options */}
        <CustomSelect rounded='full' options={[
          {
            text: 'مورد استفاده',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />
        
      </form>
    </section>
	)
}

export default VerticalQuickSearch