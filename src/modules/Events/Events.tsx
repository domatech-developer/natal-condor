import "./Events.scss";
import { FC } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupEvents.json";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";
import TextDefault from "@/components/TextDefault/TextDefault";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";

const Events: FC = () => {
  return (
    <section id="events" className="events">
      <div className="events__container">
        <div className="events__titleContainer">
          <h2 className="events__title">Eventos Natal Condor 2025</h2>
          <div className="events__description">Filtre por região</div>
        </div>
        <div className="events__carousel_container">
          <CarouselDefault
            options={{
              align: "start",
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
                        <p>{evento.descricao}</p>
                        <p>{evento.local}</p>
                      </div>
                    </div>

                    <div className="events__cardCarrosselContainer_image">
                      <ImgDefault src={evento.image} alt={evento.alt} className="events__imageCardCarousel" quality={75} />
                    </div>

                    <div className="events__hoverCard">
                      <TextDefault className="hoverCard_description" text={evento.descricaoHover} />
                      <ButtonLink
                        className="events__buttonCard"
                        linkProps={{
                          url: evento.button.url,
                          title: evento.button.title,
                          target: evento.button.target,
                          name: evento.button.name
                        }}
                      />
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

export default Events;
