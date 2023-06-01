import Product from "./Product";

function Products() {
    return (
        <div>
            <p align="center" className="display-4 m-3">Продукты</p>
            <div className="container">
                <form>
                    <table className="table mb-3" align="center">
                        <thead className="table-dark">
                        <tr align="center">
                            <th scope="col">Название</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Производитель</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Цена</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        <Product />
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Products;