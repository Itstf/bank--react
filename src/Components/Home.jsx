import React, { Component } from 'react';
import About from './About';
import Footer from './Footer';
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
                <Registration />
                <Footer />
            </>
        );
    }
}
 
export default Home;