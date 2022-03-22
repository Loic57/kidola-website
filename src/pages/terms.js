import React from 'react';

import { graphql } from "gatsby"

import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Seo from "../components/seo"
import Footer from "../components/footer/footer"

import "../styles/app.scss";


export default function IndexPage(props) {

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
