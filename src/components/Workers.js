import Worker from "./Worker";

function Workers() {
    return (
        <div>
            <p align="center" className="display-4 m-3">Сотрудники компании</p>
            <div className="container">
                <form>
                    <table className="table mb-3" align="center">
                        <thead className="table-dark">
                        <tr align="center">
                            <th scope="col">Имя сотрудника</th>
                            <th scope="col">Номер телефона</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Позиция</th>
                            <th scope="col">Личный номер</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <Worker />
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Workers;