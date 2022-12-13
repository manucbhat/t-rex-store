import { createContext, useState } from "react";

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
    }))
    return(
        <Cart.Provider>
            {children}
        </Cart.Provider>
    )
 }