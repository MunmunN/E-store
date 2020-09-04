import React from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
//for logo image

import storeImage from '../sale (1).png';

//import for styled components
import styled from 'styled-components';
export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-light" >
                {/* link to homepage */}
               
                <Link to="/">
                <img src={storeImage} width="80px" height="80px"></img>
                </Link>
                <ul className='navbar-nav'>
                    <li classname="nav-item ml-5"></li>
                    <Link to="/" className="nav-Link">Products</Link>



                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                        My Cart
                    </ButtonContainer>
                </Link>
                

            </nav>
        )
    }
}
const ButtonContainer=styled.button
`
font-size:20px;
background:transparent;
border:2px solid black;
padding:5px;
transition:all 0.5 ease-in-out;
&:hover{
    background:var(--mainGreen);
    color:black;
}

`;