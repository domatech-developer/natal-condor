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
                url: "#",
                title: "SAIBA MAIS",
                target: "_blank",
                name: "SAIBA MAIS"
              }}
              variant="primary"
              className="offers__button"
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
