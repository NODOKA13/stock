import Contentwrapperr from './Contentwrapperr';
import Sidebarr from './Sidebarr';

function Pagewrapperr(){
    return(
        //<!-- Page Wrapper -->
        <div id="wrapper">
            <Sidebarr/>
            <Contentwrapperr/>

        </div>
        //<!-- End of Page Wrapper -->
    );
}

export default Pagewrapperr;