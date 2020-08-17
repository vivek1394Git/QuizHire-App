import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Tests from "./Tests";
import CreateTest from "./CreateTest";
import AddTest from "./AddTest";
import Result from "./Result";
import "../componentsStyles/ClientScreen.css";

function ClientScreen() {
  const data = useSelector((state) => state.user.data);

  return (
    <div className="Client-Screen">
      <Route exact path="/client" render={() => <h1>Hi {data.name}!</h1>} />
      <Route exact path="/client" component={Tests} />
      <Route
        exact
        path="/client/tests"
        render={(props) => {
          return <CreateTest {...props} token={data.token} />;
        }}
      />
      <Route
        path="/client/tests/add/:numberOfQuestions"
        render={(props) => {
          return <AddTest {...props} token={data.token} />;
        }}
      />
      <Route
        path="/client/tests/result/:testId"
        render={(props) => {
          return <Result {...props} token={data.token} />;
        }}
      />
    </div>
  );
}

export default ClientScreen;
