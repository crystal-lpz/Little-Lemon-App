import React from "react";
import small_logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer className="">
      <section>
        <div className="company-info">
          <img src={small_logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Town Street, Chicago
            </li>
            <li>
              Phone: <br /> (123)456-7890
            </li>
            <li>
              Email: <br /> little@lemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Meta</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Threads</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
