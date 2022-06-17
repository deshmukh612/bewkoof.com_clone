import React, { useState } from "react";
import styles from "./Fotter.module.css";
import {
  FaApple,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };
  return (
    <div className={styles.mainfooter}>
      <div className={styles.top}>
        <a href="/" className={styles.bew}>
          Bewakoof
        </a>
        <div className={styles.link}>
          <div>
            <h5 className={styles.tophead}>CUSTERMER SERVICES</h5>
            <a href="/">Contact Us</a>
            <br />
            <a href="/"> Track Order</a>
            <br />
            <a href="/"> Return Order</a> <br />
            <a href="/"> Cancel Order</a> <br />
          </div>
          <div>
            <h5 className={styles.tophead}>COMPANY</h5>
            <a href="/">We're Hiring</a> <br />
            <a href="/">Terms & Conditions</a> <br />
            <a href="/">Privacy Policy</a> <br />
            <a href="/">Blog</a> <br />
          </div>
          <div>
            <h5 className={styles.tophead}>CONNECT WITH US</h5>
            <div>
              <div className={styles.connect}>
                <a href="https://www.facebook.com/bewakoofcom">
                  <FaFacebook id={styles.ficon} />
                </a>
                <p className={styles.con}>4.7M People Like this</p>
              </div>
              <div className={styles.connect}>
                <a href="https://www.instagram.com/bewakoofofficial/">
                  <FaInstagram id={styles.ticon} />
                </a>
                <p className={styles.con}>1M Followers</p>
              </div>
              <div className={styles.contact}>
                <a href="https://www.twitter.com">
                  <FaTwitterSquare id={styles.ticon} />
                </a>
                <a href="https://in.pinterest.com/bewakoof/">
                  <FaPinterest id={styles.ticon} />
                </a>
                <a href="https://www.snapchat.com/add/bewakoof_tv">
                  <FaSnapchat id={styles.ticon} />
                </a>
                <a href="https://apps.apple.com/in/app/bewakoof/id1100190514">
                  <FaApple id={styles.ticon} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className={styles.tophead}>KEEP UP TO DATE</h5>
            <div>
              <input placeholder="Enter Email Id" onChange={handleChange} />
              <button onClick={handleSubmit}>Subscribe</button>
            </div>
            {flag ? <div>User subscribed</div> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
