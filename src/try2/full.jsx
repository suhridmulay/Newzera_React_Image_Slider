import React, { Component } from 'react';
import Slider from './slider';
import './full.css';
import Left from './left';

class Sample extends Component {
    state = {  }
    render() { 
        return (  
            <div className='container'>
                <div className='item'><Left/></div>
                <div className='item'><Slider/></div>
                
            </div>
        );
    }
}
 
export default Sample;