import React from 'react'
import Header from '../HelperComp/Header'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
 {/* heading */}
 <Header
        title="Contact"
        subtitle="Get In Touch."
      />
       {/* text-slate-500 */}
      <div className="mt-10">
      <div className='flex gap-2 mb-2 text-4xl items-center'>   <AiOutlineMail  /> <h1 className=" font-semibold">Email</h1></div>
      <p className="line-clamp-2 text-gray-500 text-2xl">sunilkuligod21@gmail.com</p>
   <div className='flex gap-2 mt-5 mb-2 text-4xl items-center'>  <AiOutlinePhone  /> <h1 className=" font-semibold  text-black">Phone</h1></div>
      <p className="line-clamp-2 text-gray-500 text-2xl">+91 77607-66220</p>
      {/* Social Links */}
      <div className="flex space-x-4 mt-10 text-slate-500">
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

  )
}

export default Contact
