import React from "react";
import DemoQuiz from "./DemoQuiz";
import TakeTest from "./TakeTest";
import { Route } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      <Route path="/" exact component={DemoQuiz} />
      <Route path="/" exact component={TakeTest} />
    </>
  );
}

export default HomeScreen;
