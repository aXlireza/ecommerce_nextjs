import React from 'react'

interface Props {
  options: Select[]
}

interface Select {
	text: string,
  value: string
}

const CustomSelect: React.FC<Props> = ({ options }) => {
	return (<div className='w-full border-slate-200 dark:border-slate-500 border-2 rounded-xl'>
    <select className='w-full text-black dark:text-white dark:bg-slate-700 bg-white p-4 rounded-lg outline-none ps-4 border-l-8 dark:border-slate-700 border-white'>
      {options.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}

export default CustomSelect