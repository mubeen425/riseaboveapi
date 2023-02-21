
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Forums = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the forums on the Rise Eco Platform!"} Previous={"home"} Current={"Forums"} />
      <div class="container my-4">
        <ReightImage content={"Welcome to the forums on the Rise Eco Platform! We are a community of artists, inventors, philosophers, and unique individuals who come together to share ideas, passions, projects, appreciation, and real interactions with peers, fans, and audiences alike."} img={"https://riseabove.tech/static/media/Forum.5a2a933aa4dd5f8ee190.png"} />
        <LeftImage content={"We encourage open and honest discussions and the sharing of ideas and perspectives, but we also ask that you please be mindful of what you share and how you say it. This is a hate-free platform, and we expect all members to treat each other with respect and kindness. Please note that you are responsible for what you post, so please think before you submit."} img={"https://riseabove.tech/static/media/forum1.c80d9035c823b1f34eaf.png"} />

        <ReightImage content={"Please note that you are responsible for what you post, so please think before you submit."} img={"https://riseabove.tech/static/media/Artist2.a9418390bb0bf6c63af5.png"} />

        <LeftImage content={"We are a division of Rise Above Limited Liability Co. and all rights are reserved. We hope you have a positive and productive experience on our platform."} img={"https://riseabove.tech/static/media/forum2.999c23d752f344b8b62f.png"} />
      </div>
    </>
  );
};

export default Forums;
