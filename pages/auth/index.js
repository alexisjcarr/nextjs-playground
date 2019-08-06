import React from "react";
import User from "../../components/User";

const authIndexPage = props => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Alexis" age={26} />
  </div>
);

authIndexPage.getInitialProps = context => {
  return {
    appName: "Super App"
  };
};

export default authIndexPage;
