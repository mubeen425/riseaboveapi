
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Gaming = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the Game Hub on the Rise Eco Platform!"} Previous={"home"} Current={"Gaming"} />
      <div class="container my-4">  
        <ReightImage content={"We are a community of game developers, designers, and players who are passionate about creating and experiencing all kinds of games. Whether you're into PC, console, mobile, board, strategy, action, horror, science fiction, RPG, puzzle, PVP, PVE, open world, creative, augmented and virtual reality, or genres yet to be discovered, we have something for everyone."} img={"https://riseabove.tech/static/media/game1.6c2b5e575fe86346b7c1.png"} />
        <LeftImage content={"Our mission is to provide a space where game creators and players can come together to share ideas, collaborate, and create games that captivate hearts and minds. We believe that through the power of play, we can rise above and create a brighter, more vibrant world."} img={"https://riseabove.tech/static/media/game4.039680e1b5c2da471d23.png"} />

        <ReightImage content={"So come join the fun and let's create some amazing games together! We can't wait to see what we can accomplish as a community."} img={"https://riseabove.tech/static/media/game3.ed1bc151482f9f48fcd5.png"} />
        <LeftImage content={"Console, Platform, & Mobile Game Designers, Check Out Participation Events To Get Involved, & Start Building With Your Community Today!"} img={"https://riseabove.tech/static/media/game4.039680e1b5c2da471d23.png"} />
      </div>
    </>
  );
};

export default Gaming;
