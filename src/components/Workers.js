import Worker from "./Worker";
import {getAllUsers} from "../api/api";
import {useState} from "react";

const kal = [
    {
        workerName: 'Артём',
        workerSurName: 'Денега',
        workerLastName: 'Петрович',
        role: 'ADMIN',
        email: 'artem@gmail.com'
    },
    {
        workerName: 'Сергей',
        workerSurName: 'Иванов',
        workerLastName: 'Константинович',
        role: 'MANAGER',
        email: 'serj@gmail.com'
    },
    {
        workerName: 'Артемий',
        workerSurName: 'Афанасьев',
        workerLastName: 'Русланович',
        role: 'MANAGER',
        email: 'user@gmail.com'
    }
]

function Workers(props) {
    // const [workers, setWorkers] = useState(new Array());

    const getWorkers = () => {
        const workers = new Array();

        kal.forEach((value) => workers.push(<Worker worker={value}/>))

        return workers;
    }

    const renderWorker = (obj) => {
        return (<Worker worker={obj} />)
    }

    return (
        <div>
            <p align="center" className="display-4 m-3">Пользователи</p>
            <div className="container">
                <form>
                    <table className="table mb-3" align="center">
                        <thead className="table-dark">
                        <tr align="center">
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Отчество</th>
                            <th scope="col">Позиция</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {getWorkers()}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Workers;