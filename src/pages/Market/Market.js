import { Header, Main } from "./styles";
import Product from "../../components/Product";
import products from "./productsList.json"
import Navbar from "./NavBar/Navbar";
import TrailAnimation from "../../common/animations/TrailAnimation";

const Market = () => {
    return (
        <Main>
            <Navbar />
            <Header>
                <h1>Olá Fulano</h1>
                <h3>Saldo:</h3>
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