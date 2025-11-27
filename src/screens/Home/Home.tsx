import { FC } from "react";
import MainDefault from "@/components/Main/Main";
import StructureData from "@/components/SEO/StructureData/StructureData";
import Happening from "@/modules/Happening/Happening";
import Clube from "@/modules/Clube/Clube" 
import Prizes from "@/modules/Prizes/Prizes";
import "./Home.scss";
import Podium from "@/modules/Podium/Podium";

interface HomeProps {
  data?: any;
  page?: string[];
}
const Home: FC<HomeProps> = async ({ data, page }) => {
  const flocoNeves = Array.from({ length: 3 });

  return (
    <MainDefault id="home">
      <StructureData data={data?.acf?.metaDados} />
      <Prizes />
      <Podium />
      
      <div className="bg_natal">
        {flocoNeves.map((_, i) => (
          <span
            key={i}
            className={`bg_flocoNeve bg-item--flocoNeve${i}`}
          ></span>
        ))}

        <Happening />
        <Clube />
      </div>

    </MainDefault>
  );
};

export default Home;