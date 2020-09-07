import React from "react";
import { Route, Switch } from "react-router-dom";
import SubjectComponent from "../Subject/Subject-home-component";
import CourseHomeComponent from "../Course/Course-home-component";

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <SubjectComponent />
      </Route>
      <Route path="/home/course/:id">
        <CourseHomeComponent />
      </Route>
    </Switch>
  );
};

export default HomeRouter;
