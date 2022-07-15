import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ results, page }) => {
  return (
    <>
      {results
        ? results.map((char) => {
            return <Card page={page} key={char.id} char={{ ...char }} />;
          })
        : "nooooo"}
    </>
  );
};

export default Cards;

// return (
//   <div className={`col-md-4 ${x.test} mb-4`} key={id}>
//     <div className="card mb-4 ">
//       <div className={`card custom-shardow`}>
//         {/* image */}
//         <div className="image position-relative">
//           <span
//             className={`${
//               status == "Alive"
//                 ? "bg-success"
//                 : status === "Dead"
//                 ? "bg-danger"
//                 : "bg-secondary"
//             } badge position-absolute top-0 end-0 p-2`}
//           >
//             {status}
//           </span>
//           <img src={image} className="card-img-top" alt={name} />
//         </div>
//         {/* card header */}
//         <div className="card-header ">
//           <h5 className="card-title ">{name}</h5>
//           <div className="row">
//             <div className="col-md-5 bg-primary bg-opacity-50 fw-bold text-primary">
//               <p className="card-text">gender</p>
//             </div>
//             <div className="col-md-7 bg-primary text-white">
//               <p className="card-text fs-6 fw-bold">{gender}</p>
//             </div>
//           </div>
//           <div className="row border-top">
//             <div className="col-md-5 bg-danger  bg-opacity-50 fw-bold text-danger">
//               <p className="card-text">species</p>
//             </div>
//             <div className="col-md-7 bg-danger text-white">
//               <p className="card-text fs-6 fw-bold">{species}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
