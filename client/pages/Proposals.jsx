
import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const Proposals = () => {
  return (
    <>
      <Breadcrumb PageName={"Rise Above Platform"} Previous={"home"} Current={"Proposals"} />
      <div class="container my-4 text">
        <ReightImage content={"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a(such as this one) can be removed. See the Rise Above Grants Program Process on how to submit a proposal."} img={"https://riseabove.tech/static/media/proposal.aca7c260aedc64b784fe.jpeg"} />

        <span className="text-primary">Project Name:</span> Name of your project (e.g. DuoSwap Module)
        <br />
        <br />
        <span className="text-primary">Team Name:</span> Legal name of your team (e.g. Duo)
        <br />
        <br />
        <span className="text-primary">Payment Address</span>SOL, Ethereum (USDT/USDC/DAI) or BNB/BSCX (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI)) Level: 1, 2 or 3 ⚠️ The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.
        <br />
        <br />
        <span className="text-primary">Project Overview: </span>If this application is in response to an RFP, please indicate this on the first line of this section.If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.
        <br />
        <br />
        <span className="text-primary">(1) Overview </span>Please provide the following:
        <br />
        If the name of your project is not descriptive, a tag line (one sentence summary).
        <br />
        A brief description of your project.
        <br />
        An indication of how your project relates to / integrates into Rise Above Platform / Rise Ecosystem(s) / Rise Above Community Hubs.
        <br />
        An indication of why your team is interested in creating this project.
        <br />
        <br />
        <span className="text-primary">Project Details </span>We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

        Mockups/designs of any UI components

        Data models / API specifications of the core functionality

        An overview of the technology stack to be used

        Documentation of core components, protocols, architecture, etc. to be deployed

        PoC/MVP or other relevant prior work or research on the topic

        What your project is not or will not provide or implement

        This is a place for you to manage expectations and to clarify any limitations that might not be obvious.

        <br />
        <br />
        <span className="text-primary">Ecosystem Fit </span>Help us locate your project in the Rise Above Platform / Rise Ecosystem(s) / Rise Above Community Hubs.

        Landscape and what problems it tries to solve by answering each of these questions:

        Where and how does your project fit into the ecosystem?

        Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

        What need(s) does your project meet?

        Are there any other projects similar to yours in the Substrate / Rise Above Platform / Rise Ecosystem(s) / Rise Above Community Hubs.

        If so, how is your project different?

        If not, are there similar projects in related ecosystems?


        <br />
        <br />
        <span className="text-primary">Team 👥 </span>
        <br />
        Team members
        <br />

        Name of team leader
        <br />

        Names of team members
        <br />

        Contact
        <br />

        Contact NameFull name of the contact person in your team
        <br />

        Contact EmailContact email (e.g. john@duo.com)
        <br />

        Website:
        <br />

        Legal Structure
        <br />

        Registered Address: Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)

        <br />
        Registered Legal Entity:Name of your registered legal entity, if available. (e.g. Duo Ltd.)
        <br />

        Team's experience
        <br />

        Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.
        <br />

        If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

        <br />
        <br />
        <span className="text-primary">Team Code Repos</span>
        <br />
        https://github.com/your_organisationhttps://github.com/your_organisation/project_1https://github.com/your_organisation/project_1

        <br />
        Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

        <br />
        https://github.com/team_member_1https://github.com/team_member_2
        Team LinkedIn Profiles (if available)

        <br />
        https://www.linkedin.com/person_1https://www.linkedin.com/person_2

        <br />
        <br />


        <span className="text-primary">Development Status 📖</span>
        <br />
        If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

        links to improvement proposals or RFPs (requests for proposal),

        academic publications relevant to the problem,

        links to your research diary, blog posts, articles, forum discussions or open GitHub issues,

        references to conversations you might have had related to this project with anyone from the Web3 Foundation,

        previous interface iterations, such as mock-ups and wireframes.

        <br />
        <br />

        <span className="text-primary">Development Roadmap 🔩</span>
        <br />
        This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories here. Since these will be part of the agreement, it helps to describe the functionality we should expect in as much detail as possible, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

        Below we provide an example roadmap. In the descriptions, it should be clear how your project is related to Rise Above Platform / Rise Ecosystem(s) / Rise Above Community Hubs.

        We recommend that teams structure their roadmap as 1 milestone ≈ 1 month.

        For each milestone, make sure to include a specification of your software. Treat it as a contract; the level of detail must be enough to later verify that the software meets the specification.

        include the amount of funding requested per milestone.

        include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.

        Provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.

        Commit to providing Dockerfiles for the delivery of your project. indicate milestone duration as well as number of full-time employees working on each milestone.

        Deliverables 0a-0d are mandatory for all milestones, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

        ⚡ If any of your deliverables is based on somebody else's work, make sure you work and publish under the terms of the license of the respective project and that you highlight this fact in your milestone documentation and in the source code if applicable!

        Teams that submit others' work without attributing it will be immediately terminated.

        <br />
        <br />

        <span className="text-primary">Total Estimated Duration: </span>
        <br />
        Duration of the whole project (e.g. 2 months) Full-Time Equivalent (FTE): Average number of full-time employees working on the project throughout its duration (see Wikipedia, e.g. 2 FTE)

        <br />
        <br />

        <span className="text-primary">Total Costs: </span>
        <br />
        Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the level of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in REVD, the amount will be calculated according to the exchange rate at the time of payment.

        <br />
        Milestone 1 Example — Implement Substrate Modules

        <br />
        Estimated duration: 1 month

        <br />
        FTE: 2

        <br />
        Costs: 8,000 USD

        <br />
        Number Deliverable Specification

        <br />
        0a. License Apache 2.0 / GPLv3 / MIT / Unlicense

        <br />
        0b.


        <br />
        <br />

        <span className="text-primary">Documentation:</span>
        <br />
        We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.

        <br />
        <br />

        <span className="text-primary">0c. Testing Guide</span>
        <br />
        Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.

        <br />
        <br />

        <span className="text-primary">0d. Docker :</span>
        <br />
        We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.

        <br />
        <br />

        <span className="text-primary">0e. Article</span>
        <br />
        We will publish an article or workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)

        <br />
        <br />

        <span className="text-primary">1. Substrate module: X</span>
        <br />
        We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone)

        <br />
        <br />

        <span className="text-primary">2. Substrate module: Y</span>
        <br />
        We will create a Substrate module that will…


        <br />
        <br />

        <span className="text-primary">4. Substrate chain:</span>
        <br />
        Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) Milestone 2 Example —

        <br />
        <br />

        <span className="text-primary">Additional features</span>
        <br />
        Estimated Duration: 1 month

        <br />
        FTE: 1

        <br />
        Costs: 4,000 USD

        <br />
        <br />

        <span className="text-primary">Future Plans</span>
        <br />
        Please include here how you intend to use, enhance, promote and support your project in the short term, and
        the team's long-term plans and intentions in relation to it.

        <br />
        <br />

        <span className="text-primary">Additional Information ➕</span>
        <br />
        How did you hear about the Grants Program? Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

        <br />
        Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as: (500 Max)

        <br />
        Work you have already done.

        <br />
        If there are any other teams who have already contributed (financially) to the project.

        <br />
        Previous applications or proposal you may have submitted before.


      </div>
    </>
  );
};

export default Proposals;