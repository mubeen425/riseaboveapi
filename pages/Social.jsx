
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <>
      <Breadcrumb PageName={"Welcome to the Social Hub on the Rise Eco Platform!"} Previous={"home"} Current={"Social"} />
      <div class="container my-4">
        
        <ReightImage content={"Social Hub, on the Rise Eco Platform, is a space that allows registered users to share their ideas and licensed work on various social media platforms, including Github, Telegram, Discord, Instagram, and Twitter. It also appears that the platform has security measures in place to block external non-member posts and shares, and that it is possible for users to apply to become media brand reps or social media organizers."} img={"https://riseabove.tech/static/media/Social.e01b0aee365d2a5651e6.png"} />
        <LeftImage content={"By participating in the Rise Eco Platform community and sharing your ideas and work on social media, you can connect with others who are interested in environmental conservation and sustainability. This can be a great way to learn from and collaborate with others, and to raise awareness about important issues and initiatives."} img={"https://riseabove.tech/static/media/socialhub1.78a91192fcd91583225a.png"} />

        <ReightImage content={"If you are interested in becoming a media brand rep or social media organizer, you can visit the Integration Proposals Page on the main Rise Eco Platform domain to learn more about the process and requirements. This may be a good way to get more involved in the community and contribute to its efforts to create positive change for the environment."} img={"https://riseabove.tech/static/media/socialhub2.a2b822121b016b1a89ee.png"} />

        <LeftImage content={"Rise Artist Collective DAO https://discord.gg/W29rwZEA Twitter https://mobile.twitter.com/RISE_ABOVE_TECH"} img={"https://riseabove.tech/static/media/socialhub3.ef0935507950b717b9b6.png"} />
      </div>
    </>
  );
};

export default Social;
