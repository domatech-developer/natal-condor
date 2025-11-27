import TextDefault from "@/components/TextDefault/TextDefault";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupClube.json";
import "./Clube.scss";

const Clube: FC = () => {
  return (
    <section id="clube" className="clube">
      <div className="clube__container">
        <div className="clube__infoContainer">
          <div className="clube__textContainer">
            <span className="clube__highlight"><TextDefault
                text={mokup.highlight}
              /></span>
            <h2 className="clube__text">
              <TextDefault
                text={mokup.title}
              />
            </h2>
            <div className="clube__textSmall">
              <TextDefault
                text={mokup.description}
              />
            </div>
          </div>

        </div>

        <div className="clube__imgContainer">
          <ImgDefault className="clube__img" src={mokup.image.src} alt={mokup.image.alt} />
        </div>
      </div>
    </section>
  );
};

export default Clube;
