import { HelmetProvider } from "react-helmet-async"
import Headd from "../Headd";
import Pagewrapperr from "../Pagewrapperr";
import { useParams } from "react-router-dom";

const ReadPage = () => {

    const {tno} = useParams();

    const Content = (
        <h1 class="h3 mb-4 text-gray-800">Read Page {tno}</h1>
    );

    return(
        <HelmetProvider>
            <Headd title="Read Page"/>
            <Pagewrapperr Content={Content}/>
        </HelmetProvider>
    )
}

export default ReadPage;