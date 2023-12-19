import PriceTable from '@/components/Table/PriceTable'
import { Factory } from '@/types/Factory'

interface Props {
  factories: Factory[]
}

const PriceTables: React.FC<Props> = ({ factories }) => {

	return (<section>
    {factories.map((factory, key) => <PriceTable key={key} nav={{...factory}} />)}
  </section>)
}

export default PriceTables