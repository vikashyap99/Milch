import React, { Component } from 'react';
import './dairyHome.css'
import {Nav,NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

class dairyHome extends Component {
    render() {

        const user = this.props.user

        return (
            <div>
              <div className='container'> 

              <div className='sidenav'>
                      <div className='col'>
                      
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="#features">Add Member</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#pricing">Report</NavLink>
                        
                        
                      </div>
                  </div>

                  <div className='row'>
                  <div className='col'>
                  <header >
                   <h1>Welcome to Milch</h1>
    
                                {
                                  user 
                                    ? <div className='profile'><img src={user.photoURL} className="App-logo" alt="logo" /><p>Hello, {user.displayName}</p></div>
                                    : <div>
                                        <div class="form">
                              </div>
                                    </div>
                                }
                                {
                                  user
                                    ? <button onClick={this.props.signOut}>Sign out</button>
                                    : <div></div>
                                }
                  </header>
                  </div>         
                 

                  </div>
              </div>
               
            </div>
           
    
        );
    }
}

export default dairyHome;