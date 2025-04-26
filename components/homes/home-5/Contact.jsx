"use client";
import { contactItems } from "@/data/contact";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import validator from 'validator'

export default function Contact() {
  //
  const [status, setStatus] = useState('');
  const form = useRef(null);

  const sendEmail = (e) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setStatus('SUCCESS')
            Swal.fire({
              title: "Successfully Sent",
              text: "Your message sent successfully, Will be contacting you within 24 hours. Thank you!",
              icon: "success"
            })
          },
          (error) => {
            setStatus('FAILED... ', error.text)
            Swal.fire({
              title: "Failed...! ",
              text: "Try again, or contact the support team to assest you.",
              icon: "failed"
            })


          },
        );
      e.target.reset()
    }
  };
  const [emailError, setEmailError] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [valid, setValid] = useState(true)



  // Email Validation
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }

  }


  return (
    <div className="container">
      {/* Contact Form */}
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form contact-form wow fadeInUp wch-unset"
            data-wow-delay=".5s"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Legel Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-sm round form-control"
                    placeholder="Enter your name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-sm round form-control"
                    placeholder="Enter your email"
                    required
                    data-error="Please enter your Email"
                    aria-required="true"
                  />
                  <span style={{ fontWeight: '', color: 'red' }}>{emailError}</span>
                </div>
              </div>


              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    className="input-sm round form-control"
                    placeholder="Enter your company name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    name="phone"
                    id="phone"
                    className="input-sm round form-control"
                    placeholder="Include country key"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="product_name">Product Name</label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="input-sm round form-control"
                    placeholder="Enter the product name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="input-sm round form-control"
                    placeholder=""
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="spot_contract">Spot or Contract</label>
                  <input
                    type="text"
                    name="spot_contract"
                    id="spot_contract"
                    className="input-sm round form-control"
                    placeholder=""
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="package">Package</label>
                  <input
                    type="text"
                    name="package"
                    id="package"
                    className="input-sm round form-control"
                    placeholder=""
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="shipping_mode">Shipping Mode</label>

                  <select
                    type="text"
                    name="shipping_mode"
                    id="shipping_mode"
                    className="input-sm round form-control"
                    placeholder=""
                    required
                    aria-required="true"

                  >
                    <option value="1">FOB</option>
                    <option value="2">CIF</option>
                  </select>

                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="destination">Destination (Name of the Country)</label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    className="input-sm round form-control"
                    placeholder=""
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="seaport">Seaport Name</label>
                  <input
                    type="text"
                    name="seaport"
                    id="seaport"
                    className="input-sm round form-control"
                    placeholder="Enter Seaport Name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-10">
                  <button
                    ref={form}
                    type="submit"
                    value="Send"
                    aria-controls="result"
                    className="submit_btn link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Send Message
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Send Message
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>

          <hr />
          <div className="row mt-n10 mb-60 mb-xs-40 mt-60 ">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                {/* Phone */}
                {contactItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className={`col-md-6 col-lg-4 mb-md-30 `}>
                      <div className="contact-item wow fadeScaleIn">
                        <div className="ci-icon">
                          <i className={item.iconClass} />
                        </div>
                        <h4 className="ci-title">{item.title}</h4>
                        <div className="ci-text ">{item.text}</div>
                        {/** 
                        <div className="ci-link">
                          <a
                            href={item.link.url}
                            target={item.link.target}
                            rel={item.link.rel}
                          >
                            {item.link.text}
                          </a>
                        </div>{" "}
                        */}
                      </div>
                    </div>{" "}
                  </React.Fragment>
                ))}
                {/* End Email */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Form */}
    </div>
  );
}
