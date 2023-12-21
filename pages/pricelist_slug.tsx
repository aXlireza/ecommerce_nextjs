"use client"

import AdsBanners from "@/fragments/AdsBanners"
import Breadcrumb from "@/fragments/Breadcrumb"
import Cta from "@/fragments/Cta"
import PriceTables from "@/fragments/PriceTables"
import VerticalQuickSearch from "@/fragments/Filter/Vertical-QuickSearch"
import { Factory } from "@/types/Table"
import Usage from "@/fragments/Filter/Usage"
import WeightCalculator from "@/fragments/Filter/WeightCalculator"
import AdsBanner from "@/components/AdsBanner"
import Carousel from "@/fragments/Carousel"
import ReadMore from "@/components/ReadMore"
import Heading from "@/components/Heading"
import Image from "next/image"

type Props = {
  currentPage: PageBasicInfo,
  parentPage: PageBasicInfo,
  factories: Factory[]
}

type PageBasicInfo = {
  title: string,
  slug: string,
  link: string,
}

export default function Pricelist({ currentPage, parentPage, factories }: Props) {

  return (
    <main className='flex flex-col samen-lightbg'>
      <Breadcrumb items={[
        {
          title: 'خانه',
          link: '#',
        },
        // {/* Process the items to include the keyword "قیمت"
        // since the original format of the titles must be kept and used */}
        {
          ...parentPage,
          title: 'قیمت ' + parentPage.title
        },
        {
          ...currentPage,
          title: 'قیمت ' + currentPage.title
        }
      ]} />
      <AdsBanners items={[
        {
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#'
        },
      ]} />
      <section className="flex flex-col lg:flex-row samen-container-padding samen-gap">

        {/* sidebar */}
        <section className="flex flex-col samen-gap w-full lg:w-4/12">
          <Usage pageTitle={currentPage.title} />
          <WeightCalculator />
          <AdsBanner imgUrl='https://cloud.samentejarat.com/s1.webp' alt='alt' link='#' />
          <AdsBanner imgUrl='https://cloud.samentejarat.com/s1.webp' alt='alt' link='#' />
        </section>

        {/* main bar */}
        <section className="flex flex-col samen-gap w-full">
          <Cta tel="۰۲۱۹۱۰۰۳۱۸۱" />
          <VerticalQuickSearch title={currentPage.title} />
          <PriceTables factories={factories} />
        </section>

      </section>

      <section className="samen-container-padding bg-white samen-gap flex flex-col">
        <Heading text={currentPage.title} />
        <div className="flex flex-col md:flex-row w-full samen-gap">
          <Image
            src='https://cloud.samentejarat.com/s1.webp'
            alt='alt'
            style={{
              width: '100%',
              height: 'fit-content',
            }}
            width={300}
            height={200}
            className="samen-border overflow-hidden md:!w-3/4"
          />
          <ReadMore text="ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجثامن تجارت ثامن تجارت ثامن تجاثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارتتجارت ثامن تجارت رت ارت ثامن تجارت ثامن تجارت ." />
        </div>
      </section>
      
      <section className='samen-container-padding samen-lightbg'>
        <Carousel title={`پایگاه دانش ${currentPage.title} ثامن تجارت`} rowOrCol='flex-col' posts={[
          {
            imgUrl: 'https://i.postimg.cc/SNdx6j0q/sa5.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/8zCPtDDv/sa4.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/PrTqvYR2/sa3.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/PrTqvYR2/sa3.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/prtLZFXV/s8.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/rsCFYwK1/sa1.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },
        ]} />
      </section>

    </main>
  )
}

// export async function getStaticPaths() {
//   return ({
//     fallback: false,
//     paths: [
//       {params: {pricelist_slug: 'ajdar-milgerd'}}
//     ]
//   })
// }

export async function getStaticProps({}: any) {

  // const { pricelist_slug } = params;

  const props: Props = {
    currentPage: {
      title: 'میلگرد آجدار',
      slug: 'ajdar',
      link: '/milgerd/ajdar'
    },
    parentPage: {
      title: 'میلگرد',
      slug: 'milgerd',
      link: '/milgerd'
    },
    factories: [
      {
        info: {
          title: 'میلگرد آجدار نیشابور',
          date: 'امروز ۱۱:۱۵',
          upToDate: true,
          rateValue: '0.09',
        },
        products: [
          {
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲,۰۰۰',
          },{
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۱,۲۲۷,۰۰۰',
          },{
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },
        ]
      },{
        info: {
          title: 'میلگرد آجدار نیشابور',
          date: 'به روزرسانی:‌دیروز ۱۱:۱۵',
          upToDate: false,
          rateValue: '0.09',
        },
        products: [
          {
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'میلگرد آجدار',
            factoryName: 'نیشابور',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },
        ]
      }
    ]
  }

  return {
    props: props
  }
}
