import React from 'react'

interface Props {
	text: string,
  underline?: 'full' | 'partial',
  onClick?: () => void,
  color?: 'border-yellow-600' | string,
  customClasses?: string,
  textClasses?: string,
}

const Heading: React.FC<Props> = ({ text, underline, onClick, color='border-yellow-600', customClasses='', textClasses='' }) => {
  let hr_style = ''
  switch (underline) {
    case 'full': hr_style = 'w-full';break;
    case 'partial': hr_style = 'w-12 mr-3';break;
    default: case null: hr_style = 'hidden';break;
  }
	return (
		<div onClick={onClick} className={customClasses}>
      <h3 className={`p-3 ${textClasses || 'text-base'} font-bold samen-text`}>{text}</h3>
      <hr className={`${color} border-2 rounded-lg ${hr_style}`} />
    </div>
	)
}

export default Heading