import React, { Component } from 'react';
import {Nav, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

import './Footer.css'
class FooterComponent extends Component {
    render() {
        return (
            <div class='main-footer' bg="dark" variant="dark">
                <div class='container'>
                    
                <div className='row'>
                <div className='col'>
                        <div className='list-unstyled'>
                            
                        <Nav className="mr-auto">
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="#features">Pricing</NavLink>
                        <NavLink href="#pricing">About</NavLink>
                        
                        </Nav>
                            
                            
                        </div>
                    </div>
                    <div className='col'></div>
                    

                    
                    <div className='col'>
                        <div className='social-font'>
                            <div className='row'>
                            <NavLink href='/'><i class="fab fa-facebook"> </i> </NavLink>
                            <NavLink href='/'><i class="fab fa-instagram"></i></NavLink>
                            <NavLink href='/'><i class="fab fa-twitter"></i></NavLink>
                            <NavLink href='/'><i class="fab fa-linkedin"></i></NavLink>
                            <NavLink href='/'><i class="fab fa-github"></i></NavLink>

                            </div>
                           
                        
                        </div>
                        
                    </div>
                </div>
                    <p> 2020© Genesis Forger</p>
                </div>
            </div>
        );
    }
}

export default FooterComponent;