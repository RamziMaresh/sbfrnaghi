import React from "react";
import About from "./About";
import Product from "./Products";
import Contact from "./Contact";

export const metadata = {
  title: {
    title: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
    template: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
    default: "Sameer Naghi Est for petroleum Trading | Saudi Arabia", // a default is required when creating a template
    description: "Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
  },
};


export default function Home5() {
  return (
    <>
      <section
        className={`page-section  scrollSpysection pb-0`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center mb-md-50">
              <div>
                <div className="wow linesAnimIn" data-splitting="lines">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">About</span> Us
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      Sameer Naghi for Petroleum products is an Enterprise was established in 2020. The Enterprise role is to assist buyers find their products around the world.
                      We are also authorised to Market for others, and function as Mediators for other products as well.
                      Commission is to be paid by the sellers first, if not then the buyer is compelled to pay our commission.
                      It is very necessary to state that only direct buyers are allowed to contact us, Brokers are not allowed to apply for products they will supply to others.
                      <br />
                      Any buyer applies to communicate with the seller, the must pay 50% of the commission or more to connect them with the sellers.
                    </p>
                  </div>
                </div>
                <div className="local-scroll wow fadeInUpShort wch-unset">
                  <>
                    {" "}
                    <a
                      href="#services"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Our Supply Products {" "}
                        <span className="visually-hidden">Products Supply</span>{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Products Supply {" "}
                        <span className="visually-hidden">Read !</span>{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>

                </div>
              </div>
            </div>
            <About />
          </div>
        </div>
      </section>
      {/**
      <section
        className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 parallax-6 light-content"
        style={{
          backgroundImage: "url(/assets/images/about/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6 col-xl-5">
              <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                <div className="call-action-1-image-1 round">
                  <Image
                    src="/assets/images/about/call-1.jpg"
                    width={678}
                    height={840}
                    alt="Image Description"
                  />
                </div>

              </div>
            </div>
            <div className="col-md-6 offset-xl-1 d-flex align-items-center">
              <div className="row small-section">
                <div className="col-xl-11">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Looking for a services | have any inquiries?
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      If you are a buyer, kindly contact ua throught the form below or whatsApp message.
                    </p>
                  </div>
                  <div className="local-scroll">
                      <>
                        {" "}
                        <a
                          href="#contact"
                          className="link-hover-anim link-circle-1 align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            Contact Us{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            Contact Us{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       */}




      <section
        className={`page-section pt-0  scrollSpysection`}
        id="services"
      >
        <Product />
      </section>

      <section

        className="page-section -bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/assets/images/banner/sec4.jpg)",
        }}
        id="sales"
      >
        <div className="container">
          <div className="row mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-sm-20">
                <span className="text-white">Sales</span>  Order
              </h2>
              <div className="">
                If you are a buyer, kindly contact the sales department as bellow:
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`page-section-2 `}
      >
        <Contact />
      </section>
    </>
  );
}
