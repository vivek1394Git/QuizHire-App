import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleResult from "./SingleResult";

function Result({ history, match: { params }, token }) {
  const { testId } = params;
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .post("/api/result/listResult", { token, testId })
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        alert(err);
        history.push("/admin/tests");
      });
  }, [history, testId, token]);

  return (
    <div className="Result">
      <h1>Result</h1>
      {result.length ? (
        result.map((singleResult, index) => (
          <SingleResult
            singleResult={singleResult}
            key={index + 1}
            index={index + 1}
          />
        ))
      ) : (
        <h2>No one has taken the test till now!</h2>
      )}
    </div>
  );
}

export default Result;
