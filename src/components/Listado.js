import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Listado = () => {

    const [pelis, setPelis] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }
    }, [])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d8d607ff03b58b066cc3eefb03eb0695&language=en-US')
            .then((res) => {
                const pelisArray = res.data.results;
                const pelisJSX = pelisArray.map(peli => {
                    return (
                        <div className="w-25 h-10 card" key={peli.original_title}>
                            <img src={"https://image.tmdb.org/t/p/w500/" + peli.poster_path} className="cadr-img-top"></img>
                            <div className="card-body"></div>
                            <div className="card-title">{peli.original_title}</div>
                            <div className="card-text">{peli.overview} </div>
                            <Link to={"/pelicula?id=" + peli.id} className="btn btn-primary"> a la peli</Link>
                        </div>
                    )
                });
                setPelis(() => pelisJSX);
            });

    }, [window.location.href])



    return (
        <div className="row">
            <div className=" mt-5 d-flex flex-row flex-wrap">
                {pelis}
            </div>
        </div>
    );
};

export default Listado;