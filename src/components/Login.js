import {Form} from "react-bootstrap";


function Login() {
    return (
        <div className="App">
            <h2 align="center" className="display-4">Войдите в CRM</h2>
            <div align="center">
                <Form action="/login" method="POST">
                    <input className="login-element mb-3" type="email" name="email" placeholder="Почта" required/>
                    <input className="login-element mb-3" type="password" name="password" placeholder="Пароль" required/>
                    <input className="login-element btn btn-primary" type="submit" value="Войти"/>
                    <h4><a href="/registration">Зарегистрироваться</a></h4>
                </Form>
            </div>
        </div>
    );
}

export default Login;