import React from "react";
import Content from "./ServicePage";
import UiDesign from "./UiDesign";
import WebDesign from "./WebDesign";
import WebDevelop from "./WebDevelop";
import WebMobile from "./WebMobile";

import { Switch, Route, useRouteMatch } from "react-router-dom";

const Index = () => {
  let { url } = useRouteMatch();
//   console.log(url);


// KEDUA KAU HARUS MEMASTIKAN DENGAN URL http://localhost:3000/service/UiDesign, maka dia akan pergi ke component UI design.
  return (
    <div>
      <Switch>

        <Route  path={`${url}/UiDesign`}>
            <UiDesign/>
        </Route>

        <Route  path={`${url}/WebDesign`}>
            <WebDesign/>
        </Route>

        <Route  path={`${url}/WebDevelop`}>
            <WebDevelop/>
        </Route>

        <Route  path={`${url}/WebMobile`}>
            <WebMobile/>
        </Route>

        <Route exact path={url}>
            <Content/>
        </Route>

      </Switch>
    </div>
  );
};

export default Index;
