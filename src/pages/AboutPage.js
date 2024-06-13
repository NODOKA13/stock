import { HelmetProvider } from "react-helmet-async"
import Headd from "../Headd";
import Pagewrapperr from "../Pagewrapperr";

const AboutPage = () => {
    return(
        <HelmetProvider>
            <Headd title="About Page"/>
            <Pagewrapperr/>
        </HelmetProvider>
    )
}

export default AboutPage;