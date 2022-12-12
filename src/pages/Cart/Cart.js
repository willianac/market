import { Header, Main, TotalContainer } from "./styles"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PaymentContext } from "../../common/context/Payment";
import { UserContext } from "../../common/context/User";
import { useCartContext } from "../../common/context/CartItems";

const Cart = () => {
    const navigate = useNavigate()
    const {payChoice, setPayChoice, payOptions, changePay} = useContext(PaymentContext)
    const {balance} = useContext(UserContext)
    const {totalOnCart, cartQuantity} = useCartContext()
    return (
        <Main>
            <Header>
                <IconButton sx={{position : 'absolute'}} onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>
                <h1>Carrinho</h1>
            </Header>
            <div></div>
            <div>
                <FormControl fullWidth>
                    <Select variant="standard" value={payChoice.id} onChange={(event) => changePay(event.target.value)}>
                        {payOptions.map((option) => (
                            <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <TotalContainer>
                <div>
                    <h1>Total: </h1>
                    <span>R${totalOnCart}</span>
                </div>
                <div>
                    <h1>Saldo: </h1>
                    <span>R${balance}</span>
                </div>
                <div>
                    <h1>Saldo final: </h1>
                    <span>R$4.50</span>
                </div>
            </TotalContainer>
        </Main>
    )
}

export default Cart