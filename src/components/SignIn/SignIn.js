import React, { Component } from "react";

 class SignIn extends Component {
     constructor(props) {
         super(props);
         this.state = {
             signInEmail: '',
             signInPassword: ''
         }
     }

     onEmailChange = (event) => {
         this.setState({ signInEmail: event.target.value })
     }

     onPasswordChange = (event) => {
         this.setState({signInPassword: event.target.value})
     }

     onSubmitSignIn = () => {
        fetch('https://keyword-generator-api-production.up.railway.app/signin', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({
                 email: this.state.signInEmail,
                 password: this.state.signInPassword
             })
         })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.handleRouteChange("home");
            }
        })
     }
     
     render () {
        const { handleRouteChange } = this.props;
        return ( 
            <section className="pa4 black-80">
                <div className="measure center bg-white pa3 shadow-5 br2 ba b--black-10">
                    <fieldset id="sign_up"
                    className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">
                        Sign In
                        </legend>
                        <div className="mt3">
                            <label
                            className="db fw6 lh-copy f6"
                            htmlFor="email">
                            Email
                            </label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6"
                            htmlFor="password">
                            Password
                            </label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div>
                        <input className="b ph3 pv2 input-reset ba bg-transparent dim pointer f6 dib br2-ns w-100 w-25-m w-20-l"
                        style={{backgroundColor: "#FFC044"}}
                        type="submit"
                        value="Sign in"
                        onClick={this.onSubmitSignIn} />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer"
                        onClick={() => handleRouteChange("register")}>
                        Register
                        </p>
                        {/* <p className="f6 link dim black db pointer">
                        Forgot your password?
                        </p> */}
                    </div>
                </div>
            </section>
        );
    }
}
 

export default SignIn;
