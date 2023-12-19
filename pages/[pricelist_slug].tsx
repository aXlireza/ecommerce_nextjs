"use client"

import AdsBanners from "@/fragments/AdsBanners"
import Breadcrumb from "@/fragments/Breadcrumb"
import Cta from "@/fragments/Cta"

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
      <Breadcrumb items={[
        {
          title: 'خانه',
          link: '#',
        },
        parentPage,
        currentPage
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
        <section>
          <Cta tel="۰۲۱۹۱۰۰۳۱۸۱" />
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
      title: 'لیست قیمت میلگرد آجدار',
      slug: 'ajdar',
      link: '/milgerd/ajdar'
    },
    parentPage: {
      title: 'لیست قیمت میلگرد',
      slug: 'milgerd',
      link: '/milgerd'    }
  }

  return {
    props: props
  }
}

export default Pricelist