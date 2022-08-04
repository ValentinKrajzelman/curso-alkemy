import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Listado = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token === null) {
            navigate('/');
        }
    }, [])

    return (
        <div className="row">
            <div className="col-3 mt-5">
                <div className="card">
                    <img src="..." className="cadr-img-top"></img>
                    <div className="card-body"></div>
                    <div className="card-title">titulo peli</div>
                    <div className="card-text">sipnopsis sipnopsis sipnopsis sipnopsis sipnopsis sipnopsis sipnopsis sipnopsis </div>
                    <Link to="/" className="btn btn-primary"> a la peli</Link>
                </div>
            </div>
        </div>
    );
};

export default Listado;