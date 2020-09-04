import React from 'react';
import CartColumn from './CartColumn';
import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
 class Cart extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {value=>{
                        const{cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    {/* title of the cart page */}
                                <div className="row">
                                    <div className="col mx-auto text-center">
                                <h1>Your Cart</h1>

                                    </div>


                                     </div>
                                    <CartColumn></CartColumn>
                                    <CartList value={value}></CartList>
                                    <CartTotals value={value}></CartTotals>
                                </React.Fragment>




                               
                            );

                        }
                        else{
                            return(<EmptyCart></EmptyCart>);
                        }
                    }}
                </ProductConsumer>

            </React.Fragment>

                
        )
    }
}
export default Cart;