import * as React from "react"

import LangSwitcher from '../lang-switcher/lang-switcher';

import {useTranslation} from 'gatsby-plugin-react-i18next';

import './header.scss';

export default function Header(props) {

  const { t } = useTranslation();


  return (
    <header role="banner" className="kdl-header text--right">
      <button type="button" className="kdl-button kdl-button--gradient kdl-button--sm margin-right--2">{t('btn.login')}</button>
      <LangSwitcher {...props} />
    </header>
  )
}
