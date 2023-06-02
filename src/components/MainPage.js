import {useState} from "react";

function MainPage() {
    const [isManager, setIsManager] = useState(true)

    return (
        <div className="container" align="center">
                <h1 className="display-2">Привет</h1>
                <p className="lead">
                    Вы попали на главную страницу нашего CRM<br/>
                </p>
                <br/>
            {isManager ? (
                <div>
                    <h3 className="display-5">Вы Менеджер</h3>
                    <p className="lead">
                        Вы можете<br/>
                        Просматривать клиентов компании<br/>
                        Составлять задачи и просматривать их<br/>
                        Просматривать работников компании<br/>
                        А также составлять отчёты!
                    </p>
                </div>
            ) : (
                <div>
                    <h3 className="display-5">Вы Работник</h3>
                    <p className="lead">
                        Вы можете<br/>
                        Просматривать свои задачи<br/>
                        И пока что всё...
                    </p>
                </div>
            )}
        </div>
    )
}

export default MainPage;