import * as React from "react"

import './header.scss';

const Header = () => (
  <header role="banner" className="kdl-header text--right">
    <button type="button" className="kdl-button kdl-button--gradient kdl-button--sm margin-right--2">Se connecter</button>
    <button type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm">Lu</button>
  </header>
);

export default Header
