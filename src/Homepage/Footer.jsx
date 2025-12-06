import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import visa from "../image/visa.png";
import mastercard from "../image/mastercard.png";
import aba from "../image/aba.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black/50 mt-10  px-[200px] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 mx-5 pt-3 ">
          <div className="text-white text-2xl font-bold">
            <h2>Company</h2>
          </div>
          <div className="text-white/50 text-[16px] flex flex-col gap-3 font-normal">
            <Link to="/about">
              <p className="hover:text-white cursor-pointer">About Us</p>
            </Link>
            <Link to="/contact">
              <p className="hover:text-white cursor-pointer">Contact Us</p>
            </Link>
            <Link to="/cinema">
              <p className="hover:text-white cursor-pointer">Cinemas</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 mx-5 pt-3 ">
          <div className="text-white text-2xl font-bold">
            <h2>More</h2>
          </div>
          <div className="text-white/50 text-[16px] flex flex-col gap-3 font-normal">
            <Link to="/offers">
              <p className="hover:text-white cursor-pointer">Promotions</p>
            </Link>
            <Link to="/activity"><p className="hover:text-white cursor-pointer">News & Activity</p></Link>
            <Link to="/ticket">
              {" "}
              <p className="hover:text-white cursor-pointer">My Ticket</p>
            </Link>
            <Link to="/terms">
              <p className="hover:text-white cursor-pointer">
                Terms & Conditions
              </p>
            </Link>
            <Link to="/Privacy">
              <p className="hover:text-white cursor-pointer">
                Pravacy & Policy
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5 mx-5 pt-3 ">
            <div className="text-white text-2xl font-bold">
              <h2>Dowload Our App</h2>
            </div>
            <div className="flex gap-2">
              <Link to={"https://play.google.com/store/apps/details?id=kh.com.legend&hl=en"}><IoLogoGooglePlaystore className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20" /></Link>
              <Link to={"https://apps.apple.com/us/app/legend-cinema/id1494420578"}><FaApple className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20 " /></Link>
            </div>
            <div className="text-white text-2xl font-bold">
              <h2>Follow Our Social Media</h2>
            </div>
            <div className="flex gap-2">
              <Link
                to={
                  "https://web.facebook.com/LegendCinemas?mibextid=LQQJ4d&_rdc=1&_rdr#"
                }
              >
                <FaFacebook className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20" />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/legendcinemas/?igshid=MzRlODBiNWFlZA%3D%3D"
                }
              >
                <FaSquareInstagram className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20 " />
              </Link>
              <Link to={"https://www.youtube.com/@LegendCinemasKh"}>
                <IoLogoYoutube className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20" />
              </Link>
              <Link
                to={"https://www.tiktok.com/@legendcinema?_t=8eX8Pz2BlvL&_r=1"}
              >
                <FaTiktok className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20 " />
              </Link>
              <Link to={"https://t.me/legendcinemas"}>
                <FaTelegram className="text-white border border-white/50 rounded-3xl text-5xl px-2 py-2 hover:bg-white/20 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 pt-3">
        <p className="text-white text-2xl font-bold">Payment</p>
        <div className="flex items-center gap-5 mt-5 ">
          <img src={aba} alt="aba" className="w-[200px]" />
          <img src={visa} alt="visa" className="w-[100px]" />
          <img src={mastercard} alt="mastercard" className="w-[50px]" />
        </div>
      </div>
      <div class="h-[1px] bg-white/20 bg-gradient-270-deg from-transparent via-gray/50 via-[51.56%] to-transparent my-6 md:mb-8 md:mt-12"></div>
      <p className="text-center text-white p-8">All right reserved ® 2023 </p>
    </div>
  );
}

export default Footer;
