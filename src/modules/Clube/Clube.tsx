import TextDefault from "@/components/TextDefault/TextDefault";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import "./Clube.scss";

const Clube: FC = () => {
  return (
    <section id="clube" className="clube">
      <div className="clube__container">
        <div className="clube__infoContainer">
          <div className="clube__textContainer">
            <span className="clube__highlight"><TextDefault
                text={`Clube Condor`}
              /></span>
            <h2 className="clube__text">
              <TextDefault
                text={`Descontos exclusivos <br /> e dinheiro de volta!`}
              />
            </h2>
            <div className="clube__textSmall">
              <TextDefault
                text={`<p>Cadastre-se gratuitamente e aproveite ofertas personalizadas, cashback em suas compras e sorteios especiais.</p>`}
              />
            </div>
          </div>

        </div>

        <div className="clube__imgContainer">
          <ImgDefault className="clube__img" src={"/images/condor_natalino.png"} alt={"Imagem de figurinhas"} />
        </div>
      </div>
    </section>
  );
};

export default Clube;
