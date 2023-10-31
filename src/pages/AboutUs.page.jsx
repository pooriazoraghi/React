import React from "react";

import aboutImg from "../assets/images/about.png";
const AboutUsPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row pt-2">
          <div className="col-12 bg-info p-3 rounded">
            <h5>درباره ما</h5>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-7 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="col-md-5 text-center">
            <img
              src={aboutImg}
              alt="aboutImg"
              className="img-fluid about-img"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUsPage;
