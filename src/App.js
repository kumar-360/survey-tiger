import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

import TakeSurvey from "./components/TakeSurvey";
import SurveyForm from "./components/SurveyForm";
import PublishData from "./components/PublishData";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/create-survey">
            <SurveyForm />
          </Route>
          <Route exact path="/take-survey">
            <TakeSurvey />
          </Route>
          <Route exact path="/publish-data">
            <PublishData/>
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
