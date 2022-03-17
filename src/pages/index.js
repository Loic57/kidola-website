import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header/header'
import Card from '../components/card/card'
import Seo from "../components/seo"
import Expand from "../components/expand/expand"

import TypeIt from "typeit-react";

import "../styles/app.scss";
import 'swiper/css';




const IndexPage = ({data}) => {

  const [advantages, setAdvantages] = useState({
    visible: false,
    number: 3,
    text: 'Afficher plus de fonctionnalités'
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
      text: advantages.visible ? 'Afficher moins de fonctionnalités' : 'Afficher plus de fonctionnalités',
    })
  }, [advantages.visible])

  return (
    <>
      <Seo title="Test" />
      <Header />
      <div className="text--center">
        <StaticImage
          src="../assets/images/logo.svg"
          width={240}
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

        <div className="kdl-container kdl-section bg--primary-300 padding-top--8 padding-bottom--10 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--primary-500 margin-bottom--3">Gagnez <br />du temps !</h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500">Le temps c’est des sourires et des chansons&nbsp;! <br />Kidola est la solution pour assurer le suivi de votre crèche du bout des doigts.</p>
            <div className="kdl-grid margin-top--12">
              {
                data.allMarkdownRemark.edges.slice(0, advantages.number).map((node, index) => (
                  <div className="kdl-grid__col kdl-grid__col--4 margin-bottom--4" key={index}>
                    <Card {...node} />
                  </div>
                ))
              }
            </div>

            <button type="button" className="kdl-button kdl-button--primary-300 kdl-button--sm margin-top--7" onClick={() => handleAdvantages()}>{advantages.text}</button>
          </div>
        </div>

        <div className="kdl-container kdl-section bg--primary-500 padding-top--8 margin-top--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3">Facile à utiliser<br />selon les éducatrices</h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--10">Et heureusement, c’était notre objectif ! Nous voulons vous faire gagner du temps, pas vous rajouter une corvée en plus. On ne remplace pas les échanges, on les améliore tout en mettant en valeur votre travail !</p>
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
          </div>
        </div>

        <div className="kdl-tablet kdl-container kdl-section bg--primary-300 padding-bottom--10 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <p className="kdl-paragraph kdl-paragraph--p1 color--primary-500 margin-bottom--8">Nous avons développé Kidola grâce à vos commentaires et vos idées. Qui connaît votre métier mieux que vous ? </p>
            <a href="#" className="kdl-button kdl-button--gradient kdl-button--default">Demander un essai</a>
          </div>
        </div>

        <div className="kdl-container kdl-section bg--secondary-400 padding-top--8 margin-top--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3">Les questions <br />fréquements posées</h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--10">Le plus simple, c’est souvent de nous appeler. N’hésitez pas, nous sommes là pour ça. Vous pouvez nous joindre au xxx.</p>

            <Expand expanded={false} title="Mais, combien ça coûte ?" text="Avant d’en discuter, nous avons besoin de plus d’en apprendre un peu plus sur vous. Vous gardez combien d’enfants répartis dans combien de structures ?" />

            <Expand expanded={false} title="Et si je veux arrêter ?" text="Un email et c’est fini à la fin du mois. On vous transmet toutes vos données et on vous souhaite le meilleur. Du vrai “ sans engagement “. " />

            <Expand expanded={false} title="J’ai plusieurs structures ..." text="C’est une super nouvelle ! Combien avez-vous de structures et combien d’enfants ? Nous appliquons un tarif dégressif à partir de 3 établissements. " />

            <Expand expanded={false} title="Et au niveau de la mise en place ?" text="C’est très simple : il suffit d’avoir des téléphones ou tablettes connectées à internet et on se charge du reste. Nous venons sur place pour la mise en marche en fonction de votre planning et nous formons vos équipes avec votre compte prêt à l’emploi." />

            <Expand expanded={false} title="Quel type de matériel faut-il prévoir ?" text="Kidola a été pensé pour le terrain. L’application fonctionne sur téléphone, tablettes, ordinateurs ... Pas besoin d’investir des millieurs d’euros. Nous conseillons tout de même une tablettes par groupes. ( les parents trouvent ça plus professionel ) L’application fonctionne avec une connexion internet. Qu’elle soit cablée ou en wifi, il existe plusieurs solutions." />

            <StaticImage
              src="../assets/images/kidola-creche.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </div>
        </div>
        <div className="kdl-container kdl-section bg--primary-300 padding-top--8 padding-bottom--8 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <a href="#" className="kdl-button kdl-button--gradient kdl-button--default">C'est parti !</a>
          </div>
        </div>


        <div className="kdl-container kdl-team kdl-section bg--tertiary-500 padding-top--8 margin-top--16 border-top-left-radius--24 border-top-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <h2 className="kdl-heading kdl-heading--h1 color--white margin-bottom--3">Une équipe à votre écoute</h2>
            <p className="kdl-paragraph kdl-paragraph--p1 color--white margin-bottom--10">Qui sont ces zigotos ? C’est l’équipe derrière Kidola. La personne qui vous appele pour vous présenter nos services, celui qui code l’application ou encore qui répondra si vous avez une question.</p>

            <StaticImage
              src="../assets/images/kidola-team.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Kidola App"
            />
          </div>
        </div>
        <div className="kdl-container kdl-section bg--primary-300 padding-top--24 padding-bottom--8 border-bottom-left-radius--24 border-bottom-right-radius--24">
          <div className="kdl-container kdl-container--800">
            <blockquote>
              <p>L’équipe était surprise du succès rencontré auprès des parents. La réactivité et l’ouverture de l’équipe aux besoins du terrain est remarquable !</p>
            </blockquote>
            <figcaption>Maria Castrovinci<br /><span>Directrice de crèche</span></figcaption>
            <a href="#" className="kdl-button kdl-button--gradient kdl-button--default">Pourquoi pas vous ?</a>
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
              spaceBetween: 100,
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
            <a href="#" target={'_blank'} rel="noreferrer" className='card-nursery'>
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
          className="margin-top--16 margin-bottom--4"
        />

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
            <a href="https://www.linkedin.com/company/kidola/" target="_blank" className="button button--icon-only button--with-icon">
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
              <a href="#" className="kdl-link">Conditions générales</a>&nbsp;
              •  <a href="#" className="kdl-link">Conditions générales relatives aux données personnelles</a>&nbsp;
              •  <a href="#" className="kdl-link">Protection des données</a>&nbsp;
              •  <a href="#" className="kdl-link">Police des cookies</a>&nbsp; <br />
              <strong>Innovation Hub Dudelange, 100 Route de Volmerange, L-1911 Dudelange</strong>  •  RCS : B245482  •  TVA : LU32261276
            </p>

            <p className="kdl-paragraph kdl-paragraph--p3 margin-bottom--3 color--grey-500">Kidola est développé au Luxembourg et hebergé en Europe. ❤️ Kidola est une marque déposée © 2022</p>
            <p className="kdl-paragraph kdl-paragraph--p4 color--grey-500">Site réalisé par <a href="https://loic-sciampagna.fr" target="_blank" className="kdl-link">Loïc Sciampagna</a></p>
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

