import "./Events.scss";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupEvents.json";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";
import TextDefault from "@/components/TextDefault/TextDefault";

const Events: FC = () => {
  return (
    <section id="events" className="events">
      <div className="events__container">
        <div className="events__snowContainer">
          <ImgDefault
            className="events__snow"
            src="/images/snow-flake-gold.webp"
            alt="Flocos de neve decorativos"
            quality={75}
            skeleton={false}
          />
        </div>
        <div className="events__snowContainer events__snowContainer--2">
          <ImgDefault
            className="events__snow"
            src="/images/snow-flake-gold.webp"
            alt="Flocos de neve decorativos"
            quality={75}
            skeleton={false}
          />
        </div>
        <div className="events__titleContainer">
          <h2 className="events__title">Eventos Natal Condor 2025</h2>
        </div>
        <div className="events__carousel_container">
          <CarouselDefault
            options={{
              align: "center",
              slidesToScroll: 1,
              dragFree: false,
              loop: true
            }}
          >
            {mokup.eventos.map((evento, index) => (
              <CarouselSlide key={index}>
                <div className="events__cardCarousel">
                  <div className="events__cardCarrosselContainer">
                    <div className="events__limitContent">
                      <div className="events__cardHeader">
                        <span className="events__cardCarousel_dates">{evento.datas}</span>
                        <span className="events__cardCarousel_time">{evento.hora}</span>
                      </div>

                      <div className="events__contentCard">
                        <TextDefault text={evento.titulo} />
                        {/* <p>{evento.local}</p> */}
                      </div>
                    </div>

                    <div className="events__cardCarrosselContainer_image">
                      <ImgDefault src={evento.image} alt={evento.alt} className="events__imageCardCarousel" quality={75} />
                    </div>

                    <div className="events__hoverCard">
                      <TextDefault className="hoverCard_description" text={evento.descricaoHover} />
                    </div>
                  </div>
                </div>
              </CarouselSlide>
            ))}
          </CarouselDefault>
        </div>
        <div className="events__starsContainer">
          <ImgDefault
            className="events__stars"
            src="/images/golden-stars.webp"
            alt="Estrelas douradas"
            quality={75}
            skeleton={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
