"use client";

import { FC } from "react";
import TextDefault from "@/components/TextDefault/TextDefault";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import mokup from "public/mokup/mokupPrizes.json"
import { useShrinkOnScroll } from "@/hooks/useShrinkOnScroll";
import "./Prizes.scss";

const Prizes: FC = () => {
  useShrinkOnScroll(".prizes__card");
  return (
    <section id="prizes" className="prizes">
      <video
        className="prizes__bgvideo"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={mokup.backgroundVideo} type="video/mp4" />
      </video>

      <div className="prizes__container">
        <div className="prizes__textContainer">
          <div className="prizes__stickyContainer">
            <TextDefault
              className="prizes__text"
              text={mokup.title}
            />
            <ButtonLink
              className="prizes__button"
              linkProps={{
                url: mokup.button.url,
                title: mokup.button.title,
                target: mokup.button.target,
                name: mokup.button.name
              }}
            />
          </div>
        </div>

        <div className="prizes__cardContainer">
          {mokup.prizes.map((item, i) => {
            return (
              <div
                key={i}
                className={`prizes__card `}>
                <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
                  <ImgDefault
                    className="prizes__img"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Prizes;
