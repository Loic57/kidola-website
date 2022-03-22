import React, { useState } from 'react';

import { StaticImage } from "gatsby-plugin-image"

import './expand.scss';


export default function Expand(props) {

  const [expanded, setExpanded] = useState(props.expanded)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={`kdl-expand ${expanded ? 'kdl-expand--expanded' : ''}`}>
      <div className="kdl-expand__trigger">
        <h5 className="kdl-heading kdl-heading--h5 color--primary-500">{props.title}</h5>
        <button onClick={() => toggleExpand()}>
          <StaticImage
            src="../../assets/images/icon-deploy.png"
            quality={100}
            formats={["auto", "webp"]}
            alt="Kidola App"
          />
        </button>
      </div>
      <div className="kdl-expand__content">
        <p className="kdl-paragraph kdl-paragraph--p2 padding-top--2 color--primary-500">{props.text}</p>
      </div>
    </div>
  )
}

