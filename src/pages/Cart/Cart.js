import { Header, Main, TotalContainer } from "./styles"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Alert, Button, FormControl, IconButton, MenuItem, Select, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PaymentContext } from "../../common/context/Payment";
import { UserContext } from "../../common/context/User";
import { useCartContext } from "../../common/context/CartItems";
import { useState } from "react";

const Cart = () => {
    const navigate = useNavigate()
    const [snackbar, setSnackBar] = useState(false)
    const {payChoice, payOptions, changePay} = useContext(PaymentContext)
    const {balance} = useContext(UserContext)
    const {totalOnCart, efetuarCompra, cart} = useCartContext()
    const finalBalance = balance - totalOnCart
    return ( 
        <> 
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
                        <span>R${totalOnCart.toFixed(2)}</span>
                    </div>
                    <div>
                        <h1>Saldo: </h1>
                        <span>R${Number(balance).toFixed(2)}</span>
                    </div>
                    <div>
                        <h1>Saldo final: </h1>
                        <span>R${finalBalance.toFixed(2)}</span>
                    </div>
                </TotalContainer>
                <Button 
                    variant="contained"
                    size="large"
                    disabled={finalBalance < 0 || !cart.length}
                    onClick={() => {
                        efetuarCompra()
                        setSnackBar(true)
                        setTimeout(() => navigate(-1), 4000)}}
                >
                    Efetuar Compra
                </Button>
            </Main>
            <Snackbar 
                open={snackbar} 
                autoHideDuration={4000} 
                onClose={() => setSnackBar(false)} 
                anchorOrigin={{vertical : 'top', horizontal : 'right'}}
            >
                <Alert severity="success">Compra Efetuada</Alert>
            </Snackbar>
        </>
    )
}

export default Cart