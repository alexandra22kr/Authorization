import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

const Form = ({ users }) => {
  const [userSubmit, setUser] = useState({
    login: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("users", users);
  };

  const onChangeInput = e => {
    for (let key in userSubmit) {
      if (key === e.target.name)
        setUser({
          ...userSubmit,
          [e.target.name]: e.target.value
        });
    }
    console.log("state", userSubmit);
  };

  return (
    <div className="container">
      <div className="notification has-background-grey-darker">
        <form onSubmit={handleSubmit}>
          <h2 className="title is-2 has-text-warning has-text-centered">Log in</h2>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                onChange={onChangeInput}
                class="input"
                name="login"
                type="login"
                placeholder="Login"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                onChange={onChangeInput}
                class="input"
                name="password"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="button is-warning">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
