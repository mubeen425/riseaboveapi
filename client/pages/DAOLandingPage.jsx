
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";
import Sidebar from "@components/Sidebar/Sidebar";
import styles from './DAOLandingPage.module.css'
import ProposalCard from "@components/ProposalCard/ProposalCard";

const DAOLandingPage = () => {
  return (
    <div className={`${styles.main}`}>
      <Sidebar />
      <div className={`${styles.details}`}>
        <img className={`${styles.img}`} src="https://riseabove.tech/static/media/Dao.00212c78e2490f58ed1a.jpeg" alt="landing" />

        <p>Rise Artist Collective DAO is one of the world’s largest DAOs, focused on building a decentralized tokenized economy.</p>

        <h3>Proposals</h3>

        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>

      </div>
    </div>
  );
};

export default DAOLandingPage;