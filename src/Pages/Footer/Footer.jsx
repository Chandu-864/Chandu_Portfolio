import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer-con">
            <p>&copy; {new Date().getFullYear()} <span>Chandu Thalati</span> All rights reserved.</p>
            <ul className="links">
                <li>
                    <a href='https://www.linkedin.com/in/chandu-thalati-268839267/' target='_blank'>
                        <FaLinkedin  style={{color: '#0A66C2', background:'white', fontSize: '27px'}} />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Chandu-864/My-Web-Projects' target='_blank'>
                        <FaGithubSquare  style={{color: '#6e5494', background:'white', fontSize: '27px'}} />
                    </a>
                </li>
                <li>
                    <a href="mailto:chanduthalati@gmail.com">
                        <BiLogoGmail style={{color: '#EA4335', background:'white', fontSize: '27px'}} />
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer