import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop/ScrollTop";
import MenuComponent from "../MenuComponent/MenuComponent";
import Footer from "../Footer/Footer";

export default function Layout(){
    return(
        <>
        <ScrollTop />
        <MenuComponent />
        <Outlet />
        <Footer />
        </>

    )
}