import React from "react";

import { Card, CardTitle } from 'react-materialize';

class Dashboard extends React.Component{

    render(){
        return(
          <Card className='small'
          	header={<CardTitle image='http://materializecss.com/images/parallax2.jpg'>Welcome</CardTitle>}
          	actions={[<a href='/login' class="waves-effect waves-light btn">Login</a>,
                      <a href='/signup' class="waves-effect waves-light btn">Signup</a>]}>
          	Log in or sign up to learn!
          </Card>
        );
    }
}

export default Dashboard;
