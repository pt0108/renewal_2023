import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <TopNavbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;