import { FC } from "react";
import MainDefault from "@/components/Main/Main";
import StructureData from "@/components/SEO/StructureData/StructureData";

import Prizes from "@/modules/Prizes/Prizes";
import Participate from "@/modules/Participate/Participate";
import Podium from "@/modules/Podium/Podium";
import Happening from "@/modules/Happening/Happening";
import Clube from "@/modules/Clube/Clube" 
import Tips from "@/modules/Tips/Tips" 
import Banner from "@/modules/Banner/Banner";

import "./Home.scss";
import Events from "@/modules/Events/Events";
import Offers from "@/modules/Offers/Offers";

interface HomeProps {
  data?: any;
  page?: string[];
}
const Home: FC<HomeProps> = async ({ data, page }) => {
  const flocoNeves = Array.from({ length: 3 });

  return (
    <MainDefault id="home">
      <StructureData data={data?.acf?.metaDados} />
      <Banner />
      <Prizes />
      <Participate />
      <Podium />
      <Events />
      <Clube />
      <Offers />
      
      <div className="bg_natal">
        {flocoNeves.map((_, i) => (
          <span
            key={i}
            className={`bg_flocoNeve bg-item--flocoNeve${i}`}
          ></span>
        ))}
        
        <Happening />
        <Tips />
      </div>


    </MainDefault>
  );
};

export default Home;