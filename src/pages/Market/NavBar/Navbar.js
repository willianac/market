import { ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MarketIcon, Navigation } from "./styles";
import marketicon from "./supermarkets.png"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Navigation>
            <MarketIcon src={marketicon}/>
            <IconButton onClick={() => navigate('/cart')}>
                <ShoppingCart />
            </IconButton>
        </Navigation>
    )
}
export default Navbar;