import { FC } from "react";

import TextDefault from "@/components/TextDefault/TextDefault";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";
import mokup from "public/mokup/mokupTips.json";

import "./Tips.scss";

const Tips: FC = () => {
  return (
    <section id="tips" className="tips">
      <div className="tips__container">
        <div className="tips__infoContainer">
          <div className="tips__textContainer">
            <h2 className="tips__text">
              <TextDefault
                text={mokup.title}
              />
            </h2>
            <div className="tips__textSmall">
              <TextDefault
                text={mokup.description}
              />
            </div>
          </div>
        </div>

        <div className="tips__ContainerCarrossel">
          <CarouselDefault options={{
              align: "start",
              slidesToScroll: 1,
              dragFree: false,
              loop: true
            }}>
            {mokup.carousel.map((card, index) => (
              <CarouselSlide key={index}>
                <div className="tips__cardCarousel">
                  <div className="tips__cardCarousel__container">
                    <span className="tips__highlightCard">{card.highlight}</span>
                    <ImgDefault src={card.image} alt={card.title} quality={75} className="tips__ContainerCardImage" />
                    <div className="tips__contentCard">
                      <h3 className="tips__cardCarousel_title">{card.title}</h3>
                      <div className="tips__cardCarousel_infos">
                        <p>{card.time}</p>
                        <p>{card.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselSlide>
            ))}
          </CarouselDefault>
        </div>
      </div>
    </section>
  );
};

export default Tips;
