import React from 'react'

interface Props {
  options: Select[],
  rounded?: 'full' | string
}

interface Select {
	text: string,
  value: string
}

const CustomSelect: React.FC<Props> = ({ options, rounded }) => {
	return (<div className={`w-full border-slate-samen border-2 ${rounded ? 'rounded-full' : 'rounded-xl'}`}>
    <select className={`w-full text-black bg-white p-4 ${rounded ? 'rounded-full' : 'rounded-lg'} outline-none ps-4 border-slate-samen`}>
      {options.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}

export default CustomSelect