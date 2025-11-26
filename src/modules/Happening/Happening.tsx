import { FC } from "react";
import VerticalStackCarousel from "@/components/VerticalStackCarousel/VerticalStackCarousel";
import CardDefault from "@/components/Card/CardDefault";
import mokup from "public/mokup/mokupAcontecendo.json";
import TextDefault from "@/components/TextDefault/TextDefault";
import './Happening.scss';

const isHappening: FC = () => {
  return (
    <div id="happening" className="happening">
      <h2 className="happening__title">
          <TextDefault className="happening__title" text={mokup.heading} />
        </h2>
      <VerticalStackCarousel>
        {mokup.cards.map((item, index) => (
          <CardDefault key={index} {...item} />
        ))}
      </VerticalStackCarousel>
    </div>
  );
};

export default isHappening;