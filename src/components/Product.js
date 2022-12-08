import { Add, Remove } from "@mui/icons-material";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../common/context/CartItems";
import { CardButtons, CardHeader } from "./styles";

const Product = ({ id, name, photo, price}) => {
    const { cart, addOnCart, removeItem } = useContext(CartContext)
    const howManyInTheCart = cart.find((item) => item.id === id)
    
    return (
        <Card sx={{ maxWidth: 200, marginBottom : '20px'}}>
          <img src={`assets/${photo}.png`}  alt='a couple of bananas' style={{maxWidth : '50px', display : 'block', margin : 'auto', padding : '2px'}}/>
          <CardContent>
            <CardHeader gutterBottom variant="h5" component="div">
              {name} <span>R$ {price}</span>
            </CardHeader>
            <Typography variant="body2" color="text.secondary">
            Previne doenças cardiovasculares,
            ajuda nas funções cerebrais,
            auxilia o bom humor
            </Typography>
          </CardContent>
          <CardButtons>
            <IconButton onClick={() => removeItem(id)}>
                <Remove />
            </IconButton>
              {howManyInTheCart?.quantity}
            <IconButton onClick={() => addOnCart({id, name, photo, price})}>
                <Add /> 
            </IconButton>
          </CardButtons>
        </Card>
    );
}

export default Product;