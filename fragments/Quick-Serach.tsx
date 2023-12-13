import CustomSelect from '@/components/CustomSelect'
import Heading from '@/components/Heading'
import React from 'react'

interface Props {}

const QuickSearch: React.FC<Props> = ({ }) => {
	return (
    <section className='divide-y border-slate-samen border-2 rounded-xl'>
      <Heading text="جستجوی سریع قیمت" underline={'partial'} textClasses='' customClasses='' onClick={()=>null} color='border-yellow-600' />
      <form className='w-full flex flex-col gap-4 p-6 items-center'>

        {/* Product select options */}
        <CustomSelect options={[
          {
            text: 'انتخاب کالا',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />

        {/* Factory select options */}
        <CustomSelect options={[
          {
            text: 'انتخاب کارخانه',
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
        <CustomSelect options={[
          {
            text: 'انتخاب سایز',
            value: '1'
          },{
            text: 'کالای شماره 2',
            value: '2'
          },{
            text: '3 شماره یک',
            value: '3'
          },
        ]} />

        <input className='cursor-pointer bg-yellow-samen text-slate-900 text-lg w-fit py-3 px-5 rounded-2xl mt-2' type='submit' value={"جستجوی قیمت لحظه ای"}></input>

      </form>
    </section>
	)
}

export default QuickSearch