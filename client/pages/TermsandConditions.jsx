import AboutUs from "@components/AboutUs";
import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { Aboutdata } from "data/data-containers/HomeDemo4/About";
import Link from "next/link";
import React from "react";
import { PrivacyPolicyData } from "data/data-containers/HomeDemo4/PrivacyPollcy";

const TermsandConditons = () => {
  return (
    <div>
      <Breadcrumb
        PageName={"Terms and Conditions"}
        Previous={"home"}
        Current={"TermsandConditions"}
      />
      <div className="container my-4 ">
        <ReightImage
          content={"Last updated: September 09, 2022 Please read these terms and conditions carefully before using Our Service."}
          img={PrivacyPolicyData.Content1Img}
        />
        {/* <LeftImage
          content={PrivacyPolicyData.Content2}
          img={PrivacyPolicyData.Content2Img}
        /> */}
        <div className="container-fluid p-2">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12">
                <h2 class="text-3xl font-weight-bold text-primary">
                  Interpretation and Definitions
                </h2>
              </div>
              <div class="col-12">
                <h3 class="text-xl font-weight-bold text-primary">
                  Interpretation
                </h3>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>
              <div class="col-12">
                <h4 class="text-lg font-weight-bold text-primary">
                  Definitions
                </h4>
                <p>For the purposes of these Terms and Conditions:</p>
                <ol type="A" className="text">

                  <li class="mb-2">
                    <strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Rise Above App
                  </li>
                  
                  <li class="mb-2">
                    <strong>Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.
                  </li>

                  <li class="mb-2">
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    "control" means ownership of 50% or more of the shares,
                    equity interest or other securities entitled to vote for
                    election of directors or other managing authority.
                  </li>

                  <li class="mb-2">
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </li>

                  <li class="mb-2">
                    <strong>Application</strong> means the software program
                    provided by the Company downloaded by You on any electronic
                    device, named Rise Above Companion App
                  </li>
                  <li class="mb-2">
                    <strong>Company</strong> (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    Rise Above Limited Liability CO., 34 N Franklin Ave Ste 687
                    20092.
                  </li>
                  <li class="mb-2">
                    <strong>Content</strong> refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.
                  </li>
                  <li class="mb-2">
                    <strong>Country</strong> refers to: Wyoming, United States
                  </li>
                  <li class="mb-2">
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </li>

                  <li class="mb-2">
                    <strong>Do Not Track (DNT)</strong> is a concept that has
                    been promoted by US regulatory authorities, in particular
                    the U.S. Federal Trade Commission (FTC), for the Internet
                    industry to develop and implement a mechanism for allowing
                    internet users to control the tracking of their online
                    activities across websites.
                  </li>

                  <li class="mb-2">
                    <strong>Service</strong> refers to the Application or the
                    Website or both
                  </li>

                  <li class="mb-2">
                    <strong> Website</strong> refers to
                    https://www.riseabove.tech accessible
                    fromhttps://www.riseabove.tech
                  </li>

                  <li class="mb-2">
                    <strong> You</strong> means the individual accessing or
                    using the Service, or the company, or other legal entity on
                    behalf of which such individual is accessing or using the
                    Service, as applicable.
                  </li>
                </ol>{" "}
              </div>{" "}
            </div>{" "}
            <img
              src={"https://riseabove.tech/static/media/agriculture3.bfe94b82cd758137c75d.jpeg"}
              alt="terms"
              style={{ padding: 48, height: 820 }}
            />
          </div>
        </div>
        <div class="container p-3">
          <h1 class="text-primary  font-weight-bold">
          Acknowledgment
          </h1>
          <div class="text-justify lead text">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
          </div>
          <br/>
          <br/>               

          

          <div>
            <h3 class="text-2xl text-primary ">
            User Accounts
            </h3>
            <div class="flex flex-col space-y-4 px-3 text">
              <span class="leading-6 lead ">
                {" "}
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service. You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account. You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.:{" "}
              </span>
            </div>

            <br/>
            <br/>
            <h3 class="text-2xl text-primary ">
            Content
            </h3>

            <h5 class="text-sm text-primary ">
            Your Right to Post Content
            </h5>

            <span className="leading-6 text">
              Our Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.

By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights. You agree that this license includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms.

You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </span>
<br/>
<br/>
            <h5 class="text-sm text-primary ">
            Content Restrictions
            </h5>

            <span className="leading-6 text">
              The Company is not responsible for the content of the Service's users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under your account, whether done so by You or any third person using Your account.

You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following:

Unlawful or promoting unlawful activity.
Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.
Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.
Containing or installing any viruses, worms, malware, trojan horses, or other content that is designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person.
Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.
Impersonating any person or entity including the Company and its employees or representatives.
Violating the privacy of any third person.
False information and features.

The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with this Terms, refuse or remove this Content. The Company further reserves the right to make formatting and edits and change the manner of any Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content. As the Company cannot control all content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no circumstances will the Company be liable in any way for any content, including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content.
            </span>

<br/>
<br/>

            <h5 class="text-sm text-primary ">
            Content Backups
            </h5>

            <span className='leading-6 text'>
              Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data.

Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to being backed up or that changes during the time a backup is performed.

The Company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of Content. But You acknowledge that the Company has no liability related to the integrity of Content or the failure to successfully restore Content to a usable state.

You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.
            </span>
<br/>
<br/>
          <h3 className='text-2xl text-primary'>
            Copyright Policy
          </h3>

          <h5 className='text-primary text-sm'>Intellectual Property Infringement</h5>

          <span className='leading-6 text'>
            We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.

If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email at Efile1234@INCFILE.com and include in Your notice a detailed description of the alleged infringement.

You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing Your copyright.
          </span>

<br/>
<br/>
          <h5 className='text-primary text-sm'>DMCA Notice and DMCA Procedure for Copyright Infringement Claims</h5>
<span className='leading-6 text'>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):

An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.

A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.

Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.

Your address, telephone number, and email address.

A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.

A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.

You can contact our copyright agent via email at Efile1234@INCFILE.com. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Service.</span>
            
            
            
            <br/>
            <br/>
            
            <h3 className='text-2xl text-primary font-bold'>Intellectual Property</h3>

            <span className='text'>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.

The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.

Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.</span>


<br/>
<br/>
<h5 className='text-sm text-primary'>
  Links to Other Websites
</h5>
            <span className='text'>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
            </span>
            
            <br/>
            <br/>
      <h5 className='text-sm text-primary'>Termination</h5>
            <span className='text'>We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.</span>
            

            <br/>
            <br/>
      <h5 className='text-sm text-primary'>Limitation of Liability</h5>
            <span className='text'>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</span>

            <br/>
            <br/>
      <h3 className='text-2xl text-primary'>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
            <span className='text'>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>Disputes Resolution</h3>
            <span className='text'>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>For European Union (EU) Users</h3>
            <span className='text'>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>United States Legal Compliance</h3>
            <span className='text'>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</span>

            <br/>
            <br/>
      <h3 className='text-2xl text-primary'>Severability and Waiver</h3>
<br/>
      <h5 className='text-primary'>Severability</h5>
            <span className='text'>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</span>
<br/>
      <h5 className='text-primary'>Waiver</h5>
            <span className='text'>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>Translation Interpretation</h3>
            <span className='text'>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>Changes to These Terms and Conditions</h3>
            <span className='text'>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</span>

            <br/>
            <br/>
      <h3 className='text-sm text-primary'>Contact Us</h3>
            <span className='text'>If you have any questions about these Terms and Conditions, You can contact us:

By email: Support@RiseAbove.tech</span>



          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TermsandConditons;
