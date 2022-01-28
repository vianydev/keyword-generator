import React from "react";

const SignIn = ( { handleRouteChange }) => {
    return ( 
        <section className="pa4 black-80">
            <div className="measure center bg-white pa3 shadow-5 br2 ba b--black-10">
                <fieldset
                id="sign_up"
                className="ba b--transparent ph0 mh0"
                >
                    <legend className="f2 fw6 ph0 mh0">
                    Sign In
                    </legend>
                    <div className="mt3">
                        <label
                        className="db fw6 lh-copy f6"
                        htmlFor="email">
                        Email
                        </label>
                        <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label
                        className="db fw6 lh-copy f6"
                        htmlFor="password">
                        Password
                        </label>
                        <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        />
                    </div>
                </fieldset>
                <div className="">
                    <input
                    className="b ph3 pv2 input-reset ba bg-transparent dim pointer f6 dib br2-ns w-100 w-25-m w-20-l"
                    style={{backgroundColor: "#FFC044"}}
                    type="submit"
                    value="Sign in"
                    onClick={() => handleRouteChange("home")}
                    />
                </div>
                <div className="lh-copy mt3">
                    <a href="#0"
                    className="f6 link dim black db"
                    onClick={() => handleRouteChange("register")}
                    >
                    Register
                    </a>
                    <a href="#0"
                    className="f6 link dim black db"
                    >
                    Forgot your password?
                    </a>
                </div>
            </div>
        </section>
     );
}
 

export default SignIn;