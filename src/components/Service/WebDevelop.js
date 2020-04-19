import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import WebDevPortolio from "./WebDevWorks"
import "../style.css";

const WebDevelop = () => {
  let { url } = useRouteMatch();
  console.log(url);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Welcome to Web Develop Page, Coming Soon.</h1>
      <Link to={`${url}/portofolio`}>
        <Button className="button-fx-1">PORTOFOLIO</Button>
      </Link>

      <Switch>
        <Route path={`${url}/portolio`}>
          <WebDevPortolio />
        </Route>
      </Switch>
    </div>
  );
};

export default WebDevelop;
