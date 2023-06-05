import Worker from "./Worker";
import {getAllUsers} from "../api/api";
import {useState} from "react";

function Workers(props) {
    // const [workers, setWorkers] = useState(new Array());

    const getWorkers = async () => {
        const workers = new Array();

        await getAllUsers()
            .then((response) => response.forEach((value) => workers.push(renderWorker(value))))

        return workers;
    }

    const renderWorker = (obj) => {
        return (<Worker worker={obj} />)
    }

    return (
        <div>
            <p align="center" className="display-4 m-3">Сотрудники компании</p>
            <div className="container">
                <form>
                    <table className="table mb-3" align="center">
                        <thead className="table-dark">
                        <tr align="center">
                            <th scope="col">Id</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Отчество</th>
                            <th scope="col">Позиция</th>
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