function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid" align="right">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <a className="navbar-brand nav-item" href="/main">CRM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/workers">Работники</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Продукты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">Категории</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/registration">Добавить пользователя</a>
                        </li>
                    </ul>

                    <form className="col" action="/logout" method="POST">
                        <input className="btn btn-secondary" type="submit" value="Выход"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;