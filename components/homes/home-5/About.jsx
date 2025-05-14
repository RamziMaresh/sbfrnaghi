import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
  default: "Sameer Naghi Est for petroleum Trading | Saudi Arabia", // a default is required when creating a template
  description: "Sameer Naghi for Petroleum products is an Enterprise was established in 2020. The Enterprise role is to assist buyers find their products around the world. ",
};


export default function About() {
  return (
    <div className="col-lg-6 offset-lg-1 pb-100">
      <div className="row">
        <div
          className="col-sm-6 pt-60 pt-xs-0 mb-xs-40"
          data-rellax-y=""
          data-rellax-speed="-0.5"
          data-rellax-percentage="0.5"
        >

          <Image
            src="/assets/images/banner/abo01.jpg"
            width={400}
            height={489}
            className="w-100 round"
            alt="about-img1"
          />
        </div>
        <div
          className="col-sm-6"
          data-rellax-y=""
          data-rellax-speed="0.5"
          data-rellax-percentage="0.5"
        >
          <Image
            src="/assets/images/banner/abo02.jpg"
            width={400}
            height={489}
            className="w-100 round"
            
          />

        </div>
      </div>
    </div>
  );
}
