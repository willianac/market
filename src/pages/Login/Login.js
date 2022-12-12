import { Button, FormControl, Input, InputLabel } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/context/User";
import Conteiner, { InputConteiner } from "./styles";
import { HeadTitle } from "./styles";
const Login = () => {
    const {name, balance, setName, setBalance} = useContext(UserContext)
    const navigate = useNavigate()

    function onFormSubmit (e) {
       e.preventDefault()
       navigate('/market')
    }

    return (
        <>
            <Conteiner>
                <HeadTitle>
                    <img 
                        src="assets/supermarkets.png" 
                        alt="a market icon" 
                        style={{maxWidth : '45px', marginRight : '20px'}}>
                    </img>Will's Market
                </HeadTitle>
                <InputConteiner onSubmit={onFormSubmit}>
                    <FormControl fullWidth>
                        <InputLabel>Nome</InputLabel>
                        <Input type="text" onChange={(event) => setName(event.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Saldo</InputLabel>
                        <Input type="number" onChange={(event) => setBalance(event.target.value)}/>
                    </FormControl>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        fullWidth 
                        style={{marginTop : '20px'}} 
                        disabled={!name || !balance}
                    >Prosseguir
                    </Button>
                </InputConteiner>
            </Conteiner>
        </>
    )
}

export default Login;