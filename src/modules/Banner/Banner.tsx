import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";

import "./Banner.scss";

const Banner: FC = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner__container">
        <div className="banner__grid">
          <div className="banner__listImages">
            <ImgDefault
              className="banner__titlePage"
              src={"/images/Condor-momentos-que-param-o-tempo.webp"}
              alt={"Imagem com título Momentos que pagam o tempo"}
              quality={75}
              aria-hidden="true"
            />
            <ImgDefault
              className="banner__imgPresent"
              src={"/images/titulo-natal-banner.webp"}
              alt={"Imagem ilustrativa escrito natal"}
              quality={75}
              aria-hidden="true"
            />
            <ImgDefault
              className="banner__logo"
              src={"/images/logo-rede-condor.webp"}
              alt={"Logo da rede condor"}
              quality={75}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
