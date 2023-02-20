import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        Services,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo4/data-HomeDemo4.js';

import PlatformIco from '../../data/data-containers/HomeDemo4/data-PlatformIco.json';

import SecPricesInfo from '../../data/data-containers/HomeDemo4/data-SecPricesInfo.json';
import FeaturesOtherTop from '../../data/data-containers/HomeDemo4/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/HomeDemo4/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo4/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo4/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo4/data-FaqInfo.json';

import {
        HomeDemo4Wwhitepaper,
        HomeDemo4SectionIcon11,
        HomeDemo4About3
        } from '../../utils/allImgs'

// import './style/HomeDemo4.scss'

import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import("../../layouts/Header");
  },
  { ssr: false }
);

// import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import AboutOther from '../../components/AboutOther'
import SecPrices from '../../components/SecPrices'

// import SecAbout from '../../components/SecAbout'
// import FuelFeatures from '../../components/FuelFeatures'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
// import SmartContract from '../../components/SmartContract'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import OurServices from './OurServices'
import OurPlatform from './OurPlatform'
// import TokenFeatures from "./TokenFeatures"



const HomeDemo4Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        
       <SecHeroSection> </SecHeroSection>
    
        <div className="clearfix" />
       
        <OurServices data={Services} />
        {/* <OurPlatform data={PlatformIco} /> */}
        {/* <SpreadMap
            Wwhitepaper={HomeDemo4Wwhitepaper}
            SectionIcon11={HomeDemo4SectionIcon11}
        />
        <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        {/* <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        /> */}
        {/* <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <Subscribe /> */}
        {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
       
      </div>
    );
};

export default HomeDemo4Container