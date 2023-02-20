const SectionHeading = ({
	title,
	text,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle="",
	textDown="This timeline details our funding and development goals"
}) => {

  return (
  	<>
  	{img ? (
	      <div className="section-heading text-center">	      		
	        <div className="dream-dots justify-content-center" data-aos="fade-up">
	          <img src={img} alt="" />
	        </div>
	        <h2 data-aos="fade-up">{title}</h2>
	        <p data-aos="fade-up">{text}</p>
	      </div>
      	):(
	      <div className="section-heading text-center">	      	
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
            {text && <h2 data-aos="fade-up">{text}</h2>}
            <p data-aos="fade-up">"At Rise Artist Collective and the Rise Eco Platform, our mission is to create better blockchain Web3 communities one neighborhood at a time. We are a diverse community of philanthropists, scientists, content creators, artists, engineers, musicians, environmentalists, educators, financial experts, humanitarian leaders, conservationists, and more, united in our commitment to finding real-world solutions to the challenges facing our humanity. We believe in equal opportunity and equal voice for all members, and value contributions to the community above all else. Through the Rise Eco Platform, we aim to provide guidance and secure solutions to help individuals and organizations transition to the future of Web3. Together, we strive to rise above the limitations of the current paradigm and create a better future for all."</p>
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;