import React from "react";
import "./FooterStyle.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            h
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Saharanpur</p>
              <p>Uttar Pradesh, India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              +91 8394099490
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              kavishsingh0707@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div>
            {/* <h4>About Me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium consequuntur molestiae iusto quod nihil at mod</p> */}
            <h4>Coding Profiles</h4>
            <p>
              I have solved 500+ problems across different platforms which shows
              my knowledge in DSA and my ability in problem solving.
            </p>
          </div>
          <div className="coding-profile">
            <Link to={"https://leetcode.com/kavish_7722/"} target="_blank">
              <div className="codingiconbox">
                <SiLeetcode
                  size={30}
                  style={{ color: "white", marginRight: "1rem" }}
                />
              </div>
            </Link>

            <Link
              to={"https://auth.geeksforgeeks.org/user/kavish_07/practice"}
              target="_blank"
            >
              <div className="codingiconbox">
                <SiGeeksforgeeks
                  size={30}
                  style={{ color: "white", marginRight: "1rem" }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="social-media">
        <div className="iconbox">
          <Link
            to={"https://instagram.com/kavish.singh.7?igshid=OGQ5ZDc2ODk2ZA=="}
            target="_blank"
          >
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </Link>
        </div>

        <div className="iconbox">
          <Link
            to={"https://www.linkedin.com/in/kavish-singh/"}
            target="_blank"
          >
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </Link>
        </div>
        <div className="iconbox">
          <Link
            to={"https://github.com/Kavish7702?tab=repositories"}
            target="_blank"
          >
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </Link>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>&copy; All rights reserved</p>
    </div>
  );
};

export default Footer;
