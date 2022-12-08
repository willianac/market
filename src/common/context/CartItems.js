import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const CartContext = createContext()
export const CartProvider = () => {
    const [cart, setCart] = useState([])
    const [cartQuantity, set] = useState(0)

    function changeQuantity(id, variation) {
        const updatedCart = cart.map((item) => {
            if(item.id === id) {item.quantity += variation}
            return item
        })
        setCart(updatedCart)
    }

    function addOnCart(newItem) {
        const alreadyOnCart = cart.some((item) => newItem.id === item.id)
        if(!alreadyOnCart) {
          newItem.quantity = 1
          return setCart([...cart, newItem])
        }
        changeQuantity(newItem.id, 1)
    }
    
    function removeItem(id) {
        const product = cart.find((item) => item.id === id)
        if(!product) {return}
        const isSingle = product.quantity === 1
        if(isSingle) {
            const filteredArray = cart.filter((item) => item.id !== id)
            return setCart(filteredArray)
        }
        changeQuantity(id, -1)
    }

    useEffect(() => {
        const quantity = cart.reduce((acum, item) => {
            return acum += item.quantity
        },0)
        set(quantity)
    },[cart])

    return (
        <CartContext.Provider value={{cart, setCart, addOnCart, removeItem, cartQuantity}}>
            <Outlet />
        </CartContext.Provider>
    )
}