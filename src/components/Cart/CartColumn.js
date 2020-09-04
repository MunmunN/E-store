import React,{Component} from 'react';



class CartColumn extends Component{
    render(){
        return(
            //columns for cart
            <div className="container-fluid text-center d-none d-lg-block" >
                <div className="row">
                    {/* column 1 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">Products</p>

                    </div>
                    {/* column 2 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">Name of the Product</p>

                    </div>
                    {/* column 3 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">Price</p>

                    </div>
                    {/* column 4 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">quantity</p>

                    </div>
                    {/* column 5 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>

                    </div>
                    {/* column 6 */}
                    <div className="col mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>

                    </div>


                </div>


            </div>
        )
    }

}
export default CartColumn;