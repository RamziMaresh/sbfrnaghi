import React from "react";
import Image from "next/image";
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
            src="/assets/images/about/about01.jpg"
            width={400}
            height={489}
            className="w-100 round"
            alt="Image Description"
          />
        </div>
        <div
          className="col-sm-6"
          data-rellax-y=""
          data-rellax-speed="0.5"
          data-rellax-percentage="0.5"
        >
          <Image
            src="/assets/images/about/about02.jpg"
            width={400}
            height={489}
            className="w-100 round"
            alt="Image Description"
          />

        </div>
      </div>
    </div>
  );
}
