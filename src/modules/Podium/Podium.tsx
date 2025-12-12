"use client";
import "./Podium.scss";
import { FC } from "react";
import { useModal } from "@/provider/ModalProvider/ModalProvider";
import mokup from "public/mokup/mokupPodium.json";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";

const Podium: FC = () => {
  const { openModal } = useModal();

  const handleModal = (kit: any) => {
    openModal({
      headerName: kit.modal.titulo,
      children: (
        <div className="podiumModalContent">
          <ImgDefault className="podiumModalContent__image" src={kit.modal.imagemModal} alt={kit.modal.titulo} />
          <div className="podiumModalContent__description">
            {kit.modal.itens.map((item: string, i: number) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      )
    });
  };

  return (
    <section id="podium" className="podium">
      <div className="podium__container">
        <div className="podium__grid">
          {/* selo */}
          <div className="podium__imgContainer">
            <ImgDefault
              className="podium__selo"
              src={"/images/natal-condor-strela-1.webp"}
              alt={"Imagem ilustrando o prêmio, Cesta de natal."}
              quality={75}
            />
          </div>

          {/* carrossel */}
          <div className="podium__carrossel_container">
            <CarouselDefault
              options={{
                align: "start",
                slidesToScroll: 1,
                dragFree: false
              }}
            >
              {mokup.kits.map((kit, index) => (
                <CarouselSlide key={index}>
                  <div className="podium__cardCarousel">
                    <div className="podium__cardCarrosselContainer">
                      <div className="podium__cardCarrosselContainer_image">
                        <ImgDefault src={kit.imagemCard} alt={kit.nome} className="podium__imageCardCarousel" quality={75} />
                      </div>
                      <h3 className="podium__cardCarousel_title">{kit.nome}</h3>
                      <ButtonLink
                        className="podium__buttonCard"
                        onClick={() => handleModal(kit)}
                        linkProps={{
                          title: kit.buttonLabel,
                          name: kit.buttonLabel
                        }}
                        variant="primary"
                      />
                    </div>
                  </div>
                </CarouselSlide>
              ))}
            </CarouselDefault>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {/* {modalData && (
        <ModalCenter headerName={modalData.modal.titulo} active={modalActive} onClose={handleCloseModal}>
          <div className="podiumModalContent">
            <ImgDefault className="podiumModalContent__image" src={modalData.modal.imagemModal} alt={modalData.modal.titulo} />

            <div className="podiumModalContent__description">
              {modalData.modal.itens.map((item: string, i: number) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        </ModalCenter>
      )} */}
    </section>
  );
};

export default Podium;
