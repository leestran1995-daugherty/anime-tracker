import React, { useEffect } from "react";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { API_ROOT } from "./Constants";
import { addToken } from "./Redux/Actions";
import {Redirect} from "react-router-dom";
// const queryString = require("query-string");

const AuthCallback = () => {
  const params = queryString.parse(window.location.search);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const getToken = async () => {
    if (!params.code) {
      window.location.href = "/login";
    }
    //TODO: REPLACE WITH AXIOS
    const res = await fetch(`${API_ROOT}/getToken?code=${params.code}`, {
      method: "GET"
    }).catch(err => console.log(err))
    const data = await res.json();
    dispatch(addToken(data));
    // window.location.href = "/main"
  };

  useEffect(() => {
    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return token ? <Redirect to="/main" /> : <h1>Loading</h1>;
};

export default AuthCallback;
