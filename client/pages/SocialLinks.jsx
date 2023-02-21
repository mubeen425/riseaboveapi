
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the Social Hub on the Rise Eco Platform!"} Previous={"home"} Current={"SocialLinks"} />
      <div class="container my-4">
        
        <ReightImage content={"Discord Rise Above LLC : https://discord.gg/vaBymPD2"} img={"https://riseabove.tech/static/media/link1.8361c04994f48b4f2bdd.png"} />

        <LeftImage content={"Rise Artist Collective DAO https://discord.gg/W29rwZEA"} img={"https://riseabove.tech/static/media/link2.c3b2bae9e268d237e1d7.png"} />
        <br />
        <br />
        <h5 className="text-primary">Instagram</h5>

        {/* <div className="flex-col items-center w-full justify-between bg-red-500"> */}
          <img className='mx-3' src="https://riseabove.tech/static/media/social1.7f0481520e532a15e693.png" alt="" />
          <img className='mx-3' src="https://riseabove.tech/static/media/social2.0fda0e461d6160c606ba.png" alt="" />
          <img src="https://riseabove.tech/static/media/social3.cf452bc9e0553d5f37ad.png" alt="" />
        {/* </div> */}
        <ReightImage content={"Twitter: https://mobile.twitter.com/RISE_ABOVE_TECH"} img={"https://riseabove.tech/static/media/link3.fca8000a5b4a1f35a892.png"} />
        <LeftImage content={"Youtube https://youtube.com/@RiseAboveLimitedLiabiltyCo."} img={"https://riseabove.tech/static/media/link5.670e5301aae507d632d1.png"} />
      </div>
    </>
  );
};

export default SocialLinks;
