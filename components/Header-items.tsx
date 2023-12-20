import Link from 'next/link'
import React from 'react'

interface Props {
	link: string,
	text: string,
}

export default function HeaderItems({ text, link }: Props) {
	return (
		<Link href={link} className="flex flex-row p-2.5 samen-text items-center gap-2 transition-colors hover:text-blue-500">
      <span>{text}</span>
		</Link>
	)
}
