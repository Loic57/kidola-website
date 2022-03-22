import React from 'react';
import { Link } from "gatsby"

import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage(props) {

  return (
      <div className="footer">
        <div className="footer__line">
          <a href="tel:0032499618944" className="kdl-button kdl-button--icon">
            <StaticImage
              src="../assets/images/icon-phone.png"
              width={40}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
            0032 499 618 944
          </a>
          <a href="mailto:hello@kidola.lu" className="kdl-button kdl-button--icon">
            <StaticImage
              src="../assets/images/icon-phone.png"
              width={40}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
            hello@kidola.lu
          </a>
        </div>

        <div className="footer__social">
          <a href="https://www.linkedin.com/company/kidola/" target="_blank" rel="noreferrer" className="button button--icon-only button--with-icon">
            <StaticImage
              src="../assets/images/icon-linkedin.png"
              width={40}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </a>
          <a href="https://twitter.com/Kidolapp" className="button button--icon-only button--with-icon">
            <StaticImage
              src="../assets/images/icon-twitter.png"
              width={40}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </a>
          <a href="https://www.facebook.com/kidolapp/ " className="button button--icon-only button--with-icon">
            <StaticImage
              src="../assets/images/icon-facebook.png"
              width={40}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </a>
        </div>

        <div className='text--center'>
          <p className="kdl-paragraph kdl-paragraph--p2 margin-bottom--3 color--grey-500">
            <Link to='/terms' className="kdl-link"><Trans i18nKey="footer.terms" /></Link>&nbsp;
            •  <Link to='/rgpd' className="kdl-link"><Trans i18nKey="footer.rgpd" /></Link>&nbsp;
            •  <Link to='/data-protection' className="kdl-link"><Trans i18nKey="footer.data-protection" /></Link>&nbsp;
            •  <Link to='/cookies' className="kdl-link"><Trans i18nKey="footer.cookies" /></Link>&nbsp; <br />
            <strong><Trans i18nKey="footer.address" /></strong> • <Trans i18nKey="footer.rcs" />
          </p>

          <p className="kdl-paragraph kdl-paragraph--p3 margin-bottom--3 color--grey-500"><Trans i18nKey="footer.copyright" /></p>
          <p className="kdl-paragraph kdl-paragraph--p4 color--grey-500"><Trans i18nKey="footer.developer" />&nbsp;<a href="https://loic-sciampagna.fr" target="_blank" rel="noreferrer" className="kdl-link">Loïc Sciampagna</a></p>
        </div>
      </div>
  )
}

