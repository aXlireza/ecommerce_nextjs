import React from 'react'

type Props = {
  options: Select[],
  rounded?: 'full' | string
}

type Select = {
	text: string,
  value: string
}

export default function CustomSelect({ options, rounded }: Props) {
	return (<div className={`w-full samen-border ${rounded ? '!rounded-full' : ''}`}>
    <select className={`w-full samen-text bg-white p-4 ${rounded ? 'rounded-full' : 'rounded-lg'} outline-none ps-4 shadow-samen`}>
      {options.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}
