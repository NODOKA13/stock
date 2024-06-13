import Topbarr from './Topbarr';

function Maincontentt({Content}){
    return(
        //!-- Main Content-->
        <div id="content">

            {/*<!-- Topbar-->*/}
                <Topbarr/>
            {/*<!-- End of Topbar-->*/}

            {/*<!-- Begin Page Content -->*/}
                <div class="container-fluid">
                    {/*<!-- Page Heading -->*/}
                    {Content}
                </div>
            {/*<!-- /.container-fluid -->*/}

        </div>
        //<!-- End of Main Content-->
    );
}

export default Maincontentt;