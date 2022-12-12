import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { PaymentContext } from "./Payment";

export const CartContext = createContext()
export const CartProvider = () => {
    const [cart, setCart] = useState([])
    const [cartQuantity, setQuantity] = useState(0)
    const [totalOnCart, setTotal] = useState(0)

    return (
        <CartContext.Provider value={{cart, setCart, setQuantity, setTotal, cartQuantity, totalOnCart}}>
            <Outlet />
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const {cart, setCart, cartQuantity, setQuantity, totalOnCart, setTotal} = useContext(CartContext)
    const {payOptions, payChoice} = useContext(PaymentContext)
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
        const {quantity, total} = cart.reduce((acum, item) => {
            return {
                quantity : acum.quantity += item.quantity,
                total : acum.total += (item.price * item.quantity)
            }
        },{quantity : 0, total : 0})
        setQuantity(quantity)
        setTotal(total * payChoice.juros)
    },[cart, setQuantity, setTotal, payOptions, payChoice])

    return {
        cart,
        addOnCart,
        removeItem,
        cartQuantity,
        totalOnCart,
        setCart
    }
}