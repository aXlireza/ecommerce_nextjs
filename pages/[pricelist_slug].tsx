"use client"

import Breadcrumb from "@/fragments/Breadcrumb"
import { Breadcrumb as Breadcrumb_d } from "@/types/breadcrumb"

interface Props {
  currentPage: CurrentPage,
  // breadcrumb: Breadcrumb_d,
}

interface CurrentPage {
  title: string,
  slug: string,
  link: string,
}

const Pricelist: React.FC<Props> = ({ currentPage }) => {
  return (
    <main className='flex flex-col bg-slate-100 dark:bg-slate-700'>
      <Breadcrumb items={[
        {
          title: 'خانه',
          link: '#',
        },{
          title: currentPage.title,
          link: currentPage.link,
        }
      ]} />
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
      slug: 'ajdar-milgerd',
      link: '/products/ajdar-milgerd'
    },
  }

  return {
    props: props
  }
}

export default Pricelist