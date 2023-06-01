function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid" align="right">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <a className="navbar-brand nav-item" href="/main">CRM</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/workers">Работники</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Продукты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Категории</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/registration">Добавить пользователя</a>
                        </li>
                    </ul>

                    <form class="col" action="/logout" method="POST">
                        <input class="btn btn-secondary" type="submit" value="Выход"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;