import Contentwrapperr from './Contentwrapperr';
import Sidebarr from './Sidebarr';

function Pagewrapperr({Content}){
    return(
        //<!-- Page Wrapper -->
        <div id="wrapper">
            <Sidebarr/>
            <Contentwrapperr Content={Content}/>

        </div>
        //<!-- End of Page Wrapper -->
    );
}

export default Pagewrapperr;