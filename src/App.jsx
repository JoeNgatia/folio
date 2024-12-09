import React from 'react';
import Navbar from './components/NavBar';
import Consult from './components/Consult';
import HugeFooter from './components/HugeFooter';
import Languages from './components/Languages';
import Projects from './components/Projects';

const App = () => {
    return (
        <div>
            <Navbar />
            <Consult />
            <Projects/>
            <Languages/>
            <HugeFooter />
                        
            
            
        </div>
    );
};

export default App;