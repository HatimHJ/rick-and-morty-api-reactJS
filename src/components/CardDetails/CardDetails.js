import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const { name, image, type, gender, species, status } = info;
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setInfo(data);
    })();
  }, [api]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 col-sm-12">
          <div className="card position-relative" style={{ width: "" }}>
            <span className=" position-absolute top-0 end-0 badge bg-primary p-2">
              {status}
            </span>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text ">
                <span className="  bg-primary bg-opacity-50 text-primary p-2">
                  type
                </span>
                <span className="  bg-primary text-light p-2">
                  {type ? type : "unknown"}
                </span>
              </p>
              <p className="card-text ">
                <span className="  bg-primary bg-opacity-50 text-primary p-2">
                  gender
                </span>
                <span className="  bg-primary text-light p-2">
                  {gender ? gender : "unknown"}
                </span>
              </p>
              <p className="card-text ">
                <span className="  bg-primary bg-opacity-50 text-primary p-2">
                  species
                </span>
                <span className="  bg-primary text-light p-2">
                  {species ? species : "unknown"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
