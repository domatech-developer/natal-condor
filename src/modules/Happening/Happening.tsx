import "./Happening.scss";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";

const isHappening: FC = () => {
  return (
    <section id="happening" className="happening">
      <div className="happening__imgContainer">
        <ImgDefault
          className="clube__img"
          mobileSrc="/images/em-breve-condor-mobile.webp"
          src="/images/em-breve-condor.webp"
          alt="imagem ilustrundo uma nova unidade"
          quality={75}
        />
        <p className="happening__descriptionImage">
          <strong>Em breve,</strong>
          <br /> novas unidades
        </p>
      </div>
      {/* <h2 className="happening__title">
        <TextDefault className="happening__title" text={mokup.heading} />
      </h2>
      <VerticalStackCarousel>
        {mokup.cards.map((item, index) => (
          <CardDefault key={index} {...item} />
        ))}
      </VerticalStackCarousel> */}
    </section>
  );
};

export default isHappening;
