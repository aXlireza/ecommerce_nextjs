import { Factory } from '@/types/Factory'
import PriceTable from './PriceTable'

interface Props {
  factories: Factory[]
}

const PriceTables: React.FC<Props> = ({ factories }) => {

	return (<section>
    {factories.map((factory, key) => <PriceTable key={key} nav={{...factory}} />)}
  </section>)
}

export default PriceTables