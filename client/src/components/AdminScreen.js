import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import UpdateData from "./UpdateData";
import Questions from "./Questions";
import AddQuestion from "./AddQuestion";
import UpdateQuestion from "./UpdateQuestion";
import Tests from "./Tests";
import CreateTest from "./CreateTest";
import AddTest from "./AddTest";
import Result from "./Result";
import "../componentsStyles/AdminScreen.css"

function AdminScreen() {
  const data = useSelector((state) => state.user.data);

  return (
    <div className="Admin-Screen">
      <Route exact path="/admin" component={UpdateData} />
      <Route exact path="/admin" component={Tests} />

      <Route
        exact
        path="/admin/questions"
        render={(props) => {
          return <Questions {...props} token={data.token} />;
        }}
      />
      <Route
        path="/admin/questions/add"
        render={(props) => {
          return <AddQuestion {...props} token={data.token} />;
        }}
      />
      <Route
        path="/admin/questions/update/:question"
        render={(props) => {
          return <UpdateQuestion {...props} token={data.token} />;
        }}
      />

      <Route
        exact
        path="/admin/tests"
        render={(props) => {
          return <CreateTest {...props} token={data.token} />;
        }}
      />
      <Route
        path="/admin/tests/add/:numberOfQuestions"
        render={(props) => {
          return <AddTest {...props} token={data.token} />;
        }}
      />
      <Route
        path="/admin/tests/result/:testId"
        render={(props) => {
          return <Result {...props} token={data.token} />;
        }}
      />
    </div>
  );
}

export default AdminScreen;
