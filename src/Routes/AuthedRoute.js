import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthedRoute = props => {
  const token = useSelector(state => state.token);
  return token && token.access_token.length > 0 ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

export default AuthedRoute;
