import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const CookiesPolocy = () => {
  return (
    <>
      <Breadcrumb PageName={"About us"} Previous={"home"} Current={"about"} />
      <div class="container my-4">
        <div className="pb-5">
          <i className="text-white-50">
            "Empowering Web3 By Building Better Blockchain Communities One
            Neighborhood At A Time."
          </i>
        </div>
        <ReightImage content={Aboutdata.Content1} img={Aboutdata.Content1Img} />
        <LeftImage content={Aboutdata.Content2} img={Aboutdata.Content2Img} />

        <ReightImage content={Aboutdata.Content3} img={Aboutdata.Content3Img} />
      </div>
    </>
  );
};

export default CookiesPolocy;
