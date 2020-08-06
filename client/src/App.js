import React, { useState, createContext } from "react";
import HomeScreen from "./components/HomeScreen";
import { Route, Switch } from "react-router-dom";
import HomeNav from "./components/HomeNav";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";
import Test from "./components/Test";
// import AdminNav from "./components/AdminNav";
import AdminScreen from "./components/AdminScreen";
import NotAuthorized from "./components/NotAuthorized";
import ClientScreen from "./components/ClientScreen";
// import ClientNav from "./components/ClientNav";
import LoggedInNav from "./components/LoggedInNav";
import TestNav from "./components/TestNav";
import DemoTest from "./components/DemoTest";

export const ForceUpdateContext = createContext();

function App() {
  console.log("app");
  const [count, setCount] = useState(0);

  const forceUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <ForceUpdateContext.Provider value={forceUpdate}>
        <nav className="Nav">
          <Route
            exact
            path={["/", "/login", "/register"]}
            component={HomeNav}
          />
          <Route exact path="/demo-test" component={TestNav} />
          {localStorage.getItem("takeTest") === "true" &&
            localStorage.getItem("times") === "1" && (
              <Route exact path="/take-test" component={TestNav} />
            )}
          {localStorage.getItem("isLoggedIn") === "true" &&
            localStorage.getItem("isAdmin") === "true" && (
              <Route path="/admin" component={LoggedInNav} />
            )}
          {localStorage.getItem("isLoggedIn") === "true" &&
            localStorage.getItem("isAdmin") === "false" && (
              <Route path="/client" component={LoggedInNav} />
            )}
          {/* {localStorage.getItem("isLoggedIn") === "true" &&
            localStorage.getItem("isAdmin") === "true" && (
              <Route path="/admin" component={AdminNav} />
            )}
          {localStorage.getItem("isLoggedIn") === "true" &&
            localStorage.getItem("isAdmin") === "false" && (
              <Route path="/client" component={ClientNav} />
            )} */}
        </nav>
        <main className="Main">
          <Switch>
            <Route path="/" exact={true} component={HomeScreen} />
            {localStorage.getItem("isLoggedIn") !== "true" && (
              <Route path="/register" component={RegisterScreen} />
            )}
            <Route path="/login" component={LoginScreen} />
            {localStorage.getItem("isLoggedIn") === "true" &&
              localStorage.getItem("isAdmin") === "true" && (
                <Route path="/admin" component={AdminScreen} />
              )}
            {localStorage.getItem("isLoggedIn") === "true" &&
              localStorage.getItem("isAdmin") === "false" && (
                <Route path="/client" component={ClientScreen} />
              )}

            <Route path="/demo-test" component={DemoTest} />
            {localStorage.getItem("takeTest") === "true" &&
              localStorage.getItem("times") === "1" && (
                <Route exact path="/take-test" component={Test} />
              )}
            <Route component={NotAuthorized} />
          </Switch>
        </main>
        <footer className="Footer">
          <h3>
            All rights reserved.<sup>&copy;</sup>
          </h3>
        </footer>
      </ForceUpdateContext.Provider>
    </div>
  );
}

export default App;
