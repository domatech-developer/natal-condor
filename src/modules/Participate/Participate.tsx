import { FC } from "react";
import mokup from "public/mokup/mokupParticipate.json";
import TextDefault from "@/components/TextDefault/TextDefault";
import './Participate.scss';

const Participate: FC = () => {
  return (
    <section id="participate" className="participate">
      <div className="participate__container">
        <div className="participate__titleContainer">
          <h2 className="participate__title">
            <TextDefault className="participate__title" text={mokup.title} />
          </h2>
          <div className="participate__description">
            <TextDefault
              text={mokup.description}
            />
          </div>
        </div>
        
        <div className="participate__cardContainer">
          {mokup.steps.map((item, index) => (
            <div className="participate__cardFixed" key={index}>
              <TextDefault className="participate__card_description" data-count={index + 1} text={item.text} />
            </div>
          ))}
        </div>
      </div>        
    </section>
  );
};

export default Participate;