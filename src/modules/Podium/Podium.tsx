import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import "./Podium.scss";

const Podium: FC = () => {
  return (
    <section id="podium" className="podium">
      <div className="podium__container">
        <div className="podium__imgContainer">

          <ImgDefault className="podium__imgProducts" 
            src={"/images/produtos-natal.webp"} 
            alt={"Imagem ilustrativa de produtos de natal"} 
            quality={100}
            aria-hidden="true"
          />
          <ImgDefault className="podium__imgPodium" 
            src={"/assets/podium-verde.webp"} 
            alt={"Imagem de um podium ilustrativo"} 
            quality={100}
            aria-hidden="true"
            mobileSrc="/assets/podium-verde-2-mobile.webp"
          />
          <ImgDefault className="podium__imgSelo" 
            src={"/images/natal-condor-strela-1.webp"} 
            alt={"Imagem ilustrando o prêmio, Cesta de natal em 6 vezes sem juros com frete grátis acima de 500 reais em compras."} 
            quality={100}
            aria-label="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Podium;
