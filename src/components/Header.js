import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="d-flex flex-row bd-highlight mb-3">
                <li className="me-5">
                    <Link to="/">login</Link>
                </li>
                <li className="me-5">
                    <Link to="/listado">listado</Link>
                </li>
                <li className="me-5">
                    <Link to="/contacto">contacto</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;