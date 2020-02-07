import React from "react";

const Login = () => {
  return (
    <a
      className="button is-info"
      href="https://discordapp.com/api/oauth2/authorize?client_id=675021562692239380&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify"
    >
      Login
    </a>
  );
};

export default Login;
