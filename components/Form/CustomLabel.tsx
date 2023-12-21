import React from 'react'

type Props = {
  name: string,
  value: string,
  id: string,
  label: string
}

export default function CustomRadio({ name, value, label, id }: Props) {
	return (<p className="flex flex-row items-center gap-1">
    <input type="radio" name={name} value={value} id={id} />
    <label htmlFor={id}>{label}</label>
  </p>)
}
