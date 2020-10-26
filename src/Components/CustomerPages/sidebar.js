import React, { Component } from 'react';
import {Nav,NavLink} from 'reactstrap'
import {Link,Switch,Route} from 'react-router-dom'
import Members from './Members'

class sidebar extends Component {
    render() {
        return (
            <div className='container'>
                <div className='sidenav'>
                      <div className='col'>
                        
                        <NavLink  href="/signIn/dairyHome/">Home</NavLink>
                        <NavLink href="/signIn/members/">Members</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#pricing">Report</NavLink>
                        
                        
                      </div>
                  </div> 
                 
            </div>
        );
    }
}

export default sidebar;