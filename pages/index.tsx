"use client"

import Hero from '@/fragments/Hero'
import TabbedCarousel from '@/fragments/TabbedCarousel'
import Brands from '@/fragments/Brands'
import Banners from '@/fragments/Banners'
import AboutRow from '@/fragments/AboutRow'
import TeamMembers from '@/fragments/TeamMembers'
import Carousel from '@/fragments/Carousel'

export default function Home() {
  return (
    <main className='flex flex-col samen-lightbg'>
      
      <Hero slides={[
        {
          imgUrl: 'https://i.postimg.cc/MKjMFWxC/SAMEN1.jpg',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: 'https://i.postimg.cc/MKjMFWxC/SAMEN1.jpg',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: 'https://i.postimg.cc/MKjMFWxC/SAMEN1.jpg',
          alt: 'alt',
          link: '#',
        },
      ]} />

      <section className='samen-container-padding bg-samen-gray'>
        <TabbedCarousel data={[
          {
            head: {
              title: 'میلگرد',
              imgUrl: 'https://cloud.samentejarat.com/icon1.png',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: 'https://i.postimg.cc/zGkw2Kgc/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/SKCntp3N/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/43sGskn3/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/9QVXFqnV/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/zGkw2Kgc/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/SKCntp3N/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/9QVXFqnV/2.webp',
                alt: 'alt2',
                title: 'متن محصول',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: 'https://i.postimg.cc/zGkw2Kgc/2.webp',
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

      <Banners banners={[
        {
          title: 'انواع فولاد های آلیاژ',
          description: 'تضمین صد در صدی قیمت و کیفیت',
          imgUrl: 'https://i.postimg.cc/hXBnM4CN/s4.jpg',
          alt: 'alt',
          link: '#'
        },{
          title: 'انواع فولاد های آلیاژ',
          description: 'تضمین صد در صدی قیمت و کیفیت',
          imgUrl: 'https://i.postimg.cc/fVfNP4py/s5.jpg',
          alt: 'alt',
          link: '#'
        }
      ]} />

      <AboutRow videoUrl='https://samentejarat.com/img/samen.mp4' poster={'https://samentejarat.com/img/2022-09-19_13-53-55.png'} description='مجموعه بازرگاني ثامن تجارت از سال 1393 فعاليت خود را در زمينه خريد و فروش و تامين جامع انواع آهن آلات ساختمانی و صنعتی و همچنین انواع تفلون و پلیمر آغاز کرد و در راستای سرعت بخشیدن و شفافیت و همچنین امر اطلاع رسانی و ارائه بهتر خدمات در سال 1397 اقدام به راه اندازي سايت www.samentejarat.com نمود. شما می توانید قیمت انواع محصولات که به صورت روزانه برای شما بارگذاری می شود را مشاهده کنید و جهت دریافت مشاوره برای خرید بهتر با کارشناسان ثامن تجارت تماس حاصل فرمایید. ما میخواهیم در پی همکاری متقابل و صادقانه، ضمن کسب سودآوری برای مجموعه ثامن تجارت برای مشتریان گرامی این مجموعه نیز سود و منفعت حاصل کنیم.' />

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

      <section className='samen-container-padding samen-lightbg'>
        <Carousel title='پایگاه دانش ثامن تجارت' rowOrCol='flex-col' posts={[
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

      <section className='samen-container-padding bg-white'>
        <Carousel title='فرصت های همکاری' rowOrCol='flex-row justify-between mt-2' posts={[
          {
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
          },{
            imgUrl: 'https://i.postimg.cc/QNptM00F/sa2.jpg',
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
            imgUrl: 'https://i.postimg.cc/8zCPtDDv/sa4.jpg',
            alt: 'alt2',
            title: 'متن محصول',
            btnText: 'آهن آلات',
            link: '#'
          },{
            imgUrl: 'https://i.postimg.cc/SNdx6j0q/sa5.jpg',
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