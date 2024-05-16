import "./HeroimgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-img.png";
import {Link} from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
     <div className="mask">
      <img className="into-img" src={IntroImg}/>
     </div>
     <div className="content">
      <p> Hello, I'M GAYATHRI.</p>
      <h1> A 3<sup>rd</sup>  year student at Mallareddy University,<br></br>
AI & ML Specialization.</h1>
      <div>
        <Link to="/project" className="btn"> Projects</Link>
        <Link to ="/contact" className="btn btn-light"> Contact</Link>
      </div>
     </div>
    </div>
  )
}

export default Heroimg