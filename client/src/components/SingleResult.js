import React from "react";

function SingleResult({ singleResult, index }) {
  return (
    <div className="Single-Result">
      <h2><span>{index}: </span></h2>
      <div className="Result-Details">
        <h2><span>Name:- </span>{singleResult.name}</h2>
        <h2><span>Email:- </span>{singleResult.email}</h2>
        <h2><span>Marks:- </span>{singleResult.marks}</h2>
      </div>
    </div>
  );
}

export default SingleResult;
