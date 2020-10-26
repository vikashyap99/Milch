import React, { Component } from 'react';
import {Nav,NavLink} from 'reactstrap'
import {Link,Switch,Route, Redirect, BrowserRouter} from 'react-router-dom'
import DairyHome from './dairyHome'
import SideNav from './sidebar'
import Members from './Members'

class Customer extends Component {
    render() {

        return (
            <div>
            <SideNav />
            
            {/* <DairyHome user={this.props.user} signOut={this.props.signOut} />  */}

            
            <Switch>
            <Route  path='/signIn/dairyHome/' render={(props) => <DairyHome user={this.props.user} signOut={this.props.signOut} {...props} /> } />
            <Route path='/signIn/members/' component={Members} />
            <Redirect to='/signIn/dairyHome/' />
            </Switch>    
                    
            </div>
        );
    }
}

export default Customer;