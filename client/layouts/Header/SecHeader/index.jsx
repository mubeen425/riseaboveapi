import Link from "next/link";

const SecHeader = ({ Logo, dropdownItem, MenuInfo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white   " id="banner">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" style={{ paddingLeft: "10px" }} />
          <span class="headtext"> Rise Eco Platform</span>
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Governance
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/about"}>
                  <a className="dropdown-item" href="about">
                    About us
                  </a>
                </Link>
                <Link href={"/PrivacyPolicy"}>
                  <a className="dropdown-item" href="PrivacyPolicy">
                    Privacy Policy
                  </a>
                </Link>
                <Link href={"/TermsandConditions"}>
                  <a className="dropdown-item" href="TermsandConditions">
                    Terms and Condition
                  </a>
                </Link>

                <Link href={"/WhitePaper"}>
                  <a className="dropdown-item" href="WhitePaper">
                    White Paper
                  </a>
                </Link>
                <Link href={"/Tokenomics"}>
                  <a className="dropdown-item" href="Tokenomics">
                    Tokenomics
                  </a>
                </Link>
                <Link href={"/Roadmap"}>
                  <a className="dropdown-item">Roadmap</a>
                </Link>

                <Link href={" /OperatingAgreement"}>
                  <a className="dropdown-item" href="OperatingAgreement">
                    Operating Agreement
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Developer
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/PlatformEngineers"}>
                  <a className="dropdown-item" href="PlatformEngineers">
                    Platform Engineers
                  </a>
                </Link>
                <Link href={"/GameDevelopers"}>
                  <a className="dropdown-item" href="GameDevelopers">
                    Game Developers
                  </a>
                </Link>
                <Link href={"/Artists"}>
                  <a className="dropdown-item" href="Artists">
                    Artists
                  </a>
                </Link>
                <Link href={"/ProjectArchitects"}>
                  <a className="dropdown-item" href="ProjectArchitects">
                    Project Architects
                  </a>
                </Link>
                <Link href={"/EventCoordinator"}>
                  <a className="dropdown-item" href="EventCoordinator">
                    Event Coordinator
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/DAOLandingPage"}>
                  <a className="dropdown-item" href="DAOLandingPage">
                    DAO Landing Page
                  </a>
                </Link>

                <Link href={"/CurrentProjects"}>
                  <a className="dropdown-item" href="CurrentProjects">
                    Current Projects
                  </a>
                </Link>
                <Link href={"/UpcomingProjects"}>
                  <a className="dropdown-item" href="UpcomingProjects">
                    Upcoming Projects
                  </a>
                </Link>
                <Link href={"/PastProjects"}>
                  <a className="dropdown-item" href="PastProjects">
                    Past Projects
                  </a>
                </Link>
                <Link href={"/ParticipationEvents"}>
                  <a className="dropdown-item" href="ParticipationEvents">
                    Participation Events
                  </a>
                </Link>
                <Link href={"/Proposals"}>
                  <a className="dropdown-item" href="Proposals">
                    Proposals
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marketplace
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/Stake"}>
                  <a className="dropdown-item" href="Stake">
                    Stake
                  </a>
                </Link>
                <Link href={"/Minting"}>
                  <a className="dropdown-item" href="Minting">
                    Minting
                  </a>
                </Link>
                <Link href={"/P2PTrade"}>
                  <a className="dropdown-item" href="P2PTrade">
                    P2P Trade
                  </a>
                </Link>{" "}
                <Link href={"/Launchpad"}>
                  <a className="dropdown-item" href="Launchpad">
                    Launch pad
                  </a>
                </Link>{" "}
                <Link href={"/Airdrop"}>
                  <a className="dropdown-item" href="Airdrop">
                    Airdrop
                  </a>
                </Link>{" "}
                <Link href={"/Shop"}>
                  <a className="dropdown-item" href="Shop">
                    Shop
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ecosystem
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/Forums"}>
                  <a className="dropdown-item" href="Forums">
                    Forum's
                  </a>
                </Link>
                <Link href={"/Gaming"}>
                  <a className="dropdown-item" href="Gaming">
                    Gaming
                  </a>
                </Link>
                <Link href={"/Social"}>
                  <a className="dropdown-item" href="Social">
                    Social
                  </a>
                </Link>
                <Link href={"/SocialLinks"}>
                  <a className="dropdown-item" href="SocialLinks">
                    Social Links
                  </a>
                </Link>
                <Link href={"/Charity"}>
                  <a className="dropdown-item" href="Charity">
                    Charity
                  </a>
                </Link>
                <Link href={"/Conservation"}>
                  <a className="dropdown-item" href="Conservation">
                    Conservation
                  </a>
                </Link>
                <Link href={"/Agriculture"}>
                  <a className="dropdown-item" href="Agriculture">
                    Agriculture
                  </a>
                </Link>
                <Link href={"/Explore"}>
                  <a className="dropdown-item" href="Explore">
                    Explore
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FAQ
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/about"}>
                  <a className="dropdown-item" href="about">
                    About us
                  </a>
                </Link>
                <Link href={"/PrivacyPolicy"}>
                  <a className="dropdown-item" href="PrivacyPolicy">
                    Privacy Policy
                  </a>
                </Link>
                <Link href={"/TermsandConditions"}>
                  <a className="dropdown-item" href="TermsandConditions">
                    Terms and Condition
                  </a>
                </Link>

                <Link href={"/WhitePaper"}>
                  <a className="dropdown-item" href="WhitePaper">
                    White Paper
                  </a>
                </Link>
                <Link href={"/Tokenomics"}>
                  <a className="dropdown-item" href="Tokenomics">
                    Tokenomics
                  </a>
                </Link>
                <Link href={"/Roadmap"}>
                  <a className="dropdown-item">Roadmap</a>
                </Link>

                <Link href={" /OperatingAgreement"}>
                  <a className="dropdown-item" href="OperatingAgreement">
                    Operating Agreement
                  </a>
                </Link>
              </div>
            </li>
            <li className="lh-55px mx-1 bg-warning rounded">
              <Link href={"/Contact"}>
                <a className="dropdown-item" href="Contact">
                  Contact
                </a>
              </Link>
            </li>
            <li className="lh-55px text-secondary-emphasis bg-primary ml-1 rounded">
              <Link href={"/Login"}>
                <a className="dropdown-item" href="Contact">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
