import {Form} from "react-bootstrap";
import {logIn} from "../api/api";

const sendLogIn = () => {
    const object = {};
    const formData = new FormData(document.querySelector('.login-form'));

    formData.forEach((value, key) => object[key] = value);

    const jwt = logIn(JSON.stringify(object));

    sessionStorage.setItem('Token', jwt)
    console.log(sessionStorage.getItem('Token'))
}

function Login() {
    return (
        <div className="App">
            <h2 align="center" className="display-4">Войдите в CRM</h2>
            <div align="center">
                <Form className='login-form'>
                    <input className="login-element mb-3" type="email" name="email" placeholder="Почта" required/>
                    <input className="login-element mb-3" type="password" name="password" placeholder="Пароль" required/>
                    <input className="login-element btn btn-primary" type="button" onClick={sendLogIn} value="Войти"/>
                    <h4><a href="/registration">Зарегистрироваться</a></h4>
                </Form>
            </div>
        </div>
    );
}

export default Login;