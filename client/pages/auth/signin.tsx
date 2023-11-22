import { useState } from "react";
import Router from "next/router";

import { useRequest } from "hooks/useRequest";
import { AuthParams, CurrentUser } from "/types/types";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest<
    Omit<CurrentUser, "iat">,
    AuthParams
  >({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign in</h1>
      <div className="form-group">
        <label>Email Adress</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
        />
      </div>
      {errors}
      <button className="btn btn-primary mt-2">Sign In</button>
    </form>
  );
};

export default SignIn;
