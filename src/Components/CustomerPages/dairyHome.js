import React, { Component } from 'react';
import './dairyHome.css'
import {Nav,NavLink,Button} from 'reactstrap'
import {Link,Switch,Route} from 'react-router-dom'
import SideNav from './sidebar'


class dairyHome extends Component {
    render() {

        const user = this.props.user
        

        return (
            <div>
              <div className='container'> 

                 
                  <div className='row'>
                  <div className='col'>
                  <header >
                   <h1>Welcome to Milch</h1>
    
                                {
                                  user 
                                    ? <div className='profile'> <img src={user.photoURL} className="App-logo" alt="logo" />  <p>Hello, {user.displayName}</p></div>
                                    : <div>
                                        <div class="form">
                              </div>
                                    </div>
                                }
                                {
                                  user
                                    ? <Button className = 'secondary' onClick={this.props.signOut}>Sign out</Button>
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