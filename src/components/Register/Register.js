import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleRegisterName = (event) => {
        this.setState({name: event.target.value});
    }

    handleRegisterEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handleRegisterPassword = (event) => {
        this.setState({password: event.target.value});
    }
    
    handleSubmitRegister = () => {
        fetch('https://keyword-generator-2022.herokuapp.com/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.handleRouteChange("home");
            }
        })
    }

    render() {
        const { handleRouteChange } = this.props;

        return ( 
            <section className="pa4 black-80">
                <div className="measure center bg-white pa3 shadow-5 br2 ba b--black-10">
                    <fieldset
                    id="sign_up"
                    className="ba b--transparent ph0 mh0"
                    >
                        <legend className="f2 fw6 ph0 mh0">
                        Register
                        </legend>
    
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6"
                            htmlFor="name">
                            Name
                            </label>
                            <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.handleRegisterName}
                            />
                        </div>
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
                            onChange={this.handleRegisterEmail}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6"
                            htmlFor="password">
                            Password
                            </label>
                            <input
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.handleRegisterPassword}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba bg-transparent dim pointer f6 dib br2-ns w-100 w-25-m w-20-l"
                        style={{backgroundColor: "#FFC044"}}
                        type="submit"
                        value="Register"
                        onClick={this.handleSubmitRegister}
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer"
                        onClick={() => handleRouteChange("signin")}>
                        Sign in
                        </p>
                    </div>
                </div>
            </section>
         );
    }
    
}
 
export default Register;