import React,{Component}from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



class Model extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modelOpen,closeModel}=value;
                    const{img, price, title}=value.modelProduct;
                    if(!modelOpen){
                        return null;
                    }
                    else{
                        return(
                            <ModelContainer>
                                <div className="container">

                                    <div className="row">

                                        <div id="model" className="mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product image"></img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        {/* buttons */}
                                        <Link to="/"><button className="btn-primary" onClick={()=>closeModel()}>Continue Shoping</button></Link>
                                        <Link to="/cart"><button className="btn-primary" onClick={()=>closeModel()}>Check out</button></Link>
                                    </div>
                                </div>
                                </div>
                            </ModelContainer>
                        )
                    }
                }
                }
            </ProductConsumer>
        )
    }

}





export default Model;

const ModelContainer=styled.div
`
position:fixed; 
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model{
    background:white;
}

`;