import AdsBanner from "@/components/AdsBanner";
import { AdsBanner as AdsBanner_d } from "@/types/AdsBanner";

interface Props {
  items: AdsBanner_d[]
}
export default function AdsBanners({ items }: Props) {
  return <section className="samen-container-padding !py-0 flex flex-col gap-2">
    {items.map((item, key) => <AdsBanner key={key} {...item} />)}
  </section>
}
