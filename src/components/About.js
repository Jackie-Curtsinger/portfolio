import React from 'react';
import Header from './header';
import Contact from './Contact';
import Testimonial from './testimonial'
import data from './data';

const About = () =>{
return (
  <>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>
      <Testimonial reference = {data.reference}></Testimonial>
      <div>
        <Contact
          contactEmail={data.contactEmail}
          contactPara={data.contactPara}
          socialLinks={data.social}
        ></Contact>
      </div>
    </div>
  </>
);
}
export default About;
