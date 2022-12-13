import React from "react";
import { CartState } from "../contexts/Context";

const Home=()=>{
    const {state} = CartState();

    console.log(state);
    return(
        <div>Home</div>
    );
}
export default Home;