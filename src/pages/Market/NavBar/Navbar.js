import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../common/context/CartItems";
import { MarketIcon, Navigation } from "./styles";

const Navbar = () => {
    const navigate = useNavigate()
    const {cartQuantity} = useCartContext()
    return (
        <Navigation>
            <MarketIcon src="./assets/supermarkets.png"/>
            <IconButton onClick={() => navigate('/cart')} disabled={!cartQuantity}>
                <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Navigation>
    )
}
export default Navbar;