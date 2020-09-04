import React, {Component} from 'react';

class CartItem extends Component{
    render(){
        const{id,title,img,price,total,count}=this.props.item;
        const{increase,decrease,removeItem}=this.props.value;
        return(
            
            <div className="row my-2 text-center">
                {/* product image */}

                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'50px',height:'50px'}} className="img-fluid"></img>


                </div>
                {/* product title */}
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product:</span>{title}
                </div>
                {/* product price */}
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price:</span>{price}
                </div>
                {/* quantity button */}
                <div className="col-10 mx-auto col-lg-2 my-2">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrease(id)}>-</span>
                            <span className="btn btn-black mx-1" >{count}</span>
                            <span className="btn btn-black mx-1" onClick={()=>increase(id)}>+</span>


                        </div>
                        </div>
                        </div>
                        {/* remove button */}
                        <div className="col-10 mx-auto col-lg-2">
                            <div className="cart-icon" onClick={()=>removeItem(id)}>
                                <i className="fas fa-trash"></i>


                            </div>
                            </div>
                            {/* total */}
                        <div className="col-10 mx-auto col-lg-2">
                            <strong>Item Total:$ {total}</strong>
                            </div>
                            

                            
                      </div>


                


              



            

            
           
        )
    }

}
export default CartItem;