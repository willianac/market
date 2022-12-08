import { Header, Main } from "./styles";
import Product from "../../components/Product";
import products from "./productsList.json"
import Navbar from "./NavBar/Navbar";
import TrailAnimation from "../../common/animations/TrailAnimation";
import { useContext } from "react";
import { UserContext } from "../../common/context/User";

const Market = () => {
    const {name, balance} = useContext(UserContext)
    
    return (
        <Main>
            <Navbar />
            <Header>
                <h1>Olá {name}</h1>
                <h3>Saldo: {balance}</h3>
            </Header>
            <section style={{margin : '50px auto auto', paddingTop : '20px'}}>
                <TrailAnimation extStyles={{display : 'flex', justifyContent : 'space-around', flexDirection : 'row', flexWrap : 'wrap'}}>
                    {products.map((item) => {
                        return <Product {...item} key={item.id}/>
                    })}
                </TrailAnimation>
            </section>
        </Main>
    )
}
export default Market;