import React from "react";
import Spinner from "../components/ui/Spinner.component";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row pt-2">
          <div className="col-12 bg-warning p-3 rounded">
            <h5>صفحه اصلی</h5>
          </div>


          <Spinner />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
