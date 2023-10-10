import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.tmdb}>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
          />
          <button className="btn btn-light fw-bold text-info">Hi, rahulwarkade!</button>
        </div>
        <div className={style.basic}>
          <h4>THE BASICS</h4>
          <p>About TMDB</p>
          <p>Contact Us</p>
          <p>Support Forums</p>
          <p>API</p>
          <p>System Status</p>
        </div>
        <div className={style.involved}>
          <h4>GET INVOLVED</h4>
          <p>Contribution Bible</p>
          <p>Add New Movie</p>
          <p>Add New TV Show</p>
        </div>
        <div className={style.community}>
          <h4>COMMUNITY</h4>
          <p>Guidlines</p>
          <p>Discussions</p>
          <p>Leaderboard</p>
          <p>Twiter</p>
        </div>
        <div className={style.legal}>
          <h4>LEGAL</h4>
          <p>Terms of Use</p>
          <p>API Terms of Use</p>
          <p>Privacy Policy</p>
          <p>DMCA Takedown Request</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
