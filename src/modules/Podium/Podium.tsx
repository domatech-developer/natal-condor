import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import "./Podium.scss";

const Podium: FC = () => {
  return (
    <section id="podium" className="podium">
      <div className="podium__container">
        <div className="podium__imgContainer">
            <ImgDefault className="podium__imgProducts" 
            src={"/images/produtos-natal.png"} 
            alt={"Imagem ilustrativa de produtos de natal"} 
            quality={100}    
             />
            <ImgDefault className="podium__imgPodium" 
            src={"/assets/podium-verde.webp"} 
            alt={"Imagem de um podium ilustrativo"} 
            quality={75}    
             />
        </div>
      </div>
    </section>
  );
};

export default Podium;
