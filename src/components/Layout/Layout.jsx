import { Outlet } from "react-router-dom";
import MenuComponent from "../MenuComponent/MenuComponent";
import Footer from "../Footer/Footer";

export default function Layout(){
    return(
        <>
        <MenuComponent />
        <Outlet />
        <Footer />
        </>

    )
}