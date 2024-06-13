import Maincontentt from './Maincontentt';
import Footerr from './Footerr';

function Contentwrapperr({Content}){
    return(
        //<!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <Maincontentt Content={Content}/>
            {/*<!-- Footer -->*/}
            <Footerr/>
            {/*<!-- End of Footer -->*/}
        </div>
        //<!-- End of Content Wrapper -->
    );
}

export default Contentwrapperr;