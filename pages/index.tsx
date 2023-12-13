// "use client"

import Hero from '@/fragments/Hero'
import TabbedCarousel from '@/fragments/TabbedCarousel'
import Brands from '@/fragments/Brands'
import AdsBanners from '@/fragments/AdsBanners'
import AboutRow from '@/fragments/AboutRow'
import TeamMembers from '@/fragments/TeamMembers'
import Carousel from '@/fragments/Carousel'

export default function Home() {
  return (
    <main className='flex flex-col bg-slate-100 dark:bg-slate-700'>
      
      <Hero slides={[
        {
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#',
        },
      ]} />

      <section className='px-10 lg:px-24 py-7'>
        <TabbedCarousel data={[
          {
            head: {
              title: 'میلگرد',
              imgUrl: 'https://cloud.samentejarat.com/icon1.png',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          },{
            head: {
              title: 'میلگرد',
              imgUrl: 'https://cloud.samentejarat.com/icon1.png',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول2',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول2',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          },{
            head: {
              title: 'میلگرد',
              imgUrl: 'https://cloud.samentejarat.com/icon1.png',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
                alt: 'alt2',
                title: 'متن محصول3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          }
        ]} />
      </section>

      <Brands brands={[
        {
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: 'https://cloud.samentejarat.com/samen2 (1).webp',
          alt: 'alt',
          link: '#'
        }
      ]} />

      <AdsBanners banners={[
        {
          title: 'انواع فولاد های آلیاژ',
          description: 'تضمین صد در صدی قیمت و کیفیت',
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#'
        },{
          title: 'انواع فولاد های آلیاژ',
          description: 'تضمین صد در صدی قیمت و کیفیت',
          imgUrl: 'https://cloud.samentejarat.com/s1.webp',
          alt: 'alt',
          link: '#'
        }
      ]} />

      <AboutRow videoUrl='https://samentejarat.com/img/samen.mp4' poster={'https://samentejarat.com/img/2022-09-19_13-53-55.png'} description='انواع فولاد های آلیاژ انواع فولاد های آلیاژ انواع فولاد های آ انواع فولاد های آلیاژ لیاژ انواع فولاد های آلیاژ انواع فولاد های آلیاژ انواع فولاد های آلیاژ انواع فولاد های آ انواع فولاد های آلیاژ لیاژ انواع فولاد های آلیاژ انواع فولاد های آلیاژ انواع فولاد های آلیاژ انواع فولاد های آ انواع فولاد های آلیاژ لیاژ انواع فولاد های آلیاژ' />

      <TeamMembers teams={[
        {
          title: 'هیئت مدیره',
          members: [
            {
              imgUrl: 'https://cloud.samentejarat.com/245*165-_image1660721464.webp?w=384&q=75 1x, https://cloud.samentejarat.com/245*165-_image1660721464.webp',
              alt: 'alt',
              name: 'عباس اشرف',
              role: 'مدیرعامل',
              tel: '۰۹۱۲۱۲۳۱۴۱۵',
            },{
              imgUrl: 'https://cloud.samentejarat.com/245*165-_image1660721464.webp?w=384&q=75 1x, https://cloud.samentejarat.com/245*165-_image1660721464.webp',
              alt: 'alt',
              name: 'عباس اشرف',
              role: 'مدیرعامل',
              tel: '۰۹۱۲۱۲۳۱۴۱۵',
            },{
              imgUrl: 'https://cloud.samentejarat.com/245*165-_image1660721464.webp?w=384&q=75 1x, https://cloud.samentejarat.com/245*165-_image1660721464.webp',
              alt: 'alt',
              name: 'عباس اشرف',
              role: 'مدیرعامل',
              tel: '۰۹۱۲۱۲۳۱۴۱۵',
            }
          ]
        },{
          title: 'هیئت مدیره',
          members: [
            {
              imgUrl: 'https://cloud.samentejarat.com/245*165-_image1660721464.webp?w=384&q=75 1x, https://cloud.samentejarat.com/245*165-_image1660721464.webp',
              alt: 'alt',
              name: 'عباس اشرف',
              role: 'مدیرعامل',
              tel: '۰۹۱۲۱۲۳۱۴۱۵',
            }
          ]
        },
      ]} />

      <section className='px-10 lg:px-24 py-7 bg-slate-100 dark:bg-slate-800'>
        <Carousel title='پایگاه دانش ثامن تجارت' rowOrCol='flex-col' posts={[
          {
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },
        ]} />
      </section>

      <section className='px-10 lg:px-24 py-7 bg-white dark:bg-black'>
        <Carousel title='فرصت های همکاری' rowOrCol='flex-row justify-between mt-2' posts={[
          {
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://cloud.samentejarat.com/What is 430 steel sheet.webp',
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
