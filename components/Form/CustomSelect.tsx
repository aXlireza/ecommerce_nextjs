import React from 'react'

type Props = {
  options: Select[],
  fullyRounded?: boolean,
  id?: string,
  label?: string,
}

type Select = {
	text: string,
  value: string
}

export default function CustomSelect({ options, fullyRounded, id, label }: Props) {
	return (<div className={`w-full samen-border ${fullyRounded ? '!rounded-full' : ''}`}>
    {id && label ? <label htmlFor={id}>{label}</label> : null}
    <select className={`w-full samen-text bg-white p-4 ${fullyRounded ? 'rounded-full' : 'rounded-lg'} outline-none ps-4 shadow-samen`}>
      {options.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}
