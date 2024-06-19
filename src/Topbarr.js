import { Link } from "react-router-dom";

function Topbarr() {
    const linkStyle = {
        fontFamily: "'Font Awesome 5 Free'",
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <div className="container-fluid">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item flex-fill">
                        <Link to="/login" className="bg-gradient-primary p-4 font-medium text-white text-sm rounded d-flex align-items-center">
                            <i className="fas fa-user-circle fa-lg mr-2"></i>
                            <div style={linkStyle} className="text-white">Login</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Topbarr;
