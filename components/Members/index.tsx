import React from 'react'
import { Member as Member_d } from '@/types/Members'
import Member from './Member'

interface Props {
  active: boolean,
  members: Member_d[]
}

const Members: React.FC<Props> = ({ active, members }) => {
	return (
		<section className={`${active ? '!flex' : 'hidden'} flex-row flex-wrap justify-center items-center gap-5`}>
			{members.map((member, key) => <Member key={key} name={member.name} role={member.role} imgUrl={member.imgUrl} alt={member.alt} tel={member.tel} />)}
		</section>
	)
}

export default Members