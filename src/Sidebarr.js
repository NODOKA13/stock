function Sidebarr(){
    return(
        //<!--  Sidebar-->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*<!-- Sidebar - Brand-->*/}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fa fa-bomb"></i>
                    {/*<!-- <i class="fas fa-laugh-wink"></i>-->*/}
                </div>
                <div class="sidebar-brand-text mx-3">Stock</div>
            </a>

            {/*<!--  Divider-->*/}
            <hr class="sidebar-divider"/>

            {/*<!--  Heading-->*/}
            <div class="sidebar-heading">
                Addons
            </div>

            {/*<!--  Nav Item - Charts-->*/}
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/*<!--  Divider-->*/}
            <hr class="sidebar-divider d-none d-md-block"/>

        </ul>
        //<!--  End of Sidebar-->
    );
}

export default Sidebarr;