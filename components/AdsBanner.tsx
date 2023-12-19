import { AdsBanner } from "@/types/AdsBanner";
import Image from "next/image";
import Link from "next/link";

const AdsBanner: React.FC<AdsBanner> = ({ imgUrl, alt, link }) => {
  return <Link href={link}><Image
    src={imgUrl}
    alt={alt}
    style={{
      width: '100%',
      height: 'auto',
    }}
    width={400}
    height={200}
    className="rounded-2xl overflow-hidden"
  /></Link>
}

export default AdsBanner