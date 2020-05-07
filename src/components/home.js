import React from 'react';
import First from './1/first'
import List from './1/list';
import Serv from './1/servicios';




const Home = () => {
    return (
        
        <div className="home">
            <br/>
            <First/>


          
            <br/>
            <br/>
            <List/>
            <br/>
            <br/>
            <Serv/>
            
        </div>
     
    )
}

export default Home;