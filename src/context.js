import React,{Component} from 'react';
//import data from data.js
import{allProducts,detailProduct} from "./data";

// making context api
const ProductContext=React.createContext();

//making context provider
class ProductProvider extends Component{
    //set the state properties
    state={
        product:allProducts,//reference of original data
        product:[],
        detailProduct:detailProduct,
        cart:[],
        modelOpen:false,
        modelProduct:detailProduct,
        cartTax:0,
        cartTotal:0,
        cartSubtotal:0
    }
    //call the setproduct function when program  starts
    componentDidMount(){
        this.setProducts();
    }
    //Add product into the cart array when you click add to cart button
    addToCart=(id)=>{
        //console.log('hello from the cart');
        var temp=[...this.state.product]; //temp=[{},{},{}]
        //change the item (inCart, total, count) inside temp array
        const index=temp.indexOf(this.getItem(id));
        const updatedProduct=temp[index];
        updatedProduct.inCart=true;
        updatedProduct.count=1;
        updatedProduct.total=updatedProduct.price;
        this.setState(
            ()=>{
                return {product:temp,cart:[...this.state.cart,updatedProduct]};
                
                },
                ()=>{
                    //console.log(this.state);
                    this.addTotals();
                }
        )

    }
    //create a function toget the data(product) using id
    getItem=(id)=>{
    const p=this.state.product.find(item=>item.id===id)
    return p;
                }
    //setting the detail item
    handleDetail=(id)=>{
       // console.log(id);
       const newDetailProduct=this.getItem(id);
       //change state's detailProduct with newDetailProduct

       this.setState(
           ()=>{
               return{detailProduct:newDetailProduct};
           }
       )
    }
//open added to cart notification model
    openModel=(id)=>{
        const p=this.getItem(id);
        this.setState(()=>{
            return {modelProduct:p,modelOpen:true}
        })
    }
    //close added to cart notification model
    closeModel=()=>{
        this.setState(()=>{
            return{modelOpen:false};
        })
    }
    //create a copy of allProducts array and store it as state of this class
    setProducts=()=>{
        //copy of array of objects
        var temproduct=[];
        allProducts.forEach(item=>{
            const singleItem={...item};
            temproduct=[...temproduct,singleItem];
        })
        this.setState(()=>{
            return{product:temproduct}
        })
    }
    //just for testing
    tester=()=>{
    console.log("State Product:",this.state.product[0].inCart);
    console.log("Data Product:",allProducts[0].inCart);


    const temp=[...this.state.product];
    temp[0].inCart=true;
    this.setState(
        ()=>{return{product:temp};},
        ()=>{console.log("State Product change:",this.state.product[0].inCart);
        console.log("Data product change",allProducts[0].inCart);}
    )

    }
    //for testing only
    //Function for updating the cart
    increase=(id)=>{
        //console.log("this is increment");
        //CODE TO GET THE SELECTED ITEM
        var tempCart=[...this.state.cart];//copy of cart
        const selected=tempCart.find(item=>item.id==id);//findingthe selected cart item
        const index=tempCart.indexOf(selected);//getting index of selected item
        const productVar=tempCart[index];
        //CODE TO UPDATE THE COUNT AND TOTAL
        productVar.count=productVar.count+1;
        productVar.total=productVar.count*productVar.price;
        //PUSH IT BACK TO STATE
        this.setState(
            ()=>{return{cart:[...tempCart]}},
            ()=>{this.addTotals();}
        )

    }
    decrease=(id)=>{
        //console.log("this is decrement");
        //CODE TO GET THE SELECTED ITEM
        var tempCart=[...this.state.cart];//copy of cart
        const selected=tempCart.find(item=>item.id==id);//findingthe selected cart item
        const index=tempCart.indexOf(selected);//getting index of selected item
        const productVar=tempCart[index];
        //CODE TO UPDATE THE COUNT AND TOTAL
        productVar.count=productVar.count-1;
        //if quantity is zero, remove the product
        if(productVar.count==0){
            this.removeItem(id);
        }
        //ELSE CHANGE THE TOTAL AND UPDATE THE STATE
        else{
            productVar.total=productVar.count*productVar.price;

        //PUSH IT BACK TO STATE
        this.setState(
            ()=>{return{cart:[...tempCart]}},
            ()=>{this.addTotals();}
        )

        }

        


    }
    removeItem=(id)=>{
        //console.log("this is remove item");
        //CREATE COPY OF CART AND PRODUCT ARRAY
        var tempProducts=[...this.state.product];//copy of product array
        var tempCart=[...this.state.cart];//copy of cart array
        //REMOVE THE PRODUCT FROM THE CART ARRAY
        tempCart=tempCart.filter(item=>item.id!==id);//filtering the cart array, include only those items whose ids!==selected item id
        //FINDING THE SELECTED ITEM INSIDE PRODUCT ARRAY
        const index=tempProducts.indexOf(this.getItem(id));//index of removed product within product array
        var removedProduct=tempProducts[index];//selected product to remove
        //UPDATE THE VALUES ONCE USER PRESS THE REMOVE BUTTON
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        //PUSH IT BACK TO STATE
        this.setState(
            ()=>{
                return{
                    cart:[...tempCart],
                    products:[...tempProducts]
                }
            },
            ()=>{
                this.addTotals();
            }

        )



    }
    clearCart=(id)=>{
        //console.log("this is cart clear");
        this.setState(()=>{
            return{cart:[]};
        },
        ()=>{
            this.setProducts();
        })

    }

    //function for calculating total

    addTotals=()=>{
        var  st=0;//subtotal zero
        this.state.cart.map(item=>(st=st+item.total));
        //cart=[{5},{7, {6}}]
        var t=parseFloat((st*0.1).toFixed(2));//tax:10% of subtotal
        var total=parseFloat((st+t).toFixed(2));//fixed it to two numbers after decimal
        this.setState(()=>{
            return{
                cartSubtotal:st,
                cartTax:t,
                cartTotal:total
            }
        })
    }




    render(){
        return(
        //send the data to the consumers
        // <ProductContext.Provider value="Hello from context">
        //     {this.props.children}

        // </ProductContext.Provider>

        //for testing
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            tester:this.tester,
            openModel:this.openModel,
            closeModel:this.closeModel,
            increase:this.increase,
            decrease:this.decrease,
            removeItem:this.removeItem,
            clearCart:this.clearCart
        }}>
            {/* value={product,detailProduct,handleDetail,addToCart} */}
            {/* a=[1,2,3,4,5]
            b=[6,7]
            [1,2,3,4,5,6,] */}
            {/* w<button onClick={this.tester}>test</button> */}

            {this.props.children}
        </ProductContext.Provider>



        );
    }
}

//Create the consumer const. Component will use tis const to use the product data

const ProductConsumer=ProductContext.Consumer;

export{ProductProvider, ProductConsumer};//export for chidren component to use

