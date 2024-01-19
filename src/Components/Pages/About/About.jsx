import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import { MdFacebook } from "react-icons/md";
import Header from "../../HelperComp/Header";


const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Header
        title="About"
        subtitle="Full Stack Developer."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        I am a Full Stack Web Developer with 1+ years of experience in building web and 
mobile applications.
        </p>{" "}
        <br />
        <p>
        I have a deep understanding of software engineering principles like algorithm de sign, coding, and data structures.
        
        </p><br />
        <p> I am proficient in JavaScript and have experience with MERN Stack. I am an excellent problem solver who can think out of the box and can work well independently as well as in teams. I thrive in fast-paced environments and excel on challenging projects.</p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          {/* <MdFacebook className="social-btn" /> */}
          <a
                  href='https://www.instagram.com/sunil.kuligod/'
                  target="_blank"
                  
                >
          <AiFillInstagram className="social-btn" /></a>
          <a
                  href='https://www.linkedin.com/in/sunil-kuligod21/'
                  target="_blank"
                  
                >
          <AiFillGithub className="social-btn" /></a>
          <a
                  href='https://github.com/Sunil-B-K'
                  target="_blank"
                  
                >
          <AiFillLinkedin className="social-btn" /></a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;