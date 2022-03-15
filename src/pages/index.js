import React, { useEffect, useState } from 'react';
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Card from '../components/card/card'
import Seo from "../components/seo"

import TypeIt from "typeit-react";

import "../styles/app.scss"




const IndexPage = ({data}) => {



  const [advantages, setAdvantages] = useState({
    visible: false,
    number: 3,
    text: 'Afficher plus de fonctionnalités'
  })

  useEffect(() => {
    console.log(advantages)
  }, [advantages.visible])



  const handleAdvantages = () => {
    setAdvantages({
      visible: !advantages.visible,
      number: advantages.visible ? 12 : 3,
      text: advantages.visible ? 'Afficher moins de fonctionnalités' : 'Afficher plus de fonctionnalités',
    })

/*     setAdvantages({
      number: 12,
      visible: true,
      text: 'Afficher moins de fonctionnalités',
    }) */


  }


  return (
    <>
      <Seo title="Test" />
      <Header />
      <div className="text--center">
        <StaticImage
          src="../assets/images/logo.svg"
          width={235}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Kidola App"
          className="margin-bottom--10"
        />

        <h1 className="kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3">
          On simplifie <br />la gestion de votre&nbsp;
          *<TypeIt
            options={{
              strings: ["crèche", 'maison d\'accueil', 'foyer', 'maison relais', 'établissement'],
              speed: 100,
              nextStringDelay: 2000,
              breakLines: false,
              loop: true
            }}
          />*
        </h1>

        <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500">Vous aimez remplir des tableaux, des rapports, ... courir partout après la bonne info&nbsp;? <br />Non&nbsp;? Avec Kidola prenez plus de temps pour ce qui compte vraiment.</p>

        <div className="kdl-agenda">
          <button type="button" className="kdl-button kdl-button--gradient kdl-button--default">Je veux essayer</button>

          <StaticImage
            src="../assets/images/kidola-agenda.png"
            width={1174}
            quality={100}
            formats={["auto", "webp"]}
            alt="Kidola App"
            className="margin-bottom--10"
          />
        </div>

        <div className="kdl-section bg--primary-300 padding-top--8 padding-bottom--10">
          <div className="kdl-container">
            <h2 className="kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3">Gagnez <br />du temps !</h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500">Le temps c’est des sourires et des chansons&nbsp;! <br />Kidola est la solution pour assurer le suivi de votre crèche du bout des doigts.</p>
            <div className="kdl-grid margin-top--12">
              {
                data.allMarkdownRemark.edges.slice(0, advantages.number).map((node, index) => (
                  <div className="kdl-grid__col kdl-grid__col--4" key={index}>
                    <Card {...node} />
                  </div>
                ))
              }
            </div>

            <button type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm margin-top--7" onClick={() => handleAdvantages()}>{advantages.text}</button>
          </div>
        </div>
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </>
  )
}

export default IndexPage;

export const query = graphql`
  query cards {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            title
            imageAlt
            bordered
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 48
                  placeholder: DOMINANT_COLOR
                  blurredOptions: {width: 100}
                )
              }
            }
          }
        }
      }
    }
  }
`

