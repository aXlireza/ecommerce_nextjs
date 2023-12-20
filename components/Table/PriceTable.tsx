import React, { useState } from 'react'
import TableNav from './Nav'
import { FactoryInfo, Product } from '@/types/Table'
import TheTable from './TheTable'
import Toolsbar from './Toolsbar'

interface Props {
    nav: FactoryInfo,
    products: Product[]
}

const PriceTable: React.FC<Props> = ({ nav, products }) => {
    const [rateActive, setRateActive] = useState(false)

	return (
    <section className='flex flex-col'>
        <div className='flex flex-col gap-2'>
            <TableNav {...nav} rateFunc={() => setRateActive(prevState => !prevState)} rateActive={rateActive}  />
            <TheTable products={products} rateState={rateActive} rateValue={nav.rateValue} />
        </div>
        <Toolsbar bgcolor={products.length%2 ? 'samen-gray' : 'white'} />
    </section>
	)
}

export default PriceTable