import CustomSelect from '@/components/Form/CustomSelect'
import Heading from '@/components/Heading'
import React from 'react'

type Props = {
  title: string,
}

export default function VerticalQuickSearch({ title }: Props) {
	return (
    <section className={`divide-y samen-border bg-white`}>
      <Heading text={`جستجوی سریع ${title}`} underline={'partial'} />
      <form className='w-full flex flex-row gap-4 p-6 items-center'>
        {/* Factory select options */}
        <CustomSelect id={'factory_filter'} fullyRounded={true} options={[
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
        <CustomSelect id={'size_filter'} fullyRounded={true} options={[
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

        {/* Standard select options */}
        <CustomSelect id={'standard_filter'} fullyRounded={true} options={[
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

        {/* usage select options */}
        <CustomSelect id={'usage_filter'} fullyRounded={true} options={[
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
