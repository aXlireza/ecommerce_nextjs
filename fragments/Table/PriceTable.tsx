import React, { useState } from 'react'
import TableNav from './Nav'
import { NavSource } from '@/types/Table'

interface Props {
    nav: NavSource
}

const PriceTable: React.FC<Props> = ({ nav }) => {
    const [rateActive, setRateActive] = useState(false)

	return (
    <section className='flex'>
        <TableNav {...nav} rateFunc={() => setRateActive(prevState => !prevState)} rateActive={rateActive}  />
    </section>
	)
}

export default PriceTable