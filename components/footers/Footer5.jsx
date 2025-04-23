import { socialMediaLinks } from "@/data/footer";
import React from "react";
import Image from "next/image";

export default function Footer5() {
  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap">
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}

      {/* Social Links */}
      <div className="footer-social-links mb-60">
        {socialMediaLinks.map((elm, i) => (
          <a
            href={elm.href}
            key={i}
            title="Facebook"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="visually-hidden">{elm.name}</span>
            <i className={elm.iconClass} />
          </a>
        ))}
      </div>

      {/* End Social Links */}
      {/* Footer Text */}
      <div className="footer-text">
        {/* Copyright */}
        <div>
            © {new Date().getFullYear()} | Sameer Naghi for petrochemical Trading    
        </div>
        {/* End Copyright */}
        <div className="footer-made">All rights reserved</div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
