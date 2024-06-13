import { HelmetProvider } from "react-helmet-async"
import Headd from "../Headd";
import Pagewrapperr from "../Pagewrapperr";

const MainPage = () => {
    return(
        <HelmetProvider>
            <Headd title="Main Page"/>
            <Pagewrapperr/>
        </HelmetProvider>
    )
}

export default MainPage;