import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Content from "./Utama";
import Detail from "./Detail";

const Index = () => {
  let { url } = useRouteMatch();

  return (
    <div>
      <Switch>

        <Route exact path={url}>
            <Content/>
        </Route>

        <Route path={`${url}/:id`}>
            <Detail/>
        </Route>

      </Switch>
    </div>
  );
};

export default Index;
