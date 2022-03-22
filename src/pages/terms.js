import React from 'react';

import { graphql } from "gatsby"

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Header from '../components/header/header'
import Seo from "../components/seo"

import "../styles/app.scss";


export default function IndexPage(props) {

  console.log(props)

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
