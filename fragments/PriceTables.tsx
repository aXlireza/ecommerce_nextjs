import PriceTable from '@/components/Table/PriceTable'
import { Factory } from '@/types/Table'

interface Props {
  factories: Factory[]
}

const PriceTables: React.FC<Props> = ({ factories }) => {

	return (<section className='flex flex-col gap-5'>
    {factories.map((factory, key) => <PriceTable
      key={key}
      nav={{...factory.info}}
      products={factory.products}
    />)}
  </section>)
}

export default PriceTables