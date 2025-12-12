import "./Clube.scss";
import { FC } from "react";
import TextDefault from "@/components/TextDefault/TextDefault";
import ImgDefault from "@/components/ImgDefault/ImgDefault";
import mokup from "public/mokup/mokupClube.json";
import LinkDefault from "@/components/LinkDefault/LinkDefault";

const Clube: FC = () => {
  return (
    <section id="clube" className="clube">
      <div className="clube__container">
        <div className="clube__infoContainer">
          <div className="clube__textContainer">
            <span className="clube__highlight">
              <TextDefault text={mokup.highlight} />
            </span>
            <h2 className="clube__text">
              <TextDefault text={mokup.title} />
            </h2>
            <div className="clube__textSmall">
              <TextDefault text={mokup.description} />
            </div>
          </div>
        </div>

        <div className="clube__imgContainer">
          <ImgDefault className="clube__img" src={mokup.image.src} alt={mokup.image.alt} quality={75} />
          <div className="clube__qrCodeContainer">
            <ImgDefault
              className="clube__qrCode"
              src="/images/qr-code.webp"
              alt="Escaneie o QR Code e baixe o aplicativo."
              quality={75}
            />
          </div>
          <div className="clube__downloadContainer">
            {mokup.qrCode.repeater.map((item, index) => (
              <LinkDefault
                key={index + "-store"}
                className="clube__qrCodeStoreLink"
                href={item.link.url}
                title={item.link.title}
                target={item.link.target}
              >
                <ImgDefault className="clube__qrCodeStoreImg" src={item.img.src} alt={item.img.alt} />
              </LinkDefault>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clube;
