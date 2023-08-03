import AboutCompany from "./components/AboutCompany";
import Advantages from "./components/Advantages";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Journal from "./components/Journal";
import News from "./components/News";
import Products from "./components/Products";
import Sertificates from "./components/Sertificates";

const HomePage = ({
    categories = [],
    news = [],
    products = [],
}) => {

    return (
        <>
            <Header categories={categories} />
            <Advantages />
            <Products products={products} />
            <News news={news} />
            <AboutCompany />
            <Sertificates />
            <Journal />
            <Carousel />
        </>
    );
}

export default HomePage;
