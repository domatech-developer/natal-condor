import { FC } from "react";
import TextDefault from "@/components/TextDefault/TextDefault";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import "./Prizes.scss";

const Prizes: FC = () => {
  return (
    <section id="prizes" className="prizes">
      <div className="prizes__container">
        <div className="prizes__textContainer">
          <div className="prizes__stickyContainer">
            <TextDefault
              className="prizes__text"
              text={`<span>Prêmios imperdíveis <br /> esperam você</span>. O próximo <br /> pode se o seu.`}
            />
            <ButtonLink
              className="prizes__button"
              linkProps={{
                url: "#",
                title: "Ver ofertas",
                target: "_blank",
                name: "Ver ofertas"
              }}
            />
          </div>
        </div>
        <div className="prizes__cardContainer">
          <div className="prizes__card">
            <div className="prizes__textImg">
              <h2 className="prizes__textCardContainer">
                <TextDefault
                  className="prizes__cardText"
                  text={`<strong>O dobro de 
carros 0km 
serão sorteados</strong> 
no mês de 
aniversário!`}
                />
              </h2>
              <div className="prizes__imgCarContainer">
                <ImgDefault className="prizes__img" src={"/images/prizes/car1.webp"} alt={"Prêmio"} />
              </div>
            </div>
            <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
              <ImgDefault className="prizes__img" src={"/images/prizes/car2.webp"} alt={"Prêmio"} />
            </div>
          </div>

          <div className="prizes__card">
            <div className="prizes__imgContainer">
              <ImgDefault className="prizes__img" src={"/images/promotionCard/62-vales-diarios-1.webp"} alt={"Prêmio"} />
            </div>
          </div>

          <div className="prizes__card">
            <div className="prizes__imgContainer">
              <ImgDefault
                className="prizes__img prizes__img--primary"
                src={"/images/promotionCard/62-vales-diarios-2.webp"}
                alt={"Prêmio"}
              />
            </div>
          </div>

          <div className="prizes__card prizes__card--mod">
            <h2 className="prizes__textCardContainer">
              <TextDefault
                className="prizes__cardText"
                text={`<strong>Compre os
produtos com este
selo na gôndola</strong> 
e aumente suas
chances de ganhar!`}
              />
            </h2>

            <div className="prizes__imgContainer prizes__imgContainer--mod">
              <ImgDefault
                className="prizes__img prizes__img--secondary"
                src={"/images/promotionCard/marcas-aceleradoras-condor.webp"}
                alt={"Marcas aceleradoras"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
