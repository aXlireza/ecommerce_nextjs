import React, { useState } from 'react'
import TableNav from './Nav'
import { NavSource } from '@/types/Table'
import TheTable from './TheTable'
import { Product } from '@/types/Factory'

interface Props {
    nav: NavSource,
    products: Product[]
}

const PriceTable: React.FC<Props> = ({ nav, products }) => {
    const [rateActive, setRateActive] = useState(false)

	return (
    <section className='flex flex-col gap-2'>
        <TableNav {...nav} rateFunc={() => setRateActive(prevState => !prevState)} rateActive={rateActive}  />
        <TheTable products={products} />
    </section>
	)
}

export default PriceTable