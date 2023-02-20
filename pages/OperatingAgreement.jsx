import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";

const OperatingAgreement = () => {
  return (
    <>
      <Breadcrumb PageName={"OPERATING AGREEMENT FOR"} Previous={"home"} Current={"OperatingAgreement"} />
      <div class="container my-4">
        
        <ReightImage content={'Rise Artist Collective DAO. An Decentralized Autonomous Organization of the Rise Above Limited Liability Co. 2022 R.R.'} img={"https://riseabove.tech/static/media/Dao.00212c78e2490f58ed1a.jpeg"} />

        <h3 className="text-primary">A DECENTRALIZED AUTONOMOUS ORGANIZATION</h3>

        <h4 className="text-primary">ARTICLE I DAO Formation</h4>

        <p className="text">
          <span className="font-bold text-2xl text-primary">1.01 FORMATION. </span>
          The Members have formed a Decentralized Autonomous Organization Limited Liability Company ("DAO") subject to Title 17, Chapter 29 of the Wyoming Statutes, the Wyoming Limited Liability Company Act (“the Act”), and Title 17, Chapter 31, the Wyoming Decentralized Autonomous Organization Supplement (the “Supplement”). This Operating Agreement (“Agreement”) is entered into and effective upon adoption by the Member(s). This Agreement is intended to provide for the regulation and management of the affairs of the DAO. Except for the provisions of the Act and the Supplement that specifically may not be modified by the agreement of the Members, to the extent of any contradiction between the provisions of this Agreement and the Act (or Supplement) or the variation of the general terms of the Act (or Supplement) by this Agreement, the provisions of this Agreement shall govern and control, and each Member hereby consents to such contradiction or variation. 
          The Articles of Organization cDontain a statement that reflects the Members election to form a limited liability decentralized autonomous organization.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.02. DAO NAME.</span>
          The Members may change the name of the DAO or operate under different names, provided a majority of the Members agree and the name complies with Section 17-29- 108 of the Act and Section 17-31-104 of the Supplement.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.03. REGISTERED OFFICE & AGENT.</span>
          The name and location of the registered agent will be as stated in the DAO’s formation documents and complies with Title 17, Chapter 28 and Section 17-29-113 of the Act.
        </p>

        {/* <br /> */}

        <ul className='text'>
          <li><p><span className="text-primary"> 1.04. TERM.</span> The DAO will continue perpetually unless:
          Members unanimously vote for dissolution; An event occurs which causes the DAO’s business to become unlawful; 
          The DAO fails to take any action for one (1) year; or
          Any other event causes the DAO’s dissolution under either the Act or the Supplement.</p></li>
        </ul>

        {/* <br /> */}

        <ul className='text'>
          <li><p><span className="text-primary">1.05. CONTINUATION OF DAO.</span>In the event of an occurrence described in Section 1.04(c), if there is at least one remaining Member, the remaining Member has the right to continue the business of the DAO, unless that right to continue has been terminated. The remaining Member’s successor, assignee, or transferee may continue the business of the DAO, provided the successor, assignee, or transferee consents to the continuation in writing and submits any necessary filings to the office of the Secretary of State.</p></li>
        </ul>

        {/* <br /> */}

        <ul className='text'>
          <li><p><span className="text-primary">1.06. BUSINESS PURPOSE.</span>The DAO may conduct any and all lawful business appropriate in carrying out the DAO’s objectives, as permitted under Section 17-29-104 of the Act and Section 17-31-105 of the Supplement.</p></li>
        </ul>

        {/* <br /> */}

        <ul className='text'>
          <li><p><span className="text-primary">1.07. PRINCIPAL PLACE OF BUSINESS.</span>The DAO’s principal place of business will be as stated in the DAO’s formation documents or as selected by the Members.</p></li>
        </ul>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.08. THE MEMBERS. </span>
          Members are the owners of the DAO. Members are not entitled to compensation for services furnished to the DAO in the Member’s capacity as a Member. Each Member’s membership interest is calculated by dividing the member’s contribution of digital assets to the DAO by the total amount of digital assets contributed to the DAO at the time of the vote. An unauthorized transfer of a Member’s interest could create a substantial hardship for the DAO. Consequently, the Members agree to the restrictions and procedures affecting the ownership and transfer of the Members’ interests as identified in the Act, the Supplement, and this Agreement. The Members acknowledge these restrictions are not intended to penalize, but rather are intended to protect and preserve the existing trust-based relationships, the DAO’s capital, and the DAO’s financial ability to continue its operations.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.09. ADMISSION OF ADDITIONAL MEMBERS.</span>
          Pursuant to Section 17-29-401 of the Act and this Agreement, Members may only be admitted to the DAO through the transfer of a Member’s current interest under Article VII. Prior to being admitted as a Member, the prospective Member(s) may be required to establish and maintain certain digital infrastructure. Any attempt to admit a new Member must adhere to the underlying smart contract and blockchain ecosystem of the DAO.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.10. VOTING.</span>
          The Members agree that any vote of the Members shall be calculated based on membership interests held by each Member at the time of the vote. Any vote under this Section may occur, provided a quorum of the membership interests is present for the vote. Pursuant to Subsection 17-31-111(a)(iii) of the Supplement, a quorum exists when a simple majority of all membership interests entitled to vote is present.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.11. UNDERLYING SMART CONTRACT.</span>
          The Members acknowledge and agree that, pursuant to Section 17-31-106 of the Supplement, the underlying smart contract governs the operations of the DAO. In the event of any conflict between the Articles and the underlying smart contract, the smart contract will govern. In the event of any conflict between the Articles and this Agreement, the Articles will govern. In the event of any conflict between this Agreement and the underlying smart contract, the smart contract will govern. Any time the underlying smart contract is updated or changed, the Members shall cause the Articles and this Agreement to be amended accordingly.
        </p>

        {/* <br /> */}

        <p className="text">
          <span className="font-bold text-primary">1.12. ACTIONS BY WRITTEN CONSENT.</span>
          Any action required or permitted to be taken at any meeting of the Members may be taken without a meeting, without prior notice, and without a vote, if a consent in writing, setting forth the action so taken, is signed by Members having at least the minimum number of votes that would be necessary to authorize or take such action at a meeting at which all Members were present and voting. A facsimile, email, or a legible and verifiable electronic reproduction of a writing signed by a Member will be regarded as signed by the Member.
        </p>
        <br />
        <br />
        <h4 className="text-primary">ARTICLE II Capital Contributions</h4>

        {/* <br />   */}

        <p className="text">
          <span className="font-bold text-primary">2.01. INITIAL CONTRIBUTIONS.</span>
          The Members will contribute the DAO’s initial capital in exchange for each Member receiving membership interest in the DAO.
        </p>

        {/* <br />   */}

        <p className="text">
          <span className="font-bold text-primary">2.02. ADDITIONAL CONTRIBUTIONS.</span>
          Unless a majority of the membership interests vote otherwise, no Member is obligated to make any additional contribution to the DAO's capital beyond their initial contribution. The DAO may elect to make a capital call from all Members if a majority of the membership interests agree. Any vote for a capital call must be memorialized, including the types and amounts of capital called. Contributions related to an authorized capital call shall be contributed based upon each Member's preference.
        </p>

        {/* <br />   */}

        <p className="text">
          <span className="font-bold text-primary">2.03. FAILURE TO CONTRIBUTE.</span>
          Any contribution must be satisfied by the Member within sixty (60) days from the date of the call for capital. Pursuant to Section 17-29-403 of the Act, if a Member fails to make its required contributions to the DAO, then the other Members may seek enforcement of the obligation to contribute capital. Any remedy under the Act may be pursued, including prohibiting the individual from becoming a Member until they have satisfied their contribution obligations.
        </p>
        
        <p className="text">
          <span className="font-bold text-primary">2.04. WITHDRAWAL OF CAPITAL.</span>
          No Member may withdraw all or any part of its capital contribution except as permitted by the underlying smart contract or Article VIII (regarding dissolution of the DAO).
        </p>

        <p className="text">
          <span className="font-bold text-primary">2.05. NO PARTITION.</span>
          Each Member, on behalf of itself and its successors and assigns, expressly waives any right to have the DAO assets partitioned.
        </p>

        <p className="text">
          <span className="font-bold text-primary">2.06. RETURN OF CAPITAL CONTRIBUTIONS.</span>
          The Members agree that if the DAO does not have adequate assets to return the capital contributions, then the Members will not have any recourse against the DAO or the other Members. As one exception to the previous statement, recourse does exist if a Member owes an outstanding debt to the DAO. Pursuant to Section 17-25-107 of the Supplement, Members are only entitled to demand and receive cash in return for their capital contributions, regardless of the form or nature of the Member’s actual contribution(s) of capital.
        </p>

        <br />
        <br />

        <h4 className="text-primary">ARTICLE III</h4>
        <h5 className="text-primary">Profits, Losses, and Distribution</h5>

        <p className="text">
          <span className="font-bold text-primary">3.01. PROFITS/LOSSES.</span>
          For accounting and tax purposes, the DAO's net profits or net losses will be determined annually. Pursuant to Section 17-25-110 of the Supplement, and as provided in Section 6.03, below, profits and losses will be allocated to the Members in proportion to each Member's economic interest in the DAO and in accordance with Treasury Regulation 1.704-1.
        </p>

        <p className="text">
          <span className="font-bold text-primary">3.02. DISTRIBUTIONS. </span>
          The Members may determine to distribute available funds annually or as the Members see fit, provided that there remains sufficient funds to cover any debts or liabilities of the DAO. “Available funds” means the DAO’s net cash available after expenses, working capital, and liabilities, as determined by the Members. Distributions in liquidation of the DAO or in liquidation of a Member's interest must be made in accordance with the positive capital account balances pursuant to Treasury Regulation 1.704-1(b)(2)(ii)(b)(2). To the extent a Member has a negative capital account balance, there will be a qualified income offset, as set forth in Treasury Regulation 1.704-1(b)(2)(ii)(d). Consistent with Section 17-25-107 of the Supplement, Members may only demand or receive a distribution from the DAO in the form of money.
        </p>

        <p className="text">
          <span className="font-bold text-primary">3.03. IN-KIND DISTRIBUTIONS.</span>
          If permitted by the underlying smart contract, the DAO may make in-kind distributions of the DAO assets. The fair market value of the property must be determined by the underlying smart contract before the distribution is made. The receiving Member’s capital account shall be adjusted to reflect the value of the in-kind distribution.
        </p>

        <p className="text">
          <span className="font-bold text-primary">3.04. NO INTEREST. </span>
          Unless the smart contract permits otherwise, no interest shall accrue on any un-withdrawn distribution.
        </p>

        <p className="text">
          <span className="font-bold text-primary">3.05. WITHHOLDINGS.</span>
          The underlying smart contract may withhold from payments or distributions to any Member, or with respect to any allocation made with respect to any Member, and to pay over to any federal, state, or local government any amounts required to be so withheld pursuant to the Act or any provision of any other federal, state or local law. All amounts withheld pursuant to this Section 3.05 with respect to any payment, distribution or allocation to a Member shall be treated as amounts paid or distributed to such Member for all purposes of this Agreement and the Act.
        </p>

        <br />
        <br />

        <h4 className="text-primary">ARTICLE IV Management</h4>

        <p className="text">
          <span className="font-bold text-primary">4.01. MANAGEMENT OF THE BUSINESS. </span>
          Pursuant to Section 17-29-407 of the Act and Section 17-31-109 of the Supplement, and as stated in its Articles, the DAO’s day to day affairs are managed by the Members. The Members are responsible for the daily operations of the business. Notwithstanding the other provisions of this Article, the Members agree that: 
          Any decision that involves a sale of the business, a loan, or the acquisition of another company, must have the unanimous consent of all Members; and If a Member disagrees with a proposed decision, the disagreeing Member may call a vote to decide the course of action. A simple majority vote is necessary to take an action on behalf of the DAO. The votes must be recorded in writing.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.02. APPOINTING OFFICERS.</span>
          The Members may appoint officers or managers and define their function and authority.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.03. MEMBERS.</span>
          To the extent permitted under Section 17-29-304 of the Act, no Member shall be personally liable for the obligations of the DAO. Pursuant to Section 17-29-407 of the Act, Members may take any part in the control, management, direction, or operation of the DAO's affairs and have power to bind the DAO, unless the Members have agreed to reserve or restrict such powers to be exclusively exercised by designated Member(s). Any agreement pursuant to Paragraph 4.01(a) of this Agreement must be signed by all Members to legally bind the DAO, unless the Members unanimously agree in writing to grant a single Member with the authority to sign and bind the DAO.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.04. DISPUTES OF MEMBERS.</span>
          Disputes among Members will be decided by a majority vote. A Member has votes proportional to that Member’s membership interest (e.g., 11% ownership equals 11 votes). A majority vote is necessary for an action to take place. Any vote under this Section may occur, provided a quorum of the membership interests is present for the vote. In the event of a split vote among the Members, the status quo remains, and no deviating action may occur. Members are required to vote on at least one resolution that attempts to address and resolve the dispute between the Members prior to any Member bringing a direct action under Section 17-29-901 of the Act.
          Members may maintain a derivative action to enforce a right of the DAO, provided the acting Member properly demands the other Member(s) to enforce the right of the DAO, or the acting Member adequately declares with particularity that such demands are futile.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.05. POWERS OF MEMBERS.</span>
          The Members are authorized:
          a. to make all decisions regarding the DAO’s operations and legal affairs, including but not limited to:
          the sale, development, lease, or other disposition of the DAO's assets;
          the purchase or acquisition of other assets;
          iii. the management of all or any part of the DAO's assets;
          iv. the borrowing of money and granting of security interests in the DAO's assets;
          v. the pre-payment, refinancing, or extension of any loan affecting the DAO's assets; vi. the compromise or release of any of the DAO's claims or debts; and
          vii. the employment of persons, firms, or corporations for the operation and management of the DAO's business; and to execute and deliver:
          i. all contracts, conveyances, assignments, leases, sub-leases, franchise agreements, licensing agreements, management contracts, and maintenance contracts covering or affecting the DAO's assets;
          ii. all checks, drafts, and other orders for the payment of the DAO's funds;
          iii. all promissory notes, loans, security agreements and other similar documents; and iv. all other instruments of any kind relating to the DAO's business and affairs.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.06. DUTIES OF MEMBERS.</span>
          Pursuant Section 17-31-110 of the Supplement, no Member has any fiduciary duty to the DAO or to any other Member. Unless otherwise agreed among the Members, no Member has any duty to act.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.07. SELF-DEALING.</span>
          Unless entered into in bad faith, no contract or transaction between the DAO and one or more of its Members, officers, or employees, or between the DAO and any other entity or organization in which one or more of its Members, officers, or employees have a financial interest or are owners, managers, partners, directors, officers, or employees, shall be voidable solely for this reason or solely because such Member, officer, or employee was present or participated in the authorization of such contract or transaction. No Member, officer, or employee interested in such contract or transaction, because of such interest, shall be considered to be in breach of this Agreement or liable to the DAO or any Member for any loss or expense incurred by reason of such contract or transaction or shall be accountable for any gain or profit realized from such contract or transaction. While not required, approval or ratification by a majority of the Members having no interest in the transaction constitutes circumstantial evidence that such transaction is permitted under this section.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.08. PERMITTED TRANSACTIONS. </span>
          Each Member, and their respective affiliates and other related parties, shall be free to engage in any activity on their own or by the means of any entity so long as neither the Member or their respective affiliates and other related parties refrains from engaging in bad faith in dealing with the DAO.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.09. DAO INFORMATION. </span>
          Pursuant to Section 17-31-112 of the Act, and assuming such info is available on an open blockchain, Members have no right to separately inspect or copy records of the DAO and the DAO is not obligated to furnish any records to requesting Members.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.10. EXCULPATION. </span>
          Pursuant to Section 17-29-304 of the Act, no Member shall be personally liable, directly or indirectly, for any debt, obligation, or liability of the DAO by sole reason of a being a Member. Any debt, obligation, or liability of the DAO is strictly and solely the liability of the DAO.
        </p>

        <p className="text">
          <span className="font-bold text-primary">4.11. INDEMNIFICATION.</span>
          The DAO will not indemnify any person who was or is a party defendant or is threatened to be made a party defendant, in a pending or completed action, suit or proceeding. Members are entirely responsible for prosecuting and defending claims involving or related to the DAO, whether civil, criminal, administrative, or investigative by reason of the fact that the person is or was a Member of the DAO, employee, or agent of the DAO, or is or was serving at the request of the DAO.
        </p>

        <br />
        <br />

        <h4 className="text-primary">ARTICLE V Compensation</h4>

        <p className="text">
          <span className="font-bold text-primary">5.01. MANAGEMENT FEE.</span>
          Any Member rendering services to the DAO is entitled to compensation equal to the value of those services. All Members must unanimously agree upon the value of the services.
        </p>

        <p className="text">
          <span className="font-bold text-primary">5.02. REIMBURSEMENT. </span>
          The DAO will not reimburse the Members for all direct out-of-pocket expenses reasonably incurred in managing the DAO. The Members agree that no expense will be reimbursed if disputed by any Member.
        </p>

        <br />
        <br />

        <h4 className="text-primary">ARTICLE VI Bookkeeping</h4>

        <p className="text">
          <span className="font-bold text-primary">6.01. BOOKS. </span>
          The underlying smart contract and blockchain ecosystem will maintain the complete and accurate accounting of the DAO's affairs and will determine the method of accounting. The DAO's accounting period will be the calendar year.
        </p>

        <p className="text">
          <span className="font-bold text-primary">6.02. RECORDS. </span>
          The Members will keep the following at the DAO’s registered office:
          A current list of the full name and the last known street address of each Member;
          A copy of all formation documents, this Agreement, and any amendments;
          Copies of the DAO's federal, state, and local income tax returns and reports, if any, for the three (3) most recent years;
          Copies of all minutes, if any, of each meeting of the Members and any written consent obtained from the Members; and
          Copies of the DAO’s financial statements for the three (3) most recent years.
        </p>

        <p className="text">
          <span className="font-bold text-primary">6.03. MEMBER'S ACCOUNTS. </span>
          The underlying smart contract and blockchain ecosystem will maintain separate capital and distribution accounts for each Member. Each Member's capital account will be determined and maintained in the manner set forth in Treasury Regulation 1.704-1(b)(2)(iv), each capital account will consist of the Member’s initial capital contribution:
          increased by:
          i Any additional capital contribution made by the Member;
          ii Credit balances transferred from the Member’s distribution account to his or her capital account;
          and decreased by:
          i Distributions to the Member in reduction of DAO capital;
          ii The Member's share of DAO losses if charged to his or her capital account.
        </p>

        <p className="text">
          <span className="font-bold text-primary">6.04. REPORTS. </span>
          The Members shall look to the open blockchain ecosystem for any statements of that Member's distributive share of income and expense for income tax reporting purposes.
        </p>

        <br />
        <br />

        <h4 className="text-primary">ARTICLE VII Transfers</h4>

        <p className="text">
          <span className="font-bold text-primary">7.01. NOTICE OF RESTRICTIONS ON TRANSFERS AND WITHDRAWALS. </span>
          Pursuant to Section 17-25-103 of the Supplement, all Members and prospective Members are hereby notified of the following limitations:
          The rights of members in a decentralized autonomous organization may differ materially from the rights of members in other limited liability companies. The Wyoming Decentralized Autonomous Organization Supplement, underlying smart contracts, articles of organization and operating agreement, if applicable, of a decentralized autonomous organization may define, reduce or eliminate fiduciary duties and may restrict transfer of ownership interests, withdrawal or resignation from the decentralized autonomous organization, return of capital contributions and dissolution of the decentralized autonomous organization.
        </p>

        <p className="text">
          <span className="font-bold text-primary">7.02. ASSIGNMENT.</span>
          If a Member proposes to sell, assign, or otherwise dispose of all or part of the Member’s interest in the DAO, that Member must comply with the following procedures:
          
          The Member must first make a written offer, including the price, to sell such interest to the other Member(s). The dissociating Member may only advertise the sale if the other Members decline or fail to elect such interest within sixty (60) days after the offer.
          
          If the dissociating Member has a potential buyer of that Member’s interest, the other current Member(s) have first option to purchase the dissociating Member's interest at the agreed purchase price. If there are more than one (1) current remaining Members, those remaining Members may combine funds to purchase the dissociating Member's interest. Current Members have sixty (60) days from the date of offering to buy dissociating Members' interest if they so desire. The dissociating Member must show that any potential purchaser has full certified funds, or the ability to get full certified funds before the sixty (60) day first right of refusal period starts.
          
          The underlying smart contract must allow for the sale of a dissociating Member’s interest to grant full membership benefits and functionality to the new Member. If the underlying smart contract does not allow for the sale, then the sale or transfer cannot occur. The dissociating Member must disclose to the potential buyer or assignee the transfer restrictions set out in this Agreement.
          
          If the underlying smart contract allows for the transfer and assignment, then the prospective Member will not have all powers of a Member until that prospective Member executes all agreements binding the Members, including this Operating Agreement, with duly executed copies delivered to the DAO.
          
          Upon the departure of the dissociating Member, the new Member shall only possess an economic interest in the DAO until all the conditions for being a fully-fledged Member have been satisfied.
        </p>

        <p className="text">
          <span className="font-bold text-primary">7.03.VALUATION AND DISTRIBUTION OF DISSOCIATING MEMBER’S INTEREST. </span>
          If a Member wants to exit the DAO, and does not have a buyer of its membership interest, the dissociating Member will offer its membership interest up to all the remaining Members. The remaining Members are permitted to decline to acquire any of the dissociating Member’s membership interest. The valuation and distribution of the dissociating Member's membership interest will be as the Members agree and as the underlying smart contract permits.
        </p>

        <br/>
        <br/>

        <h4 className="text-primary">ARTICLE VIII Dissolution</h4>

        <p className="text">
          <span className="font-bold text-primary">8.01. DISSOLUTION. </span>
          The Members may dissolve the DAO at any time, provided the Members unanimously agree. Per Section 17-29-701 of the Act, the DAO shall be dissolved if there are no Members for a consecutive period of ninety (90) days and the underlying smart contract is unable to continue as designed. Pursuant to Section 17-29-502 of the Act and Section 17-31-113 of the Supplement, dissolution of the DAO may not be ordered by a simple owner of the Members’ transferable interests.
        </p>

        <p className="text">
          <span className="font-bold text-primary">8.02. DISTRIBUTIONS AFTER DISSOLUTION. </span>
          Upon dissolution, the DAO must pay its debts before distributing cash, assets, or capital to the Members or the Members’ interests. The Members agree that any distributions occurring after the dissolution of the DAO shall follow the process outlined in this Agreement and Section 17-29-708 of the Act.
        </p>

        <br/>
        <br/>

        <h4 className="text-primary">ARTICLE IX General Matters</h4>

        <p className="text">
          <span className="font-bold text-primary">9.01. MULTIPLE ORIGINALS.  </span>
          This Agreement may be signed in any number of counterparts, each of which will be deemed an original.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.02. BINDING EFFECT. </span>
          Subject to the restrictions on transfer in this Agreement, this Agreement binds and inures to the benefit of the Members and to their respective successors, personal representatives, heirs, and assigns.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.03. CONSTRUCTION OF HEADINGS.</span>
          The headings contained in this Agreement are included solely for the reader’s convenience and reference.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.04. AMENDING OPERATING AGREEMENT.</span>
          This Agreement may only be amended by an affirmative vote or consent of all Members.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.05. GOVERNING LAW. </span>
          The Members acknowledge and agree that this Agreement is and will be governed, construed, and administered according to the laws of the State of Wyoming, as they may be amended from time to time.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.06. COMPLIANCE WITH THE ACT. </span>
          All matters related to the operations of the DAO not specifically addressed herein must be addressed in accordance with the Act and the Supplement. The DAO must comply with all other provisions of the Act and the Supplement in order to stay compliant with the law.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.07. SEVERABILITY.  </span>
          If a court of competent jurisdiction determines that any provision of this Agreement is invalid, then the remaining provisions are to be construed as if the invalid provision was never included.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.08. VENUE.</span>
          The venue for any dispute arising under this Agreement or any disputes among the Members or the DAO will be the county in which the DAO’s Registered Office is located.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.09. NOTICE TO MEMBERS.</span>
          All notices to be given under the Agreement to the Members shall be given in writing and shall be deemed given: (i) when deposited in the mail to the address shown below of the Member entitled to receive notice, postage prepaid, registered or certified; (ii) when transmitted if sent by facsimile provided a confirmation of transmission is produced by the sending machine to the fax number shown below of the Member entitled to received notice; (iii) when transmitted if sent by email when the email is received in the recipient’s mailbox; or (iv) when delivered if delivered personally or sent by express courier service. The address or fax number of any Member may be changed by written notice to the other Members.
        </p>

        <p className="text">
          <span className="font-bold text-primary">9.10 ENTIRE AGREEMENT.</span>
          This Agreement, together with the Articles of Organization (as may be amended) and all related exhibits, schedules, attachments, etc., constitute the sole and entire agreement by and among the Members. This Agreement supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, written or oral, with respect to the subject matter.
        </p>

        <h4 className="text-primary">Members:</h4>
        <h6 className="text-primary">__T.S._Howe_______</h6>
        <p>Printed Name:
        <br />
        _______________________________ Signature:
        <br />

        Shares: 90,000,000</p>

        <br/>
        
        <h6 className="text-primary">Cynthia and Gary Dietderich</h6>
        <p>Printed Name:
        <br />
        _______________________________ Signature:
        <br />

        Shares: 90,000,000</p>

        <br/>

        <h6 className="text-primary">___Aaron Harmon________</h6>
        <p>Printed Name:
        <br />
        _______________________________ Signature:
        <br />

        Shares: 1,250,000</p>

        <br/>

        <h6 className="text-primary">_Jerry & Sandra Howe_</h6>
        <p>Printed Name:
        <br />
        _______________________________ Signature:
        <br />

        Shares: __575,000__</p>

        <br/>

        <h6 className="text-primary">_Tom & Sandra Harmon_</h6>
        <p>Printed Name:
        <br />
        _______________________________ Signature:
        <br />

        Shares: __500,000__</p>

        <br/>

        <h6 className="text-primary">CERTIFICATION OF MEMBERS</h6>
        <p>
        The undersigned hereby agree, acknowledge, and certify that the foregoing Operating Agreement is adopted and approved by each Member. The agreement consisting of _19_ pages, constitutes the Operating Agreement of Rise Artist Collective DAO, adopted by the Members as of 05/21/2022

        <br/>

        ___________________________________ Printed Name
        <br/>

        ___________________________________ Printed Name
        <br/>

        ___________________________________ Printed Name
        <br/>

        ___________________________________ Printed Name
        <br/>

        ___________________________________ Printed Name
        </p>

        <br/>

        <h6 className="text-primary">DAO Resolution to Open a Bank Account</h6>
        <p>
        Account: ________________________ Holder: ________________________

        <br/>
        Bank Name: Address:

        <br/>
        ________________________

        <br/>
        ________________________

        <br/>
        ________________________
        </p>
        
        <br/>
        <br/>

        <h6 className="text-primary">Acct #:
        <br/>
        ____________________________________________________________________</h6>

        <p className="text">
        As a Member of the DAO named above, I certify that the DAO has been organized within the bounds of state law as an DAO with its principal office located at: __________________

        <br />
        I further attest that at the initial meeting of the DAO’s members was held on 05/21/2022, a quorum was present, and voting and adopted the following resolutions:

        <br />
        Resolved, that the financial institution named above is designated as a depository for the funds of this DAO, which may be withdrawn on checks, drafts, debit advices, notes, or other orders for payments bearing any officer, manager, or authorized employee of this DAO.

        <br />
        Further Resolved, that the financial institution will accept and pay on, without further inquiry, any checks or debits drawn against any of the DAO’s accounts. The checks or debits will be honored by the financial institution whether the item has been drawn or endorsed to the order of any authorized officer, manager, or employee signing; tendered by the authorized officer, manager, or employee for the purpose of cashing or payment; or for deposit to the officer’s, manager’s, or employee’s personal account. The financial institution will not be required to inquire as to the use of any check or debit signed in accordance with the resolutions contained herein.

        <br />
        Further Resolved, that the officers, managers, or authorized employees may execute other agreements, including, but not limited to, special depository agreements, and arrangements concerning the manner, condition, and/or purposes for which funds, checks, debits, or items of the DAO may be deposited, collected, or withdrawn, as long as these other agreements are not contrary to the provisions contained in this resolution.

        <br />
        Further Resolved, that the power granted to the DAO’s officers, managers, or authorized employees will remain in full force and effect until written notice has been delivered and received by the financial institution at each location where an account is maintained. The financial institution will be indemnified and held harmless from any losses suffered or liabilities incurred by continuing to act in accordance with this resolution.

        <br />
        I Further Attest that the person(s) named below occupy the stated position, as indicated by their signature, and that the resolutions contained in this document are recorded in the books of the DAO, and these resolutions are in full force and effect and have not been altered in any way.

        <br />
        CERTIFIED AND ATTESTED TO ON THIS 24TH DAY OF MAY, 2022, BY:

        <br />
        X___________________ DAO MEMBER

        <br />
        T.S. HOWE

        <br />
        Rise Artist Collective

        <br />
        Rise Eco PlatForm

        <br />
        A Division Of Rise Above Limited Liability Co.

        <br />
        All Rights Reserved 2022
        </p>

      </div>
    </>
  );
};

export default OperatingAgreement;
