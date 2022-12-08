import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../common/context/CartItems";
import { MarketIcon, Navigation } from "./styles";

const Navbar = () => {
    const navigate = useNavigate()
    const {cartQuantity} = useContext(CartContext)
    return (
        <Navigation>
            <MarketIcon src="./assets/supermarkets.png"/>
            <IconButton onClick={() => navigate('/cart')}>
                <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Navigation>
    )
}
export default Navbar;