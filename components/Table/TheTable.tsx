import { Product } from "@/types/Factory"

interface Props {
  products: Product[]
}

const colStyle = "font-medium text-center"

const TheTable: React.FC<Props> = ({ products }) => {
	return (<table className="table-auto rounded-lg overflow-hidden">
    {/* table head */}
    <thead>
      <tr className="bg-yellow-200 h-10">
        <th className={colStyle}>کالا</th>
        <th className={colStyle}>کارخانه</th>
        <th className={colStyle}>سایز</th>
        <th className={colStyle}>استاندارد</th>
        <th className={colStyle}>قیمت</th>
      </tr>
    </thead>
    {/* table body */}
    <tbody>
      {products.map((product, key) => <tr className={`odd:bg-slate-100 even:bg-white py-2 h-10`} key={key}>
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