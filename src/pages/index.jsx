"use client"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import InfiniteHorizontalScroll from './components/infiniteHorizontalScroll'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'index',
        'navbar'
        
      ])),
    },
  }
}
export default function Index(){
    const { t } = useTranslation('index')
    const images1 = [
      '/image/aboutUS/slideLeft/image1.jpg',
      '/image/aboutUS/slideLeft/image2.jpg',
      '/image/aboutUS/slideLeft/image3.jpg',
      '/image/aboutUS/slideLeft/image4.jpg',
      '/image/aboutUS/slideLeft/image5.jpg',
      '/image/aboutUS/slideLeft/image6.jpg',
      
    ];
    return(
        <>
            <span>{t('index')}</span>
            <InfiniteHorizontalScroll  speed={20000} />

        </>
    )
}