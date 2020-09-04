import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
export default class Details extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    //console.log(value.detailProduct);
                    const{id,company,img,info,price,title,inCart}=value.detailProduct;
                    return(
                        //Detail of the product
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>

                            </div>
                            {/* title ends */}
                            <div className="row">
                                <div className="col-10 mx=auto col-md-6 my-3">
                                    <img src={img} className="img-fluid"></img>
                                </div>
                                <div className="col-10 mx=auto col-md-6 my-3">
                                    <h1> Model:{title}</h1> 
                                    <h4 className="text-muted">Made By: {company}</h4>
                                    <h4>Price: {price}</h4>
                                    <p className="text-muted"> {info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/"><button className="btn-primary">Back to Products</button></Link>
                                        <button className="btn-primary ml-3"
                                        disabled={inCart?true:false}
                                        onClick={()=>{value.addToCart(id);value.openModel(id)}}>
                                            {inCart?"In Cart":"Add to Cart"}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}