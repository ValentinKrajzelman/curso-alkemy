import { useNavigate } from 'react-router-dom';


const BarraBusqueda = () => {

    const navigate = useNavigate();

    const handlerBusqueda = (e) => {

        e.preventDefault();
        const keyword = e.target.keyword.value;
        e.currentTarget.keyword.value = '';
        navigate('/busqueda/?keyword=' + keyword);

    };

    return (
        <form onSubmit={handlerBusqueda}>
            <label className="form-label">
                <input className="form-control" type='text' name="keyword" placeholder='Buscar...' />
            </label>
            <button className="btn btn-success mb-1" type='submit'>buscar</button>
        </form>
    );
};

export default BarraBusqueda;
