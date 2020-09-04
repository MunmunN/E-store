import React, {Component} from 'react';
import CartItem from './CartItem';
class CartList extends Component{
    render(){
        const{cart}=this.props.value;//accessing value from cart.js
        return(
            <div className="container-fluid">
                {cart.map(item=>{

                    return<CartItem key={item.id} item={item} value={this.props.value}></CartItem>
                })}


            </div>
        )
    }

}
export default CartList;