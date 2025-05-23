import Footer5 from "@/components/footers/Footer5";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata = {
  title:
    "Sameer Naghi Est for Petroleum Trading | Saudi Arabia",
  description:
    "Petroleum Supply. Our services are Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
};
export default function MainAboutPage1() {
  return (
    <>
      <div className="">
        <div className="page" id="top">
          <>
            <nav className="main-nav ">
              <div className="main-nav-sub full-wrapper">

                <div className="nav-logo-wrap local-scroll">
                  <Link href={`/`} className="logo">
                    <Image
                      src="/assets/images/logo/main_logo.jpg"
                      alt="SBFT Logo"
                      width={105}
                      height={34}
                      className="logo-white"
                    />
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="mobile-nav" role="button" tabIndex={0}>
                  <i className="mobile-nav-icon" />
                  <span className="visually-hidden">Menu</span>
                </div>
                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                  <ul className="clearlist scroll-nav local-scroll justify-content-end">
                    <li className="active">
                      <a href="mailto:ibthemes21@gmail.com">
                        <i className="mi-email align-center" />
                        sameer@galaxyexporters.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mi-call align-center" /> (+966)50-562-5277
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Main Menu */}
              </div>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
              <section
                className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-3.jpg)",
                }}
                id="home"
              >
                <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                  {/* Home Section Content */}
                  <div className="home-content">
                    <div className="row">
                      <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="hs-wrap">
                          <div className="wow fadeInUp" data-wow-delay=".1s">
                            <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                          </div>
                          <div
                            className="mb-40 mb-sm-30 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <h2 className="section-descr mb-20">
                              The page you were looking for could not be found.
                            </h2>
                          </div>
                          <div
                            className="local-scroll wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <Link
                              href={`/`}
                              className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                            >
                              <i className="mi-arrow-left size-24 align-center" />
                              <span>Back To Home Page</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </section>
              {/* End Home Section */}
            </main>
          </>
          <Footer5 />
        </div>{" "}
      </div>
    </>
  );
}
