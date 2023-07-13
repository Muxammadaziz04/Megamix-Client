import FeedbackSection from "components/UI/FeedbackSection";
import Footer from "components/UI/Footer";
import Navbar from "components/UI/Navbar";
import Partners from "components/UI/Partners";
import cls from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <main className={cls.main}>
            <Navbar />
            <div className={cls.main__content}>
                {children}
            </div>
            <Partners />
            <FeedbackSection />
            <Footer />
        </main>
    );
}

export default Layout;
