import React from "react";
import aboutcover from "../image/aboutcover.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mt-[200px]">
      <div>
        <img
          src={aboutcover}
          alt="aboutcover"
          className="rounded-2xl mt-5 h-full w-full object-cover"
        />
      </div>
      <div className="flex gap-3 m-4 font-medium">
        <Link to="/">
          <p className="text-white/50 text-xl">Home</p>
        </Link>
        <p>/</p>
        <p className="text-white text-xl">About Legend Cinema</p>
      </div>
      <div className="m-4 mt-[50px]">
        <h1 className="text-4xl text-white font-bold">About Legend Cinema</h1>
      </div>
      <div>
        <p className="text-white font-normal m-4 mt-[50px]">
          <p>About Legend Cinema Cambodia.</p>
          <p>Legend Cinema is the no. 1 and the first
          International Standard Cinema in Cambodia, created and operated by
          Khmer since 2011. Our rapid growth and expansion from 1 to 13 cinema
          locations in the past 12 years across the country, has shown our
          strength in delivery and influence in the film and entertainment
          industry.</p> 
          Today, we have successfully implemented and deployed
          advanced cinema technologies and levelled up our offerings, beyond
          cinema norms. Our team is dedicated to providing top tier immersive
          cinema experience and excellent services with the essence of Khmer
          hospitality. With our new direction in place, we are determined to
          inspire, drive change and make an impact in the industry, and exceed
          expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
