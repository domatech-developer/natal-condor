import { FC } from "react";
import Link from "next/link";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mock from "public/mokup/footerMokup.json";
import TextDefault from "@/components/TextDefault/TextDefault";

import "./Footer.scss";

const Footer: FC = () => {

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__logoPage">
          <ImgDefault
            className="footer__logo"
            src={mock.logo.src}
            alt={mock.logo.alt}
            width={mock.logo.width}
            height={mock.logo.height}
            quality={75}
          />
        </div>
        <div className="footer__containerFlex">

          <div className="footer__ListCard">
            <h3>{mock.sections.acontecendoNoCondor.title}</h3>
            <nav aria-label="navegação, o que acontece no condor">
              <ul>
                {mock.sections.acontecendoNoCondor.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} role="tab" aria-selected="true">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__ListCard">
            <h3>{mock.sections.nossosSites.title}</h3>
            <nav aria-label="navegação, nossos sites">
              <ul>
                {mock.sections.nossosSites.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} target="_blank" role="tab" aria-selected="true">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__ListCard">
            <h3>{mock.sections.outros.title}</h3>
            <nav aria-label="navegação, outros links">
              <ul>
                {mock.sections.outros.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} target="_blank" role="tab" aria-selected="true">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__ListCard">
            <h3>{mock.sections.nossasRedes.title}</h3>
            <ul className="footer__list_sociais">
              {mock.sections.nossasRedes.icons.map((item, index) => (
                <li key={index} className="footer__list_link_sociais">
                  <Link href={item.url} target="_blank" role="tab" aria-selected="true">
                    <ImgDefault
                        className="footer__domaIconSociais"
                        src={item.image}
                        alt={item.label}
                        quality={75}
                        width={16}
                        height={16}
                      />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer__copy">
          <TextDefault className="footer__copyTitle">{mock.legal.text}</TextDefault>
          <div className="footer__domaContainer">
            <TextDefault className="footer__doma">{mock.copyright}</TextDefault>
            <Link href={mock.by.url} target="_blank" role="tab" aria-selected="true">
              <ImgDefault
                className="footer__domaIcon"
                src={mock.by.image}
                alt={mock.by.alt}
                quality={75}
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
