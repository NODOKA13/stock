import { HelmetProvider } from "react-helmet-async"
import Headd from "../Headd";
import Pagewrapperr from "../Pagewrapperr";

const AboutPage = () => {
    const Content = (
        <h1 class="h3 mb-4 text-gray-800">About Page</h1>
    );

    return(
        <HelmetProvider>
            <Headd title="About Page"/>
            <Pagewrapperr Content={Content}/>
        </HelmetProvider>
    )
}

export default AboutPage;