import AboutCompany from "./components/AboutCompany";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import News from "./components/News";
import Products from "./components/Products";


const HomePage = () => {
    return (
        <>
            <Header />   
            <Advantages />
            <Products />
            <News />
            <AboutCompany />
        </>
    );
}

export default HomePage;
