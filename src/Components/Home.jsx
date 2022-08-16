import React, { Component } from 'react';
import Loan from './Loan';
import Navbar from './Navbar';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Navbar />
                <Loan />
            </>
        );
    }
}
 
export default Home;