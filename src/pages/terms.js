import React from 'react';

import { graphql, Link } from "gatsby"

import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Seo from "../components/seo"
import Footer from "../components/footer/footer"

import "../styles/app.scss";


export default function TermsPage(props) {

  const { t } = useTranslation();

  return (
    <>
     <Seo
        googleTitle={t('terms:meta.googleTitle')}
        googleDescription={t('terms:meta.googleDescription')}
        socialTitle={t('terms:meta.socialTitle')}
        socialDescription={t('terms:meta.socialDescription')}
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
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--3'><Link to='/' className="kdl-link">{t('terms:back-link')}</Link></p>

        <h1 className='kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3'>{t('terms:heading')}</h1>
        <p className='kdl-paragraph kdl-paragraph--p3 margin-bottom--3'>
          <Trans i18nKey="terms:text" />
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
