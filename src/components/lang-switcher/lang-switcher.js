import * as React from "react";

import { useI18next } from 'gatsby-plugin-react-i18next';


import './lang-switcher.scss';


export default function LangSwitcher(props) {

  const {languages, changeLanguage} = useI18next();

  const currentLang = props.pageContext.language;
  const currentLangChar = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);

  return (
    <div className="kdl-lang-switcher">
      <button type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm">{currentLangChar}</button>
      <div className="kdl-lang-switcher__list">
      {
        languages.filter(lang => lang !== currentLang).map((lng) => (
          <button key={lng} type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm"
            onClick={() => {
              changeLanguage(lng);
            }}>
            {lng.charAt(0).toUpperCase() + lng.slice(1)}
          </button>
        ))
      }
      </div>
    </div>
  )
}

