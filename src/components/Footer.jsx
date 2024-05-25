import React from "react";
import insta from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#333333] text-white p-5">
      <div>
        <ul>
          <li className="flex justify-between items-center h-10">About Us</li>
          <li className="flex justify-between items-center h-10">We're Hiring</li>
          <li className="flex justify-between items-center h-10">Hire interns for your company</li>
          <li className="flex justify-between items-center h-10">Post a Job</li>
        </ul>
        <ul>
          <li className="flex justify-between items-center h-10">Team Diary</li>
          <li className="flex justify-between items-center h-10">Blog</li>
          <li className="flex justify-between items-center h-10">Our Services</li>
        </ul>
        <ul>
          <li className="flex justify-between items-center h-10">Terms & Conditions</li>
          <li className="flex justify-between items-center h-10">Privacy</li>
          <li className="flex justify-between items-center h-10">Contact Us</li>
        </ul>
        <ul>
          <li className="flex justify-between items-center h-10">Sitemap</li>
          <li className="flex justify-between items-center h-10">College TPO registration</li>
          <li className="flex justify-between items-center h-10">List of Companies
          </li>
        </ul>
      </div>
      <div>
        <div className="py-2 w-full border-b-2 flex flex-col gap-3">
          <a href="#">
            <button className="flex gap-2 bg-primary text-white cursor-pointer px-3 py-2 text-sm rounded">
              <i class="ri-google-play-line"></i> Get Android App
            </button>
          </a>
          <div className="w-full flex gap-2">
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <p className="h-10 flex items-center">
          &copy; Copyright 2024 Internify
        </p>
      </div>
    </div>
  );
};

export default Footer;
