import React from "react";
import "../signIn/SignIn.css";

const Register = ({ onRouteChange }) => {
  return (
    <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center form shadow-5">
      <div className="bg-white ma2">
        <div className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  E-Mail Address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="Enter Your E-Mail"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              
            </fieldset>
            <div>
              <input
                className="w-70 grow f4 link ph3 pv2 black bg-light-gray"
                type="submit"
                value="Register"
                onClick={() => onRouteChange('home') }
              />
            </div>
            <div className="lh-copy mt3">
              <p className="f6 link dim black db pointer" onClick={() => onRouteChange('signIn') }>
                Sign In
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
