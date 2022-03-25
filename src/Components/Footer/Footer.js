import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <h4>Q1: How Does React Work ?</h4>
            <p><span>Ans:</span> React works in declarative code. It defines the logical structure of documents and the way a document is accessed and manipulated.<br/> And React implements a virtual DOM that is basically compared to JavaScript.</p>
            <h4>Q1: Props VS States Difference ?</h4>
            <p>Ans: Props are used to pass data from one component to another. And The state helps to show information about the components on UI.</p>
            <h4>Q1: How Does UseState Work?</h4>
            <p>Ans: useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function, and it  <br/>returns a variable with the current state value and another function to update this value.</p>
        </div>
    );
};

export default Footer;