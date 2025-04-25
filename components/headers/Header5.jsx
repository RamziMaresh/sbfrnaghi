"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";
export default function Header5({ links }) {
  return (
    <div className="main-nav-sub full-wrapper navbar">
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/logo/main_logo_nobg.png"
            alt="Sameer_Company_Logo"
            width={270}
            height={202}
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav className="nav-co" links={links} />
          <li className="ms-3 me-2" />
          <li>
            <a
              href="mailto:sameer@galaxyexporters.com"
              className="opacity-1 no-hover"
              target="_blank"
            >
              <span
                className="btn btn-mod btn-small btn-border-w btn-circle"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">Contact Us</span>
                  <span className="btn-animate-y-2" >
                    Contact Us
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
