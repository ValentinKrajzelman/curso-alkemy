import { useNavigate } from "react-router-dom";
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
        <div>wola</div>
    );
};

export default Listado;