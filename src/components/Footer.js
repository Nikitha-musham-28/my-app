import "./FooterStyles.css";
import React from 'react'
import{FaPhone,FaMailBulk,FaLinkedin,FaGithub} from "react-icons/fa"
const Footer = () => {
  return (
   <div className="footer">
   <div className="footer-container">
    <div className="left">
     <div className="phone">
      <h4><FaPhone size={20} style={{color: "#fff",marginRight:"2rem"}}/>
      9390984487</h4>
    </div>
    <div className="email">
      <h4><FaMailBulk size={20} style={{color: "#fff",marginRight:"2rem"}}/>
      mushamgayathridevi@gmail.com</h4>
    </div>
    </div>
    <div className="right">
     <div className="social">
      <FaLinkedin size={30} style={{color: "#fff",marginRight:"1rem"}}/>
      <FaGithub size={30} style={{color: "#fff",marginRight:"1rem"}}/></div>

    </div>
   </div>
  </div>

  )
}
export default Footer 