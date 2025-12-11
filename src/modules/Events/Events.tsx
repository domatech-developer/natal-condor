import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupPodium.json";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";

import "./Events.scss";

const Events: FC = () => {

  return (
    <section id="events" className="events">
      <div className="events__container">
          <div className="events__titleContainer">
            <h2 className="events__title">titulo</h2>
            <div className="events__description">lorem ipsum</div>
          </div>
          <div className="events__carousel_container">
            <CarouselDefault options={{
                align: "start",
                slidesToScroll: 1,
                dragFree: false,
                loop: true
              }}>
              {mokup.kits.map((kit, index) => (
                <CarouselSlide key={index}>
                  <div className="events__cardCarousel" >
                    <div className="events__cardCarrosselContainer">
                      <div className="events__cardCarrosselContainer_image">
                        <ImgDefault src={kit.imagemCard} alt={kit.nome} className="events__imageCardCarousel" />
                      </div>
                      <h3 className="events__cardCarousel_title">{kit.nome}</h3>
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

export default Events;