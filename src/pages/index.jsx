"use client"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
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
    
    return(
        <>
            <span>{t('index')}</span>

        </>
    )
}