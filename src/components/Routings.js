import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home"
import Movies from "./movie/Movies";
import People from "./people/People"
import Navigation from "./navigation/Navigation";
import Locations from "./location/Locations";

 const Routings = () => {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
  );
};

export default Routings;
