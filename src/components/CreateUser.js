function CreateUser() {
    return (
        <div>
            <h3 align="center" className="display-4 mb-5">Регистрация в CRM</h3>
            <div align="center">
                <form className="col" action="/registration" method="post">
                    <input className="row m-3" type="email" name="email" placeholder="Почта" required/>
                    <input className="row m-3" type="text" name="name" placeholder="Имя" required/>
                    <input className="row m-3" type="tel" name="phone" placeholder="Телефон" required/>
                    <span>
                        <select name="position" required>
                        <option value="worker">Рабочий</option>
                        <option value="manager">Менеджер</option>
                    </select>
                    </span>
                    <input className="row m-3" type="text" name="nickname" placeholder="Позывной" required/>
                    <input className="row mb-3" type="password" name="password" placeholder="Введите пароль" required/>
                    <input className="row btn btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;