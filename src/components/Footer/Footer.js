import React from "react";
import "../Footer/Footer.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "../../assest/icons";
import { Link } from "react-router-dom";
export const Footer = () => {
  const style={color:"white"}
  return (
    <div className="footerContainer">
      <div className="aboutUs footerColumn">
        {" "}
        <h2 className="lineHeight">About Us</h2>
        <p>
          Clothify is a fashion e-commerce website website that provides
          high-quality products to our customers at affordable prices.
        </p>
      </div>

      <div className="contactUs footerColumn">
        <h2 className="lineHeight">Contact Us</h2>
        <p>645 Commercial Street, Banglore, India</p>
        <p className="lineHeight">(+91)1234567890</p>
        <p>info@Clothify.com</p>
      </div>

      <div className="followUs footerColumn">
        <h2 className="lineHeight">Follow Us</h2>
        <li className="followUsLink">
          <Link
            target="_blank"
            to="https://instagram.com/acousticomofficial?igshid=ZGUzMzM3NWJiOQ=="
          >
            <AiOutlineInstagram size="25" style={style}/>
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/omkar-srinivasa-488401259/"
          >
            <AiFillLinkedin size="25" style={style}/>
          </Link>
          <Link target="_blank" to="https://github.com/Acousticom">
            <AiFillGithub size="25" style={style}/>
          </Link>
          <Link target="_blank" to="https://twitter.com/OmkarSrinivasa">
            <AiOutlineTwitter size="25" style={style}/>
          </Link>
        </li>
      </div>
    </div>
  );
};
