import React from "react";
import Home from "./views/Home";
import Unit from "./views/Unit";
import Detail from "./views/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Layout title="Home">
            <Home />
          </Layout>
        </Route>
        <Route path="/units/:id">
          <Layout title="Units">
            <Detail />
          </Layout>
        </Route>
        <Route path="/units">
          <Layout title="Unit Detail">
            <Unit />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
