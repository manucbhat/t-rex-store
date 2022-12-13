import { createContext, useState,useContext,useReducer } from "react";
import CartReducer from "./Reducers";

 const Cart=createContext();

 const Context =({children}) =>{

    const [productData,setProductData] = useState([]);

    let Url = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;

    //Fetching data from an API.
    const getProductsData = async () =>{
        try{
            let response = await fetch(Url);
            let resData = await response.json();
            setProductData(resData);
        }catch(error){
            console.log(error);
        }
    };

    const products = [...Array].map(()=>({
        productData
    }));

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })
    return(
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    )
 }

 export default Context;

 export const CartState = () =>{
    return useContext(Cart);
 }