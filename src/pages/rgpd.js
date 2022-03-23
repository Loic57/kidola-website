import React from 'react';

import { graphql, Link } from "gatsby"

import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Seo from "../components/seo"
import Footer from "../components/footer/footer"

import "../styles/app.scss";


export default function RGPDPage(props) {

  const { t } = useTranslation();

  return (
    <>
     <Seo
        googleTitle={t('rgpd:meta.googleTitle')}
        googleDescription={t('rgpd:meta.googleDescription')}
        socialTitle={t('rgpd:meta.socialTitle')}
        socialDescription={t('rgpd:meta.socialDescription')}
        author="Kidola"
      />

      <Header {...props} />

      <div className="text--center">
        <StaticImage
          src="../assets/images/logo.svg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Kidola App"
          className="kdl-logo margin-bottom--10"
        />
      </div>

      <div className='kdl-container'>

        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'><Link to='/' className="kdl-link">{t('rgpd:back-link')}</Link></p>

        <h1 className='kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--6'>{t('rgpd:heading')}</h1>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-1')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-1" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-2')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-2" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-3')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-3" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-4')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-4" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-5')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-5" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-6')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-6" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-7')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-7">
            aaa
            <ul class="kdl-list">
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </Trans>
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-8')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-8" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('rgpd:heading-9')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="rgpd:text-9" />
        </p>
      </div>

      <Footer {...props} />
    </>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
