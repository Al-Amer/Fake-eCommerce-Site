//1
"use client";
//2
import { useState, createContext, useContext } from "react";
//3
const CartContext = createContext(null);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const addToCart = (item)=>{
        setCart((prev)=>[...prev,item])
    }
    // this retrun musst have all the project.
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export function useCart(){
    const context = useContext(CartContext);
    if(!context) throw new Error("use Cart must bei used within a cart provider ");
    return context;
}