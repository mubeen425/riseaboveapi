import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import LeftImage from "@components/styleStructure/LeftImage";
import ReightImage from "@components/styleStructure/ReightImage";
import { PrivacyPolicyData } from "data/data-containers/HomeDemo4/PrivacyPollcy";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Breadcrumb
        PageName={"Privacy Policy"}
        Previous={"home"}
        Current={"PrivacyPolicy"}
      />
      <div className="container my-4 ">
        <ReightImage
          content={PrivacyPolicyData.Content1}
          img={PrivacyPolicyData.Content1Img}
        />
        <LeftImage
          content={PrivacyPolicyData.Content2}
          img={PrivacyPolicyData.Content2Img}
        />
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
                <p>For the purposes of this Privacy Policy:</p>
                <ol type="A" className="text">
                  <li class="mb-2">
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </li>
                  <li class="mb-2">
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    "control" means ownership of 50% or more of the shares,
                    equity interest or other securities entitled to vote for
                    election of directors or other managing authority.
                  </li>
                  <li class="mb-2">
                    <strong>Application</strong> means the software program
                    provided by the Company downloaded by You on any electronic
                    device, named Rise Above Companion App
                  </li>
                  <li class="mb-2">
                    <strong>Business</strong>, for the purpose of the CCPA
                    (California Consumer Privacy Act), refers to the Company as
                    the legal entity that collects Consumers' personal
                    information and determines the purposes and means of the
                    processing of Consumers' personal information, or on behalf
                    of which such information is collected and that alone, or
                    jointly with others, determines the purposes and means of
                    the processing of consumers' personal information, that does
                    business in the State of California.
                  </li>
                  <li class="mb-2">
                    <strong>Company</strong> (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    Rise Above Limited Liability CO., 34 N Franklin Ave Ste 687
                    2092.
                  </li>
                  <li class="mb-2">
                    <strong>Consumer</strong>, for the purpose of the CCPA
                    (California Consumer Privacy Act), means a natural person
                    who is a California resident. A resident, as defined in the
                    law, includes (1) every individual who is in the USA for
                    other than a temporary or transitory purpose, and (2) every
                    individual who is domiciled in the USA who is outside the
                    USA for a temporary or transitory purpose.
                  </li>
                  <li class="mb-2">
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
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
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.For the
                    purposes of the CCPA, Personal Data means any information
                    that identifies, relates to, describes or is capable of
                    being associated with, or could reasonably be linked,
                    directly or indirectly, with You.
                  </li>

                  <li class="mb-2">
                    <strong>Sale</strong> , for the purpose of the CCPA
                    (California Consumer Privacy Act), means selling, renting,
                    releasing, disclosing, disseminating, making available,
                    transferring, or otherwise communicating orally, in writing,
                    or by electronic or other means, a Consumer's personal
                    information to another business or a third party for
                    monetary or other valuable consideration.
                  </li>
                  <li class="mb-2">
                    <strong>Service</strong> refers to the Application or the
                    Website or both
                  </li>

                  <li class="mb-2">
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </li>

                  <li class="mb-2">
                    <strong> Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
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
              src={PrivacyPolicyData.Content2Img}
              alt="PrivacyPolicyData.Content2Img"
              style={{ padding: 48, height: 820 }}
            />
          </div>
        </div>
        <div class="container p-3">
          <h1 class="text-primary  font-weight-bold">
            Collecting and Using Your Personal Data
          </h1>
          <h2 class="text-primary font-weight-bold">Types of Data Collected</h2>
          <h3 class="text-primary  font-weight-bold">Personal Data</h3>
          <div class="text-justify lead text">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </div>
          <ul class="ml-5 mt-3 list-unstyled lead text">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number Address</li>
            <li>State, Province, ZIP/Postal code, City</li>
          </ul>

          <div>
            <h3 class="text-primary ">Usage Data</h3>
            <div class="d-flex flex-column mx-3">
              <p class="lead">
                Usage Data is collected automatically when using the Service
              </p>
              <p class="lead">
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p class="lead">
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p class="lead">
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-primary ">
              Information Collected while Using the Application
            </h3>
            <div class="d-flex flex-column mx-3">
              <p class="lead">
                While using Our Application, in order to provide features of Our
                Application, We may collect, with Your prior permission:
              </p>
              <p class="lead">
                Information regarding your location We use this information to
                provide features of Our Service, to improve and customize Our
                Service. The information may be uploaded to the Company's
                servers and/or a Service Provider's server or it may be simply
                stored on Your device. You can enable or disable access to this
                information at any time, through Your Device settings.
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-2xl text-primary ">
              Tracking Technologies and Cookies
            </h3>
            <div class="flex flex-col space-y-4 px-3 text">
              <span class="leading-6 lead ">
                {" "}
                Our Application uses Cookies and similar tracking technologies
                to monitor activity and store information. These technologies
                include beacons, tags, and scripts, which are used to gather and
                analyze data, improve Our Service, and provide you with a better
                experience. The technologies we use may include:{" "}
              </span>
              <ol type="I">
                <li class="pb-3 lead">
                  <span class="font-semibold">Browser Cookies.</span> A small
                  file placed on your device, browser cookies can help Our
                  Application remember your preferences and activity. You can
                  change your browser settings to reject all cookies, but please
                  note that doing so may limit the functionality of Our
                  Application. If your browser settings allow cookies, Our
                  Application may use them.
                </li>
                <li class="pb-3 lead">
                  <span class="font-semibold">Flash Cookies.</span> Some parts
                  of Our Application may use local stored objects, also known as
                  Flash Cookies, to store information about your preferences and
                  activity. These cookies are not managed through your browser
                  settings and can be deleted through Adobe's website:
                  <div className="pr-5">
                    {" "}
                    https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-
                    <br />
                    flash.html#main_Where_can_I_change_the_settings_for_disabling__
                    <br />
                    or_deleting_local_shared_objects_
                  </div>{" "}
                </li>
                <li class="pb-3 lead">
                  <span class="font-semibold">Web Beacons.</span> Some sections
                  of Our Application and emails may contain small electronic
                  files called web beacons, which allow us to count visitors and
                  track website statistics such as page popularity and system
                  and server integrity.
                </li>
              </ol>
              <span class="pb-3 lead py-3">
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. Learn more about cookies on the Privacy
                Policies website article. We use both Session and Persistent
                Cookies for the purposes set out below: Necessary / Essential
                Cookies Type: Session Cookies Administered by: Us Purpose: These
                Cookies are essential to provide You with services available
                through the Website and to enable You to use some of its
                features. They help to authenticate users and prevent fraudulent
                use of user accounts. Without these Cookies, the services that
                You have asked for cannot be provided, and We only use these
                Cookies to provide You with those services.
              </span>
            </div>
            <div class="flex flex-col space-y-2">
              <h2 class="text-xl font-semibold text-black">
                Acceptance of Cookie Policy
              </h2>
              <div class="leading-6 text">
                Cookie Type: Persistent Cookies Administrator: Us Purpose: These
                cookies help us identify if you have accepted our cookie policy
                on the website.
              </div>
              <h2 class="text-xl font-semibold text-black">
                Functionality Cookies
              </h2>
              <div class="leading-6 text">
                Cookie Type: Persistent Cookies Administrator: Us Purpose: These
                cookies allow us to remember your choices while using the
                website, such as remembering your login credentials or preferred
                language. The purpose of these cookies is to provide you with a
                personalized experience and to prevent you from having to
                re-enter your preferences each time you use the website.
              </div>
            </div>

            <div>
              <div class="flex flex-col space-y-2 p-3">
                <h2 class="text-xl font-semibold text-black">
                  Tracking and Performance Cookies
                </h2>
                <h3 class="text-xl font-semibold text-black">
                  Source: Third-Parties
                </h3>
                <div class="leading-6 text">
                  Type: Persistent Cookies Purpose: These cookies are used to
                  monitor and analyze how you interact with the Website,
                  including the pages you visit and the actions you take. The
                  information collected by these cookies may link back to you as
                  an individual user. This is because the information is
                  typically connected to a pseudonym tied to the device you're
                  using to access the Website. The data collected from these
                  cookies can also be used to test and evaluate new website
                  features, pages, and functionalities. To learn more about the
                  cookies we use and your options for managing cookies, please
                  refer to our Cookies Policy or the Cookies section of our
                  Privacy Policy.
                </div>
              </div>
            </div>

            <div class="p-2">
              <h1 class="text-blue-500 text-xl font-semibold">
                Handling of Your Personal Information
              </h1>
              <h6>
                The Company may handle Personal Information for the following
                purposes:
              </h6>
              <ol class="flex flex-col space-y-3 pt-3 text">
                <li>
                  <span class="font-bold">
                    To operate and maintain the Service:
                  </span>{" "}
                  This includes monitoring usage of the Service to ensure its
                  proper functioning.
                </li>
                <li>
                  <span class="font-bold"> To manage your account:</span> To
                  manage your registration and provide access to the features
                  available through the Service as a registered user.
                </li>
                <li>
                  <span class="font-bold">
                    {" "}
                    To fulfill contractual obligations:
                  </span>{" "}
                  To fulfill the terms of any agreement between you and the
                  Company, such as processing a purchase of products, items, or
                  services.
                </li>
                <li>
                  <span class="font-bold"> To communicate with you:</span> To
                  communicate with you through email, phone calls, text
                  messages, or other forms of electronic communication,
                  including push notifications from the mobile app, regarding
                  updates and important information related to the Service and
                  its features, security updates, and any other necessary
                  communications.
                </li>
                <li>
                  <span class="font-bold">
                    {" "}
                    To provide promotional information:
                  </span>{" "}
                  To provide you with news, special offers, and information
                  about similar products, services, and events, unless you have
                  opted out of receiving such information.
                </li>
                <li>
                  <span class="font-bold"> To address your requests:</span> To
                  respond to your requests and inquiries.
                </li>
                <li>
                  <span class="font-bold"> For business transfers:</span> In the
                  event of a merger, divestiture, restructuring, reorganization,
                  dissolution, or other sale or transfer of assets, the Company
                  may transfer Personal Information as part of the assets being
                  transferred.
                </li>
                <li>
                  <span class="font-bold"> For other purposes:</span> For
                  purposes such as data analysis, identifying usage trends,
                  evaluating promotional campaigns, and improving the Service,
                  its products, services, marketing, and your experience.
                </li>
              </ol>
            </div>
            <div>
              <div class="container text">
                <h3 class="">
                  We may share Your personal information in the following
                  situations:
                </h3>
                <ul class=" list-group-flush">
                  <li class=" font-weight-bold">
                    With Service Providers: We may share Your personal
                    information with Service Providers to monitor and analyze
                    the use of our Service, to contact You.
                  </li>
                  <li class=" font-weight-bold">
                    For business transfers: We may share or transfer Your
                    personal information in connection with, or during
                    negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li class=" font-weight-bold">
                    With Affiliates: We may share Your information with Our
                    affiliates, in which case we will require those affiliates
                    to honor this Privacy Policy. Affiliates include Our parent
                    company and any other subsidiaries, joint venture partners
                    or other companies that We control or that are under common
                    control with Us.
                  </li>
                  <li class=" font-weight-bold">
                    With business partners: We may share Your information with
                    Our business partners to offer You certain products,
                    services or promotions.
                  </li>
                  <li class=" font-weight-bold">
                    With other users: when You share personal information or
                    otherwise interact in the public areas with other users,
                    such information may be viewed by all users and may be
                    publicly distributed outside.
                  </li>
                  <li class=" font-weight-bold">
                    With Your consent: We may disclose Your personal information
                    for any other purpose with Your consent.
                  </li>
                </ul>
              </div>
              <h2 class="text-2xl font-semibold text-blue-500">
                Retention of Your Personal Data
              </h2>
              <div class="pb-3 leading-6">
                <p class="font-medium">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
              </div>
              <div class="pb-3 leading-6">
                <p class="font-medium">
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </div>
              <h2 class="text-2xl font-semibold text-blue-500">
                Transfer of Your Personal Data
              </h2>
              <div class="pb-3 leading-6 pt-2">
                <p class="font-medium">
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction. Your consent to
                  this Privacy Policy followed by Your submission of such
                  information represents Your agreement to that transfer. The
                  Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
              </div>
              <h3 class="pb-2 text-xl font-semibold text-blue-500">
                Disclosure of Your Personal Data
              </h3>
              <div class="pb-3">
                <h4 class="text-xl font-semibold text-blue-500">
                  Business Transactions
                </h4>
                <p class="pb-2">
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
              </div>
              <div class="pb-3">
                <h4 class="text-xl font-semibold text-blue-500">
                  Law enforcement
                </h4>
                <p class="pb-2">
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
              </div>
              <div class="pb-3">
                <h4 class="text-xl font-semibold text-blue-500">
                  Other legal requirements
                </h4>
                <p class="pb-2">
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul class="px-3 py-3 italic leading-7 text">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>{" "}
                </ul>
              </div>
              <div>
                <h1 class="text-xl font-semibold text-blue-500">
                  Security of Your Personal Data
                </h1>
                <p class="my-3">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
                <h1 class="text-3xl font-semibold">
                  Detailed Information on the Processing of Your Personal Data
                </h1>
                <p class="my-3">
                  The Service Providers We use may have access to Your Personal
                  Data. These third-party vendors collect, store, use, process
                  and transfer information about Your activity on Our Service in
                  accordance with their Privacy Policies.
                </p>
                <h2 class="text-xl font-semibold text-blue-500">Analytics</h2>
                <p class="my-3">
                  We may use third-party Service providers to monitor and
                  analyze the use of our Service. Google Analytics Google
                  Analytics is a web analytics service offered by Google that
                  tracks and reports website traffic. Google uses the data
                  collected to track and monitor the use of our Service. This
                  data is shared with other Google services. Google may use the
                  collected data to contextualize and personalize the ads of its
                  own advertising network. You can opt-out of having made your
                  activity on the Service available to Google Analytics by
                  installing the Google Analytics opt-out browser add-on. The
                  add-on prevents the Google Analytics JavaScript (ga.js,
                  analytics.js and dc.js) from sharing information with Google
                  Analytics about visits activity. You may opt-out of certain
                  Google Analytics features through your mobile device settings,
                  such as your device advertising settings or by following the
                  instructions provided by Google in their Privacy Policy:
                  https://policies.google.com/privacy
                </p>
                <p class="my-3">
                  For more information on the privacy practices of Google,
                  please visit the Google Privacy & Terms web page:
                  https://policies.google.com/privacy
                </p>
              </div>
              <h1 class="text-xl font-semibold text-blue-500">CCPA Privac</h1>
              <p>
                {" "}
                This privacy notice section for California residents supplements
                the information contained in Our Privacy Policy and it applies
                solely to all visitors, users, and others who reside in the
                State of California.
              </p>
              <h1 class="text-xl font-semibold text-blue-500">
                Categories of Personal Information Collected
              </h1>
              <p>
                {" "}
                We collect information that identifies, relates to, describes,
                references, is capable of being associated with, or could
                reasonably be linked, directly or indirectly, with a particular
                Consumer or Device. The following is a list of categories of
                personal information which we may collect or may have been
                collected from California residents within the last twelve (12)
                months. Please note that the categories and examples provided in
                the list below are those defined in the CCPA. This does not mean
                that all examples of that category of personal information were
                in fact collected by Us, but reflects our good faith belief to
                the best of our knowledge that some of that information from the
                applicable category may be and may have been collected. For
                example, certain categories of personal information would only
                be collected if You provided such personal information directly
                to Us.
              </p>
              <ul className="text">
                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category A: Identifiers
                  </h3>
                  <p>
                    Examples: A real name, alias, postal address, unique
                    personal identifier, online identifier, Internet Protocol
                    address, email address, account name, driver's license
                    number, passport number, or other similar identifiers.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category B: Personal information categories listed in the
                    California Customer Records statute (Cal. Civ. Code §
                    1798.80(e)).
                  </h3>
                  <p>
                    Examples: A name, signature, Social Security number,
                    physical characteristics or description, address, telephone
                    number, passport number, driver's license or state
                    identification card number, insurance policy number,
                    education, employment, employment history, bank account
                    number, credit card number, debit card number, or any other
                    financial information, medical information, or health
                    insurance information. Some personal information included in
                    this category may overlap with other categories.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category C: Protected classification characteristics under
                    California or federal law.
                  </h3>
                  <p>
                    Examples: Age (40 years or older), race, color, ancestry,
                    national origin, citizenship, religion or creed, marital
                    status, medical condition, physical or mental disability,
                    sex (including gender, gender identity, gender expression,
                    pregnancy or childbirth and related medical conditions),
                    sexual orientation, veteran or military status, genetic
                    information (including familial genetic information).
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category D: Commercial information.
                  </h3>
                  <p>
                    Examples: Records and history of products or services
                    purchased or considered.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category E: Biometric information.
                  </h3>
                  <p>
                    Examples: Genetic, physiological, behavioral, and biological
                    characteristics, or activity patterns used to extract a
                    template or other identifier or identifying information,
                    such as, fingerprints, faceprints, and voiceprints, iris or
                    retina scans, keystroke, gait, or other physical patterns,
                    and sleep, health, or exercise data.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category F: Internet or other similar network activity.
                  </h3>
                  <p>
                    Examples: Interaction with our Service or advertisement..
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category G: Geolocation data.
                  </h3>
                  <p>Examples: Approximate physical location.</p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: Yes
                  </h4>
                </li>

                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category H: Sensory data.
                  </h3>
                  <p>
                    Examples: Audio, electronic, visual, thermal, olfactory, or
                    similar information.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: No.
                  </h4>
                </li>
                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category I: Professional or employment-related information.
                  </h3>
                  <p>
                    {" "}
                    No. Examples: Current or past job history or performance
                    evaluations.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: No.
                  </h4>
                </li>
                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category J: Non-public education information (per the Family
                    Educational Rights and Privacy Act (20 U.S.C. Section 1232g,
                    34 C.F.R. Part 99)).
                  </h3>
                  <p>
                    Examples: Education records directly related to a student
                    maintained by an educational institution or party acting on
                    its behalf, such as grades, transcripts, class lists,
                    student schedules, student identification codes, student
                    financial information, or student disciplinary records.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: No.
                  </h4>
                </li>
                <li class="flex flex-col space-y-5 p-3">
                  <h3 class="text-xl font-semibold text-blue-500">
                    Category K: Inferences drawn from other personal
                    information.
                  </h3>
                  <p>
                    Examples: Profile reflecting a person's preferences,
                    characteristics, psychological trends, predispositions,
                    behavior, attitudes, intelligence, abilities, and aptitudes.
                  </p>
                  <h4 class="text-xl font-semibold text-blue-500">
                    Collected: No.
                  </h4>
                </li>
              </ul>
            </div>
            <p>
              Under CCPA, personal information does not include: Publicly
              available information from government records Deidentified or
              aggregated consumer information Information excluded from the
              CCPA's scope, such as: Health or medical information covered by
              the Health Insurance Portability and Accountability Act of 1996
              (HIPAA) and the California Confidentiality of Medical Information
              Act (CMIA) or clinical trial data Personal Information covered by
              certain sector-specific privacy laws, including the Fair Credit
              Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or
              California Financial Information Privacy Act (FIPA), and the
              Driver's Privacy Protection Act of 1994
            </p>
            {/* here */}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
