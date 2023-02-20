import { useEffect } from "react";
import { addRemoveClassBody } from '../../utils'
import { dataUp, dataDown, imgSecHeading } from '../../data/data-containers/data-Home.js';
import dynamic from "next/dynamic";

import FooterHome from '../../layouts/Footer/FooterHome'
import SectionHeading from '../../components/SectionHeading'
import SectionDemo from './SectionDemo'

const Preloader = dynamic(
  () => {
    return import('../../components/Preloader');
  },
  { ssr: false }
);


const HomeContainer = () => {

  useEffect(() => {
    addRemoveClassBody('light-version')
  }, [])

  return (
    <>
      <Preloader Title="Home" />
      <section className="demo section-padding-100-0" id="demo">
        <div className="container">
          <SectionHeading
            title='Choose a demo'
            textDown='Our ICO Template Will Be A Perfect Platform For Presenting Your Ico Launch. This Landing Page Comes In Great And Clean Design'
          />
          <SectionDemo dataUp={dataUp} dataDown={dataDown} />
        </div>
      </section>
      <div class="clearfix"></div>
      <FooterHome />
    </>
  );
}

export default HomeContainer;

