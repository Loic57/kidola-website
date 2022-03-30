import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import './card.scss';

export default function Card(props) {
  return (
    <article className={`kdl-card ${props.node.frontmatter.bordered ? 'kdl-card--bordered' : ''}`}>
      <header>
        <GatsbyImage
          image={getImage(props.node.frontmatter.image)}
          width={48}
          alt={props.node.frontmatter.imageAlt}
        />
        <h6 className="kdl-heading kdl-heading--h6 color--primary-500">{props.node.frontmatter.title}</h6>
      </header>
      <p className="kdl-paragraph kdl-paragraph--p3 color--primary-450">{props.node.frontmatter.description}</p>
      {props.node.frontmatter.statut && <div className="text--center"><div className="kdl-button kdl-button--primary-300 kdl-button--sm margin-top--3">{props.node.frontmatter.statut}</div></div>}
    </article>
  )
}