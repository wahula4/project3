import React from "react";

import {Button, Row, Input } from 'react-materialize';

class Signin extends React.Component{

    render(){
        return(
            <Row>
                <h3>Please Sign In</h3>
                <form action="/Signup" method="POST">
                    <Input type="email" s={6} label="email" />
                    <Input type="password" s={6} name="password"/>
                    <Button type="submit" value='Sign Up'/>
                </form>
            </Row>
            /* <p>Already have an account? <a href="/Signin">Login</a></p>
            <p>Or go <a href="/">home</a>.</p> */
        );
    }
}

export default Signin;
