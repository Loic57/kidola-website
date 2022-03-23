import React from 'react';

import { graphql, Link } from "gatsby"

import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Seo from "../components/seo"
import Footer from "../components/footer/footer"

import "../styles/app.scss";


export default function CookiesPage(props) {

  const { t } = useTranslation();

  return (
    <>
     <Seo
        googleTitle={t('cookies:meta.googleTitle')}
        googleDescription={t('cookies:meta.googleDescription')}
        socialTitle={t('cookies:meta.socialTitle')}
        socialDescription={t('cookies:meta.socialDescription')}
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

        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'><Link to='/' className="kdl-link">{t('cookies:back-link')}</Link></p>

        <h1 className='kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3'>{t('cookies:heading')}</h1>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--6'>{t('cookies:text')}</p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-1')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-1" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-2')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-2" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-3')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-3">
          aaa
            <ul class="kdl-list">
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </Trans>
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-4')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-4" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-5')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-5" />
        </p>

        <h2 className='kdl-heading kdl-heading--h2 color--primary-500 margin-bottom--3'>{t('cookies:heading-6')}</h2>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--4'>
          <Trans i18nKey="cookies:text-6" />
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
