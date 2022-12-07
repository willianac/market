import { Add, Remove } from "@mui/icons-material";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { CardButtons, CardHeader } from "./styles";

const Product = ({ id, name, photo, price}) => {
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
            <IconButton>
                <Remove />
            </IconButton>
            2
            <IconButton>
                <Add /> 
            </IconButton>
          </CardButtons>
        </Card>
    );
}

export default Product;