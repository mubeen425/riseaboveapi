
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Conservation = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome the Conservation Hub on the Rise Eco Platform!"} Previous={"home"} Current={"Charity"} />
      <div class="container my-4">

        <ReightImage content={"Rise Eco Platform is a valuable resource for individuals and organizations looking to take action to protect the environment and improve their own well-being."} img={"https://riseabove.tech/static/media/conservartion.01f657eb7619696f4faa.png"} />

        <LeftImage content={"It can be difficult to know how to start making a difference, especially if you feel like you are just one person in a sea of environmental challenges."} img={"https://riseabove.tech/static/media/conservartion2.4c56cb096bf86950b330.png"} />

        <ReightImage content={"By joining a community of like-minded individuals and organizations, you can connect with others who share your values and goals, and work together to create positive change."} img={"https://riseabove.tech/static/media/conservartion3.217f6d996abd9c1eae52.png"} />
        
        <LeftImage content={"Some specific ways you might be able to get involved with the Rise Eco Platform and take action to protect the environment could include: Participating in campaigns and initiatives to raise awareness about environmental issues and advocate for change."} img={"https://riseabove.tech/static/media/conservartion4.0434bf02e08213950924.png"} />

        <ReightImage content={"Connecting with organizations that are working on conservation and sustainability projects and volunteering your time or resources to support their efforts."} img={"https://riseabove.tech/static/media/conservartion5.c43c186d38155bde6747.png"} />
        
        <LeftImage content={"Learning about and implementing sustainable practices in your personal and professional life, such as reducing your carbon footprint, conserving water, and reducing waste."} img={"https://riseabove.tech/static/media/conservartion6.bcb9b0e37b95c7cf562d.png"} />

        <ReightImage content={"By taking these kinds of actions, you can make a meaningful contribution to the protection of the planet and the well-being of its inhabitants."} img={"https://riseabove.tech/static/media/conservartion6.bcb9b0e37b95c7cf562d.png"} />
        
        <LeftImage content={"Donating to environmental organizations or supporting environmentally-friendly products and businesses"} img={"https://riseabove.tech/static/media/conservartion7.97b4ba71a5967e085e4e.png"} />

        <ReightImage content={"By taking these kinds of actions, you can make a meaningful contribution to the protection of the planet and the well-being of its inhabitants."} img={"https://riseabove.tech/static/media/conservartion8.2f204b4ba835ccfe26e7.png"} />
      </div>
    </>
  )
};

export default Conservation;
