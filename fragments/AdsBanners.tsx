import AdsBanner from "@/components/AdsBanner";
import { AdsBanner as AdsBanner_d } from "@/types/AdsBanner";

interface Props {
  items: AdsBanner_d[]
}
const AdsBanners: React.FC<Props> = ({ items }) => {
  return <section>
    {items.map((item, key) => <AdsBanner key={key} {...item} />)}
  </section>
}

export default AdsBanners