
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Artists = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the Artist's Hub on the Rise Eco Platform!"} Previous={"home"} Current={"Artists"} />
      <div class="container my-4">
        <ReightImage content={"We are a community of talented and visionary artists from all walks of life and every medium, including music, paint, mixed media, digital art, game design, video, ink, craft, sculpture, interpretive art, programming, computer graphics, modern and classical art, and beyond."} img={"https://riseabove.tech/static/media/artistmain.947a7616fef5008c4f84.jpg"} />

        <LeftImage content={"Our mission is to showcase the works, stories, and passions of our community, and to use artistic expression to reach new heights of what is possible. We believe that by working together, we can rise above and create a brighter, more vibrant world through the power of art."} img={"https://riseabove.tech/static/media/Artist2.a9418390bb0bf6c63af5.png"} />

        <ReightImage content={'We invite you to join us on this journey and share your talents and passions with the world. Together, we shall rise above and create a brighter future for all.'} img={'https://riseabove.tech/static/media/Artist1.4ad1e0b897397d2e9bc9.png'} />

        <LeftImage content={"Our mission is to showcase the works, stories, and passions of our community, and to use artistic expression to reach new heights of what is possible. We believe that by working together, we can rise above and create a brighter, more vibrant world through the power of art."} img={"https://riseabove.tech/static/media/Artist3.6552a5cb063ade228530.png"} />
      </div>
    </>
  );
};

export default Artists;