import React from "react";
import contactImg from "../assets/images/contact.png";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row pt-2">
          <div className="col-12 bg-info p-3 rounded">
            <h5>تماس با ما</h5>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-7 mt-3">
            <div>
              <h6>
                <FaPhone />
                <span> : +98 912 555 55</span>
              </h6>
              <h6>
                <MdEmail />
                <span> : test@arzedigital.com</span>
              </h6>
              <h6>
                <FaAddressCard />
                <span> : Iran.Tehran.Shahran St</span>
              </h6>
            </div>
            <div className="pt-3">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  ایمیل خود راوارد کنید
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  متن ایمیل خود را وارد کنید
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary mb-3">ارسال ایمیل</button>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={contactImg}
              alt="contactImg"
              className="img-fluid contact-img"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUsPage;
