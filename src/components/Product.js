import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
export default class Product extends React.Component{
    render(){
        //Store the info about product
        const{id,title,img,price,inCart}=this.props.product;
        return(
            <ProductWrapper className="mx=auto col-md-6 col-lg-3 my-3">
                {/* bootstrap card */}
                <div className="card">
                    <ProductConsumer>
                        {(value)=>(
                            <div className="img-container p-5" onClick={()=>{value.handleDetail(id)}}>
                            {/* Product image link to detail page*/}
                            <Link to="/details">
                                <img src={img} alt="productImage" className="card-img-top"></img>
                            </Link>
                            {/* cart Button */}
                            <button className="cart-btn"
                            onClick={()=>{value.addToCart(id);value.openModel(id)}}
                            
                            disabled={inCart ? true:false}
                            >
                                {inCart?(<p className="mb-0" disabled>In Cart</p>):(<p className="mb-0">Add to Cart</p>)}
    
    
                            </button>
                        </div>

                        )}
                    </ProductConsumer>
                    
                    {/* Name and price of the product */}
                    <div className="card-footer d-flex justify-content-between">
                        <p>{title}</p>
                        <h5 className="font-italic"><span className="mr-1">$</span>{price}</h5>
                    </div>
                </div>

            </ProductWrapper>
           
        );
    }
}

const ProductWrapper=styled.div
`
.card{
    border-color:transparent;
    transition:all 1s ease-in-out;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s ease-in-out;
}
&:hover{
    .card{
        border:1px solid rgba(0,0,0,0.2);
}
.card-footer{
    background:grey;
    }
}

.card-img-top{
    transition:all 1s ease-in-out;
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.img-container{
    position:relative;
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:6px;
    background:black;
    border:none;
    color:white;
}

.cart-btn:hover{
    color:black;
    background:white;
    
}



`