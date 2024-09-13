import { createContext, useState } from "react";
import { products } from "../assets/assets"; 
import { toast } from "react-toastify";
 export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
  
    const currency = '$';
    const delivery_fee = '10';
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId,size) => {
             
        if(!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData); 
        
    }

   

       const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error){

                }
            }
        }
        return totalCount;
       }

    const value ={
         products,currency,delivery_fee,
         cartItems,addToCart,
         getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
}

 export default ShopContextProvider;