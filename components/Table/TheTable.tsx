import { Product } from "@/types/Factory"

interface Props {
  products: Product[]
}

const colStyle = "font-medium text-center"

const TheTable: React.FC<Props> = ({ products }) => {
	return (<table className="table-auto rounded-lg overflow-hidden">
    {/* table head */}
    <thead className="relative">
      <div className="bg-samen-orange opacity-50 absolute w-full h-full"></div>
      <tr className="h-12 relative">
        <th className={colStyle}>کالا</th>
        <th className={colStyle}>کارخانه</th>
        <th className={colStyle}>سایز</th>
        <th className={colStyle}>استاندارد</th>
        <th className={colStyle}>قیمت</th>
      </tr>
    </thead>
    {/* table body */}
    <tbody>
      {products.map((product, key) => <tr className={`odd:samen-lightbg even:bg-white py-2 h-12`} key={key}>
        <td className={colStyle}>{product.title}</td>
        <td className={colStyle}>{product.factoryName}</td>
        <td className={colStyle}>{product.size}</td>
        <td className={colStyle}>{product.standard}</td>
        <td className={colStyle}>{product.price}</td>
      </tr>)}
    </tbody>
  </table>)
}

export default TheTable