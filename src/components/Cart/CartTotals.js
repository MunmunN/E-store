import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class CartTotals extends Component{
    render(){
        const {cartSubtotal,cartTax,cartTotal,clearCart}=this.props.value;
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 text-right mt-3">
                            <Link to="/">

                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                                onClick={()=>clearCart()}>Clear Cart</button>
                            </Link>
                            <h5>Subtotal:<strong>$ {cartSubtotal}</strong></h5>
                            <h5>Text:<strong>$ {cartTax}</strong></h5>

                            <h5>Total:<strong>$ {cartTotal}</strong></h5>






                        </div>


                    </div>


                </div>


            </React.Fragment>
        )

    }


}
export default CartTotals;