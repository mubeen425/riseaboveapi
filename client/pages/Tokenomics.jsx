import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import ReightImage from "@components/styleStructure/ReightImage";
import React from "react";

const Tokenomics = () => {
  return (
    <div>
      <Breadcrumb
        PageName={"Tokenomics"}
        Previous={"home"}
        Current={"Tokenomics"}
      />
      <div class="container-fluid mx-auto px-0 px-md-10">
        <div class="d-flex justify-content-center p-3 ">
          <span class="text-xl font-weight-bold text-primary">
            TOKENOMICS - Rise Artist Collective Dao - Polygon / Matic Blockchain
          </span>
        </div>
        <div className="mb-8">
          {/* <ReightImage img={"/PrivacyPolicy1img.jpg"} /> */}
        </div>
        <div class="container my-5 ">
          <p>Token Information: Rise Above Currency</p>
          <p class="mb-3">Token name: Rise Artist Collective DAO</p>
          <p class="font-weight-bold text-primary h4">Token symbol: RACD</p>

          <p>
            {" "}
            Max Supply: 350,000,000 Token Type: (Matic) Polygon Blockchain
            (ERC-20) Matic Contract: Token distribution ratio and unlocking
            rules: All participants in the ecosystem have the right to earn Rise
            Artist Collective Dao coins on the basis of their contributions to
            the ecosystem(s). Founder Costs, Infrastructure, Advisors - 20% 10%
            - Core development team, early SEED presale investors. (vested over
            12 months) DAO Treasury - 40% (60% of treasury algorithmically
            governed by Rise Artist Collective Dao members, 20% locked for
            liquidity, 20% locked for platform expansion and ecosystem
            development.) Private Sale - 9% (daily vested over 12 months) Public
            Sale - 9% (daily vested over 6 months) Staking / Incentives - 8%
            Airdrop - 4%.
            <div className="pr-5">
              Website :
              <a href="https://riseabov.tech/" target="_blank">
                https://riseabov.tech/
              </a>
              <br />
              WhitePaper:
              <br />
              <a href="https://docs.rise~above.tech/Rise~Above" target="_blank">
                https://docs.rise~above.tech/Rise~Above
              </a>
            </div>
          </p>
          <p>
            Main Contract Address:
            <br />
            <span className="font-weight-bold text-primary h4">
              Rise Artist Collective Dao Startup Sale Rules:
            </span>
            <br />
            <ol type="1">
              <li>
                (1) Duration: 07:00 AM 30th December 2022 - 07:00 PM 31st,
                December, 2022 (PST) (Orders placed by qualified users within
                these 24 hours will be treated equally.)
              </li>
              <li>
                (2) Trading starts time: 7:00 AM January 2nd, 2023 (PST) Trading
                pairs: Rise Artist Collective Dao (RACD)/ Matic (Polygon)
                (Planned integrations: Solana, Eth,Xrp,Xlm,BTC,Algo,Cosmos,FTM
                Opera.) (See Road Map)
              </li>
              <li>(3) Price: 0.007 USDT (Secondary Marketing Price: 0.009)</li>
              <li>(4) Startup Supply : 11,500,000</li>
              <li>
                (5) Users purchase using RACD/ Polygon (Matic), BSCX/RACD,
                RACD/USCD. (6) Unlock rule: 100% unlock
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

