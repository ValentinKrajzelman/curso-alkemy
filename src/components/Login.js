import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === '' || password === '') {
            console.log("los espacios no pueden estar vacios");
        }
        else if (!regexEmail.test(email)) {
            console.log("ingrese un email valido");
        }
        else if (email == 'challenge@alkemy.org' && password == 'react') {

            axios
                .post('http://challenge-react.alkemy.org', { email, password })
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    navigate('/listado');
                })
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    <span>email:</span>
                    <input name="email" type="text" />
                </label>
                <label>
                    <span>password:</span>
                    <input name="password" type="password" />
                </label>
                <button type="submit" className="btn btn-primary">ingresar</button>
            </form>
        </div>

    );
};

export default Login;