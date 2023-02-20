import SectionHeading from "../../../components/SectionHeading"

import Service from "./Service"


const OurServices = ({data}) => {

    return (

      <section className="our_services_area section-padding-0-100 clearfix">
        <div className="container">
          <SectionHeading
            
            text="HOME OF RACD DAO"
          />
    <h2 className="text-center mb-100 bold"  style={{color: "#fed136",fontWeight:"700"}}>Key Features</h2>
          <div className="row">
    
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;