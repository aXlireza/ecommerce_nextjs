import type { AppProps } from 'next/app'
import Header from '@/fragments/Header'
import Topnav from '@/fragments/Topnav'
import Footer from '@/fragments/Footer'
import SocketBar from '@/fragments/SocketBar'
import '@/styles/globals.css'
// import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section dir='rtl'>
      {/* <HydrationOverlay> */}
      <section dir='rtl'>
        <Topnav
          lastupdate='امروز ۱۴:۲۰'
          prices={['$20', '$100']}
          date1='۱۴۰۲/۰۸/۱۰'
          date2='۲۰۲۳/۱۱/۰۱'
        />

        <Header logo_alt='samentejarat logo'/>

        <Component {...pageProps} />

        <Footer
          logo_alt='samentejarat logo'
          tel='۰۲۱۹۱۰۰۳۱۸۱'
          email='INFO@SAMENTEJARAT.COM'
          workSchedule='شنبه تا چهارشنبه از ساعت ۸:۳۰ تا ساعت ۱۷ پنجشنبه ها از ساعت ۸:۳۰ تا ۱۲:۳۰'
          address='تهران-بلوار فردوس شرق-کوی ولیعصر-کوچه ظرافتی-مجتمع ماندگار'
          lists={[
            {
              head: {
                title: 'ثامن تجارت',
                link: '#'
              },
              items: [
                {
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },
              ]
            },{
              head: {
                title: 'ثامن تجارت',
                link: '#'
              },
              items: [
                {
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                },
              ]
            },{
              head: {
                title: 'ثامن تجارت',
                link: '#'
              },
              items: [
                {
                  title: 'درباره ما',
                  link: '#'
                },{
                  title: 'درباره ما',
                  link: '#'
                }
              ]
            },
          ]}
        />

        <SocketBar
          medias={[
            {
              name: 'instagram',
              link: '#',
              alt: ''
            },{
              name: 'aparat',
              link: '#',
              alt: ''
            },{
              name: 'linkedin',
              link: '#',
              alt: ''
            },{
              name: 'twitter',
              link: '#',
              alt: ''
            },{
              name: 'youtube',
              link: '#',
              alt: ''
            },{
              name: 'telegram',
              link: '#',
              alt: ''
            },
          ]}
        />
      </section>
    {/* </HydrationOverlay> */}
    </section>
  )
}
