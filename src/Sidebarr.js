import { Link } from "react-router-dom";

function Sidebarr(){
    return(
        //<!--  Sidebar-->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*<!-- Sidebar - Brand-->*/}
            <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fa fa-bomb"></i>
                    {/*<!-- <i class="fas fa-laugh-wink"></i>-->*/}
                </div>
                <div class="sidebar-brand-text mx-3">Stock</div>
            </Link>

            {/*<!--  Divider-->*/}
            <hr class="sidebar-divider"/>

            {/*<!--  Heading-->*/}
            <div class="sidebar-heading">
                Addons
            </div>

            {/*<!--  Nav Item - Charts-->*/}
            <li class="nav-item">
                <Link class="nav-link" to="/">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Mian Page</span>
                </Link>
            </li>

            {/*<!--  Nav Item - Charts-->*/}
            <li class="nav-item">
                <Link class="nav-link" to="/about">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>About Page</span>
                </Link>
            </li>

            {/*<!--  Divider-->*/}
            <hr class="sidebar-divider d-none d-md-block"/>

        </ul>
        //<!--  End of Sidebar-->
    );
}

export default Sidebarr;