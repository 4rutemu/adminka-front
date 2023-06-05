function Worker(props) {
    return (
        <tr align="center">
            <td>{props.worker.id}</td>
            <td>{props.worker.workerName}</td>
            <td>{props.worker.workerSurName}</td>
            <td>{props.worker.workerLastName}</td>
            <td>{props.worker.role}</td>
        </tr>
    )
}

export default Worker;