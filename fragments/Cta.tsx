import { convertToEng } from "@/lib/number"
import Link from "next/link"
import { FiPhone } from "react-icons/fi"

interface Props {
  tel: string,
}

const Cta: React.FC<Props> = ({ tel }) => {
  return (<section className="flex flex-row items-center bg-white samen-border p-3 justify-center gap-2 rounded-xl">
    <FiPhone className="-scale-x-[1] scale-y-[1] fill-red-500 stroke-red-800 text-2xl" />
    <p className="text-base">دریافت قیمت لحظه ای و مشاوره خرید:</p>
    <Link
      href={`tel:+98${convertToEng(tel.replaceAll('-', '').slice(1))}`}
      className="bg-red-500 p-2 px-3 text-white font-bold samen-border !rounded-full tracking-wider"
    >{tel}</Link>
  </section>)
}

export default Cta