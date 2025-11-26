"use client";
import "./ImgDefault.scss";
import { FC, useState } from "react";
import Image, { ImageProps } from "next/image";

type ImgDefaultProps = ImageProps & {
  skeleton?: boolean;
  className?: string;
};

const ImgDefault: FC<ImgDefaultProps> = ({ className, skeleton = true, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`imgDefault ${className}`}>
      {skeleton && (
        <div className={`imgDefault__skeleton ${isLoaded && "imgDefault__skeleton--imgLoaded"} ${className}`} {...props} />
      )}
      <Image
        priority
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        onLoad={() => setIsLoaded(true)}
        className={`imgDefault__img ${isLoaded && "imgDefault__img--imgLoaded"} ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImgDefault;
