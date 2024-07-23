import React from "react";
const Hero = () => {
  return (
    <div className="vh-100 heroSection">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Hero section</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odit esse natus eligendi. Enim animi eveniet quam tempore corporis
            doloribus, dicta quasi repellat nesciunt porro unde corrupti
            similique totam earum.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
