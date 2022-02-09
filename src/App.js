import React, { useState } from 'react';
import './App.css';
import Gallary from './component/Gallary';
import "lightgallery.js/dist/css/lightgallery.css";
import  Model  from './component/videoModal'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Button } from 'react-bootstrap';
import News from './component/News';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [message, setMessage] = useState('Welcome Visitor');

  const handleChange = () => {
      setMessage('Thank you for subscribing');
  }

  return (
    <SimpleBar style={{ height: "100vh" }}>
    <div className="App">
        <h1>{message}</h1>
        <Button variant="primary" onClick={handleChange}>Subscribe</Button>
        <Model/>
        <Gallary></Gallary>
        <h1>Using Hooks & Props</h1>
        <News></News>
      
    </div>
    </SimpleBar>
  );
}

export default App;
