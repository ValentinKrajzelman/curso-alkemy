import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Pelicula = () => {


    const navigate = useNavigate();

    const [desc, setDesc] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }
        const query = new URLSearchParams(window.location.search);
        const ID = query.get('id');
        axios.get('https://api.themoviedb.org/3/movie/' + ID + '?api_key=d8d607ff03b58b066cc3eefb03eb0695&language=en-US')
            .then(res => {
                setDesc(res.data.overview)
            });
    }, [])

    return (
        <div>
            <div>{desc}</div>
        </div>
    )
};

export default Pelicula;