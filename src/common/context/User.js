import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const UserContext = createContext()
export const UserProvider = () => {
    const [name, setName] = useState()
    const [balance, setBalance] = useState(0)

    return (
        <>
            <UserContext.Provider value={{name, setName, balance, setBalance}}>
                <Outlet />
            </UserContext.Provider>
        </>
    )
}