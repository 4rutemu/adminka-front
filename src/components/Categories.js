import Category from "./Category";

function Categories() {
    return (
        <div>
            <p align="center" className="display-4 m-3">Категории</p>
            <div className="container">
                <form>
                    <table className="table mb-3" align="center">
                        <thead className="table-dark">
                        <tr align="center">
                            <th scope="col">Категория</th>
                            <th scope="col">Кол-во товаров</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        <Category />
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Categories;