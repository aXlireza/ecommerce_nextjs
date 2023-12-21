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
      <section className="flex flex-row samen-container-padding samen-gap">

        {/* sidebar */}
        <section className="flex flex-col samen-gap w-4/12">
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
    </main>
  )
}

export async function getStaticPaths() {
  return ({
    fallback: false,
    paths: [
      {params: {pricelist_slug: 'ajdar-milgerd'}}
    ]
  })
}

export async function getStaticProps({params}: any) {

  const { pricelist_slug } = params;

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
