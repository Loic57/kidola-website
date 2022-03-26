import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import TypeIt from "typeit-react";

import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Header from '../components/header/header'
import Card from '../components/card/card'
import Seo from "../components/seo"
import Expand from "../components/expand/expand"
import Footer from "../components/footer/footer"

import "../styles/app.scss";
import 'swiper/css';

export default function IndexPage(props) {

  const { t } = useTranslation();
  const currentLang = props.pageContext.language;


  const [advantages, setAdvantages] = useState({
    visible: false,
    number: 3,
    text: t('section-2.btn.more')
  })

  const handleAdvantages = () => {
    setAdvantages({
      visible: !advantages.visible
    });
  }

  useEffect(() => {
    setAdvantages({
      ...advantages,
      number: advantages.visible ? 12 : 3,
      text: advantages.visible ? t('section-2.btn.less') : t('section-2.btn.more'),
    })
  }, [advantages.visible])

  const displayCards = () => {

    let cards = [];

    props.data.allMarkdownRemark.edges.forEach(node => {
      if(node.node.frontmatter.lang === currentLang) {
        cards.push(node);
      }
    });

    return cards.slice(0, advantages.number).map((card, index) => (
      <div className={`kdl-grid__col kdl-grid__col--sm--6 kdl-grid__col--md--4 margin-bottom--4`} key={index}>
        <Card {...card} />
      </div>
    ))
  }


  return (
    <>
     <Seo
        googleTitle={t('index:meta.googleTitle')}
        googleDescription={t('index:meta.googleDescription')}
        socialTitle={t('index:meta.socialTitle')}
        socialDescription={t('index:meta.socialDescription')}
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

        <div className="kdl-container">
          <h1 className="kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3">
            <Trans i18nKey="section-1.title" />
            *<TypeIt
              options={{
                strings: [
                  t('section-1.creche'),
                  t('section-1.foster-home'),
                  t('section-1.foyer'),
                  t('section-1.relay-house'),
                  t('section-1.establishment'),
                ],
                speed: 100,
                nextStringDelay: 2000,
                breakLines: false,
                loop: true
              }}
            />*
          </h1>

          <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500">
            <Trans i18nKey="section-1.text" />
          </p>
        </div>

        <div className="kdl-agenda">
          <button type="button" className="kdl-button kdl-button--gradient kdl-button--default">{t('section-1.btn')}</button>

          <StaticImage
            src="../assets/images/kidola-agenda.png"
            width={1174}
            quality={100}
            formats={["auto", "webp"]}
            alt="Kidola App"
          />

          <div className="kdl-container bg--primary-300 padding-top--8 padding-bottom--10 border-bottom-left-radius--24 border-bottom-right-radius--24">
            <div className="kdl-container--800">
              <h2 className="kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3"><Trans i18nKey="section-2.title" /></h2>
              <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500"><Trans i18nKey="section-2.text" /></p>
              <div className="kdl-grid margin-top--12 ">
                {
                  displayCards()
                }
              </div>

              <button type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm margin-top--7" onClick={() => handleAdvantages()}>{advantages.text}</button>
            </div>
          </div>
        </div>

        <div className="kdl-container kdl-section bg--primary-500 padding-top--8 margin-top--md--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3"><Trans i18nKey="section-3.title" /></h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--8"><Trans i18nKey="section-3.text" /></p>
            <div className="kdl-tablet__image">
              <StaticImage
                src="../assets/images/kidola-tablet.png"
                width={500}
                quality={100}
                formats={["auto", "webp"]}
                alt="Kidola App"
                className="margin-bottom--10"
              />
            </div>
            <div className="kdl-tablet__image kdl-tablet__image--mobile">
              <StaticImage
                src="../assets/images/kidola-mobile.png"
                width={393}
                quality={100}
                formats={["auto", "webp"]}
                alt="Kidola App"
                className="margin-bottom--10"
              />
            </div>
          </div>
        </div>

        <div className="kdl-tablet kdl-container kdl-section bg--primary-300 padding-bottom--10 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500 margin-bottom--8"><Trans i18nKey="section-3.text-2" /></p>
            <a href="https://google.fr" className="kdl-button kdl-button--gradient kdl-button--default">{t('section-3.btn')}</a>
          </div>
        </div>

        <div className="kdl-container kdl-section bg--secondary-400 padding-top--8 margin-top--md--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3"><Trans i18nKey="section-4.title" /></h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--8"><Trans i18nKey="section-4.text" /></p>

            <Expand expanded={false} title={<Trans i18nKey="question-1.title" />} text={<Trans i18nKey="question-1.text" />} />

            <Expand expanded={false} title={<Trans i18nKey="question-2.title" />} text={<Trans i18nKey="question-2.text" />} />

            <Expand expanded={false} title={<Trans i18nKey="question-3.title" />} text={<Trans i18nKey="question-3.text" />} />

            <Expand expanded={false} title={<Trans i18nKey="question-4.title" />} text={<Trans i18nKey="question-4.text" />}/>

            <Expand expanded={false} title={<Trans i18nKey="question-5.title" />} text={<Trans i18nKey="question-5.text" />} />

            <StaticImage
              src="../assets/images/kidola-creche.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </div>
        </div>
        <div className="kdl-container kdl-section bg--primary-300 padding-top--4 padding-bottom--4 padding-top--md--8 padding-bottom--md--8 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <a href="https://google.fr" className="kdl-button kdl-button--gradient kdl-button--default">{t('section-4.btn')}</a>
          </div>
        </div>


        <div className="kdl-container kdl-team kdl-section bg--tertiary-500 padding-top--8 margin-top--md--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3"><Trans i18nKey="section-5.title" /></h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--8"><Trans i18nKey="section-5.text" /></p>

            <StaticImage
              src="../assets/images/kidola-team.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </div>
        </div>
        <div className="kdl-container kdl-section bg--primary-300 padding-top--16 padding-top--md--24 padding-bottom--8 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <blockquote>
              <p><Trans i18nKey="section-5.text-2" /></p>
            </blockquote>
            <figcaption><Trans i18nKey="section-5.text-3" /><span><Trans i18nKey="section-5.text-4" /></span></figcaption>
            <a href="https://google.fr" aria-label="section-5.btn" className="kdl-button kdl-button--gradient kdl-button--default"><Trans i18nKey="section-5.btn" /></a>
          </div>
        </div>

        <Swiper
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            640: {
              slidesPerView: 'auto',
              spaceBetween: 100,
            },
            1025: {
              slidesPerView: 'auto',
              spaceBetween: 100,
            },
            1920: {
              slidesPerView: 'auto',
              spaceBetween: 100,
            }
          }}
          modules={[Autoplay]}
          className="kdl-slider-nurseries margin-top--16"
        >
          <SwiperSlide className='slide'>
            <a href="https://www.babyconcept.lu/mertzig/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/baby-concept-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://maisercher.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/bei-den-maisercher-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://www.crechebeimpetzi.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/beim-petzi-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://butzenschlass.lu/creche/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/butzenschlass-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="http://coccinella.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/coccinella-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://www.lacrechecoccinelle.com/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/coccinelle-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://google.fr" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/famil-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="http://www.lileautresor.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/ile-aux-tresors-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://www.kidsland.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/kidsland-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://www.lespresenbulles.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/presenbulles-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://www.rockids.lu/fr/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/rockkids-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <a href="https://lespetitstournesols.lu/" target={'_blank'} rel="noreferrer" className='card-nursery'>
              <StaticImage
                src="../assets/images/creches/tournesols-logo.png"
                width={240}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Kidola App"
              />
            </a>
          </SwiperSlide>
        </Swiper>

        <StaticImage
          src="../assets/images/logo.svg"
          width={240}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Kidola App"
          className="kdl-logo margin-top--16 margin-bottom--4"
        />

        <Footer {...props} />

      </div>
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            title
            imageAlt
            bordered
            lang
            statut
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
`;

