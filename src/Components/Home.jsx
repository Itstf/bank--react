import React, { Component } from 'react';
import About from './About';
import Loan from './Loan';
import Navbar from './Navbar';
import Registration from './Registration';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Navbar />
                <Loan />
                <About />
                <Registration/>
            </>
        );
    }
}
 
export default Home;