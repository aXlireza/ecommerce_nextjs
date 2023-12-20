import AdsBanner from "@/components/AdsBanner";
import { AdsBanner as AdsBanner_d } from "@/types/AdsBanner";

interface Props {
  items: AdsBanner_d[]
}
const AdsBanners: React.FC<Props> = ({ items }) => {
  return <section className="samen-container-padding !py-0 flex flex-col gap-2">
    {items.map((item, key) => <AdsBanner key={key} {...item} />)}
  </section>
}

export default AdsBanners