import { Header, Main, TotalContainer } from "./styles"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
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
                    <Select variant="standard">
                        <MenuItem value={'boleto'}>Boleto</MenuItem>
                        <MenuItem value={'cartão de crédito'}>Cartão de Crédito</MenuItem>
                        <MenuItem value={'pix'}>Pix</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TotalContainer>
                <div>
                    <h1>Total: </h1>
                    <span>R$25.50</span>
                </div>
                <div>
                    <h1>Saldo: </h1>
                    <span>R$30.00</span>
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