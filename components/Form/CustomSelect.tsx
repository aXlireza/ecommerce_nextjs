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
	return (<div className={`w-full flex flex-row items-center gap-8`}>
    {id && label ? <label htmlFor={id}>{label}</label> : null}
    <select id={id || ''} className={`w-full samen-text bg-white p-4 samen-border ${fullyRounded ? '!rounded-full' : ''} outline-none ps-4 shadow-samen`}>
      {options.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}
