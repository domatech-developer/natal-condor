import "./Banner.scss";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";

const Banner: FC = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner__ornamentsContainer">
        <ImgDefault
          className="banner__ornaments"
          src={"/images/banner-ornaments-1.webp"}
          alt={"Enfeites de natal decorativos"}
          quality={75}
          aria-hidden="true"
          skeleton={false}
        />
      </div>
      <div className="banner__ornamentsContainer banner__ornamentsContainer--2">
        <ImgDefault
          className="banner__ornaments"
          src={"/images/banner-ornaments-2.webp"}
          alt={"Enfeites de natal decorativos"}
          quality={75}
          aria-hidden="true"
          skeleton={false}
        />
      </div>
      <div className="banner__container">
        <div className="banner__grid">
          <div className="banner__listImages">
            <ImgDefault
              className="banner__titlePage"
              src={"/images/Condor-momentos-que-param-o-tempo.webp"}
              alt={"Imagem com título Momentos que pagam o tempo"}
              quality={75}
              aria-hidden="true"
              skeleton={false}
            />
            <ImgDefault
              className="banner__imgPresent"
              src={"/images/titulo-natal-banner.webp"}
              alt={"Imagem ilustrativa escrito natal"}
              quality={75}
              aria-hidden="true"
              skeleton={false}
            />
            <ImgDefault
              className="banner__logo"
              src={"/images/logo-rede-condor.webp"}
              alt={"Logo da rede condor"}
              quality={75}
              aria-hidden="true"
              skeleton={false}
            />
          </div>
        </div>

        <div className="banner__giftContainer">
          <ImgDefault
            className="banner__gift"
            src={"/images/gift.webp"}
            alt={"Presentinho de natal"}
            quality={75}
            aria-hidden="true"
            skeleton={false}
          />
        </div>
        <div className="banner__giftContainer banner__giftContainer--2">
          <ImgDefault
            className="banner__gift"
            src={"/images/gift.webp"}
            alt={"Presentinho de natal"}
            quality={75}
            aria-hidden="true"
            skeleton={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
