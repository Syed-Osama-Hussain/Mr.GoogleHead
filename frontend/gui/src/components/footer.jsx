import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div
            className="col-xs-12 col-sm-4 col-md-4"
            style={{ borderLeft: "3px solid #9d9d9d" }}
          >
            <div className="inner-div">
              <h5 style={{ textAlign: "center" }}>
                <a href="/landing">
                  <i className="fa fa-angle-double-right" /> Home
                </a>
              </h5>
              <ul className=" list-unstyled list-inline social text-center element">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-4 col-md-4"
            style={{ borderLeft: "3px solid #9d9d9d" }}
          >
            <div className="inner-div">
              <h5 style={{ textAlign: "center" }}>
                <a href="#">
                  <i className="fa fa-angle-double-right" /> About
                </a>
              </h5>
              <ul className=" list-unstyled list-inline social text-center element">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-4 col-md-4"
            style={{ borderLeft: "3px solid #9d9d9d" }}
          >
            <div className="inner-div">
              <h5 style={{ textAlign: "center" }}>
                <a href="#">
                  <i className="fa fa-angle-double-right" /> Contact Us
                </a>
              </h5>
              <ul className="list-unstyled list-inline social text-center element">
                <li className="list-inline-item">
                  <a href="#" target="_blank">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ display: "block" }}>
          Mr.GoogleHead. All right Reserved. Developed by{" "}
          <a href="https://www.facebook.com/S.osama.hussain">
            Syed Osama Hussain
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
