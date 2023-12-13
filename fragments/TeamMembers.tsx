
import Heading from '@/components/Heading'
import Members from '@/components/Members'
import { Team } from '@/types/Members'
import React, { useState } from 'react'

interface Props {
	teams: Team[],
}

const TeamMembers: React.FC<Props> = ({ teams }) => {
  const [activeTab, setActiveTab] = useState(0)

	return (
		<section className='px-10 lg:px-24 py-10 bg-white'>
      <div className='rounded-lg bg-white border-2 border-slate-samen'>
        <div className='flex flex-row gap-3 justify-center'>
          {teams.map(item => item.title).map((title, key) => <Heading key={key} underline={key == activeTab ? 'full' : null} text={title} color='border-yellow-600' customClasses='cursor-pointer' onClick={() => setActiveTab(key)} textClasses='' />)}
        </div>
        <hr className='border-2 border-slate-samen' />
        <div className='flex flex-col gap-3 justify-center py-5'>
          {teams.map(item => item.members).map((members, key) => <Members key={key} active={key == activeTab} members={members} />)}
        </div>
      </div>
    </section>
	)
}

export default TeamMembers