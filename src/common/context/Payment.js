import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const PaymentContext = createContext()
export const PaymentProvider = () => {
    const payOptions = [
        {
            id : 1,
            name : 'Boleto',
            juros : 1
        },
        {
            id : 2,
            name : 'Cartão de Crédito',
            juros : 1.3
        },
        {
            id : 3,
            name : 'PIX',
            juros : 1
        },
        {
            id : 4,
            name : 'Crediário',
            juros : 1.6
        }
    ]
    const [payChoice, setPayChoice] = useState(payOptions[0])

    function changePay(id) {
        const selectedPay = payOptions.find((item) => item.id === id)
        setPayChoice(selectedPay)
    }
    
    return (
        <PaymentContext.Provider value={{payChoice, setPayChoice, payOptions, changePay}}>
            <Outlet />
        </PaymentContext.Provider>
    )
}