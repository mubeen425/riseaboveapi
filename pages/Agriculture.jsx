
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Agriculture = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the Agriculture Hub on the Rise Eco Platform!"} Previous={"home"} Current={"about"} />
      <div class="container my-4">

        <ReightImage content={"Welcome to Rise Eco Platform, where we are dedicated to conservation, AI-based research, reducing our carbon footprint, and building sustainable communities through 3D printing and automated construction projects."} img={"https://riseabove.tech/static/media/agriculturea.27583f139eddf3a54933.png"} />
        
        <LeftImage content={"As a web3 solution provider, we are at the forefront of using cutting-edge technology to address some of the biggest challenges facing our planet. Our focus on sustainable agriculture and eco-friendly practices helps us to not only protect the environment, but also to build a better future for all of us."} img={"https://riseabove.tech/static/media/agricultured.caa7c297054b3fdea5e5.png"} />

        <ReightImage content={"One of the ways we are working to make a positive impact is through our use of AI-powered SCAD programs. These programs allow us to design and plan construction projects with precision and efficiency, minimizing waste and maximizing resource use. We are also utilizing 3D printing technology to create communities that are not only sustainable, but also highly customizable and adaptable to the needs of their residents."} img={"https://riseabove.tech/static/media/agriculture2.7ec72385f23f099813f6.jpeg"} />
        
        <LeftImage content={"In addition to our focus on eco-friendly construction, we are also committed to reducing our carbon footprint and promoting conservation. We are constantly researching and developing new ways to minimize our impact on the environment, whether through renewable energy sources or innovative waste management practices."} img={"https://riseabove.tech/static/media/agriculturet.28b89e59fc15fc45b426.png"} />

        <ReightImage content={"At Rise Eco Platform, we believe that by harnessing the power of technology and working together, we can create a more sustainable and equitable future for all."} img={"https://riseabove.tech/static/media/agriculture3.bfe94b82cd758137c75d.jpeg"} />
        
        <LeftImage content={"We invite you to join us in this important mission and be a part of building a better tomorrow."} img={"https://riseabove.tech/static/media/agriculturee.97b4ba71a5967e085e4e.png"} />
      </div>
    </>
  );
};

export default Agriculture;
