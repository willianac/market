import { Button, FormControl, Input, InputLabel } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Conteiner, { InputConteiner } from "./styles";
import { Teste } from "./styles";

const Login = () => {
    const [name, setName] = useState()
    const [saldo, setSaldo] = useState(0)
    const navigate = useNavigate()
    function onFormSubmit (e) {
       e.preventDefault()
       navigate('/market')
    }

    return (
        <>
            <Teste>Will's Market</Teste>
            <Conteiner>
                <InputConteiner onSubmit={onFormSubmit}>
                    <FormControl fullWidth>
                        <InputLabel>Nome</InputLabel>
                        <Input type="text" onChange={(event) => setName(event.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Saldo</InputLabel>
                        <Input type="number" onChange={(event) => setSaldo(event.target.value)}/>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit" fullWidth style={{marginTop : '20px'}}>Prosseguir</Button>
                </InputConteiner>
            </Conteiner>
        </>
    )
}

export default Login;