import { HelmetProvider } from "react-helmet-async"
import Headd from "../Headd";
import Pagewrapperr from "../Pagewrapperr";

const MainPage = () => {
    const Content = (
        <h1 class="h3 mb-4 text-gray-800">Main Page</h1>
    );
    return(
        <HelmetProvider>
            <Headd title="Main Page"/>
            <Pagewrapperr Content={Content}/>
        </HelmetProvider>
    )
}

export default MainPage;