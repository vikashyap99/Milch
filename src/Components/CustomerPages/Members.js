import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class Members extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='col'>
                        <h1> Customers</h1>
                        <div>
                            <Link to='addmember'>
                                <Button className='secondary'>Add Customer</Button>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Members;