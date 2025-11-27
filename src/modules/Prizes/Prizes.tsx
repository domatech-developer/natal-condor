import { FC } from "react";
import TextDefault from "@/components/TextDefault/TextDefault";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import "./Prizes.scss";

const Prizes: FC = () => {
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
        <source src="/assets/background-luz-natal-condor.mp4" type="video/mp4" />
      </video>

      <div className="prizes__container">
        <div className="prizes__textContainer">
          <div className="prizes__stickyContainer">
            <TextDefault
              className="prizes__text"
              text={`<span>Prêmios imperdíveis <br /> esperam você</span>. O próximo <br /> pode se o seu.`}
            />
            <ButtonLink
              className="prizes__button"
              linkProps={{
                url: "#",
                title: "Ver ofertas",
                target: "_blank",
                name: "Ver ofertas"
              }}
            />
          </div>
        </div>
        <div className="prizes__cardContainer">
          <div className="prizes__card">
            <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
              <ImgDefault className="prizes__img" src={"/images/condor_natalino.png"} alt={"Prêmio"} />
            </div>
          </div>

          <div className="prizes__card">
            <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
              <ImgDefault className="prizes__img" src={"/images/condor_natalino.png"} alt={"Prêmio"} />
            </div>
          </div>

          <div className="prizes__card">
            <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
              <ImgDefault className="prizes__img" src={"/images/condor_natalino.png"} alt={"Prêmio"} />
            </div>
          </div>

          <div className="prizes__card">
            <div className="prizes__imgCarContainer prizes__imgCarContainer--mod">
              <ImgDefault className="prizes__img" src={"/images/condor_natalino.png"} alt={"Prêmio"} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Prizes;
