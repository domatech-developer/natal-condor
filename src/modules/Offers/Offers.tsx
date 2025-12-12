import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupOffers.json";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";

import "./Offers.scss";

const Offers: FC = () => {
  return (
    <section id="offers" className="offers">
      <div className="offers__container">
        <div className="offers__giftContainer">
          <ImgDefault className="offers__gift" src={"/images/gift.webp"} alt={"Presentinho de natal"} quality={75} />
        </div>
        <div className="offers__giftContainer offers__giftContainer--2">
          <ImgDefault className="offers__gift" src={"/images/gift.webp"} alt={"Presentinho de natal"} quality={75} />
        </div>
        <div className="offers__giftContainer offers__giftContainer--3">
          <ImgDefault className="offers__gift" src={"/images/gift.webp"} alt={"Presentinho de natal"} quality={75} />
        </div>
        <div className="offers__infoContainer">
          <div className="offers__textContainer">
            <h2 className="offers__text">Ofertas todos os dias, prêmios toda semana, o ano todo!</h2>

            <ButtonLink
              linkProps={{
                url: "https://campanha.condor.com.br/semanaspremiadas/?utm_term=condor%20online&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7711719772&hsa_cam=22900441889&hsa_grp=181206479982&hsa_ad=769566957067&hsa_src=g&hsa_tgt=kwd-301576205251&hsa_kw=condor%20online&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22900441889&gbraid=0AAAAApnt4HPlWoQ24b5yl6h-9Iw_kgpR0&gclid=CjwKCAiAl-_JBhBjEiwAn3rN7fTViQjY4fwo_cz3x5_ttlDbvP3q_TCfSiGgd3eonRF_daM9Ed_jaxoCY4QQAvD_BwE",
                title: "SAIBA MAIS",
                target: "_blank",
                name: "SAIBA MAIS"
              }}
              variant="primary"
            />
          </div>
        </div>

        <div className="offers__imgContainer">
          <ImgDefault className="offers__img" src={mokup.image.src} alt={mokup.image.alt} quality={75} />
        </div>
      </div>
    </section>
  );
};

export default Offers;
