import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <div className="parent">
          <div className="logo">
            <img src="img/logo.png" alt="" className="footer-img" />
          </div>
          <div className="links">
            <HashLink to="/#builds" className="text-muted">
              Latest Builds
            </HashLink>
            <HashLink to="/#process" className="text-muted">
              Process
            </HashLink>
            <HashLink to="/#services" className="text-muted">
              Services
            </HashLink>
            <HashLink to="/#contact" className="text-muted">
              Contact Us
            </HashLink>
            <Link to="/projects" className="text-muted">
              Project
            </Link>
          </div>
          <div className="icons">
            <Link to="#" className="text-muted">
              <FacebookIcon />
            </Link>
            <Link to="#" className="text-muted">
              <InstagramIcon />
            </Link>
            <Link to="#" className="text-muted">
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <div className="parent2">
          <p className="copy-right text-white">© 2022 Your Name </p>
          <h6 className="text-white">Email: info@shilohcreative.com</h6>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
