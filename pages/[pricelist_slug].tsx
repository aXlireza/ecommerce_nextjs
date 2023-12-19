"use client"

import AdsBanners from "@/fragments/AdsBanners"
import Breadcrumb from "@/fragments/Breadcrumb"
import Cta from "@/fragments/Cta"
import VerticalQuickSearch from "@/fragments/Vertical-QuickSearch"

interface Props {
  currentPage: PageBasicInfo,
  parentPage: PageBasicInfo,
}

interface PageBasicInfo {
  title: string,
  slug: string,
  link: string,
}

const Pricelist: React.FC<Props> = ({ currentPage, parentPage }) => {
  return (
    <main className='flex flex-col bg-slate-100'>
      {/* Process the items to include the keyword "قیمت"
      since the original format of the titles must be kept and used */}
      <Breadcrumb items={[
        {
          title: 'خانه',
          link: '#',
        },
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
      <section>
        {/* main bar */}
        <section className="flex flex-col gap-3">
          <Cta tel="۰۲۱۹۱۰۰۳۱۸۱" />
          <VerticalQuickSearch title={currentPage.title} rounded="full" />
        </section>
        {/* sidebar */}
        <section></section>
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
    }
  }

  return {
    props: props
  }
}

export default Pricelist