import React from 'react';
import { ProductConsumer } from '../context';
import Product  from "./Product";
import slide1 from "../slide1.png";
import slide2 from "../slide2.png";
export default class ProductList extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* BOOTSTRAP SLIDER */}
                <div id="carouselExampleIndicators" class="carousel slide myslider" data-ride="carousel" data-interval="2000">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={slide1} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={slide2} alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={slide1} alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>

                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto text-center text-title">
                                <h1>
                                    All Products
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            {/* use product consumer to access data from context.js */}
                            <ProductConsumer>
                                {(value)=>{
                                    console.log(value.product);
                                    //  call Product component for each object in value.product

                                    return value.product.map(item =>{
                                        return <Product key={item.id} product ={item}></Product>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}