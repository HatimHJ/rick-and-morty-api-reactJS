import React, { useEffect, useState } from "react";

const Card = ({ char: { gender, id, image, name, type, status, species } }) => {
  return (
    <>
      <div className={`col-md-4 mb-4`}>
        <div className="card mb-4 ">
          <div className={`card custom-shardow`}>
            {/* image */}
            <div className="image position-relative">
              <span
                className={`${
                  status == "Alive"
                    ? "bg-success"
                    : status === "Dead"
                    ? "bg-danger"
                    : "bg-secondary"
                } badge position-absolute top-0 end-0 p-2`}
              >
                {status}
              </span>
              <img src={image} className="card-img-top" alt={name} />
            </div>
            {/* card header */}
            <div className="card-header ">
              <h5
                className="card-title "
                style={{
                  fontSize: `${name.length > 20 ? "1.1rem" : "1.25rem"}`,
                }}
              >
                {name}
              </h5>
              <div className="row">
                <div className="col-md-5 bg-primary bg-opacity-50 fw-bold text-primary">
                  <p className="card-text">gender</p>
                </div>
                <div className="col-md-7 bg-primary text-white">
                  <p className="card-text fs-6 fw-bold">{gender}</p>
                </div>
              </div>
              <div className="row border-top">
                <div className="col-md-5 bg-danger  bg-opacity-50 fw-bold text-danger">
                  <p className="card-text">species</p>
                </div>
                <div className="col-md-7 bg-danger text-white">
                  <p className="card-text fs-6 fw-bold">{species}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
