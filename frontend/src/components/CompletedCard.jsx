export default function CompletedCard({ completedTask }) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-5">

            {completedTask.length > 0 ? completedTask.map(task => (
                <div className="card text-center" key={task.id} style={{ width: "18rem", margin: "5px" }}>
                    <div className="d-flex align-items-center ps-1">
                        <i className="bi bi-check-circle-fill text-muted m-0 p-0" style={{ verticalAlign: "middle" }}></i>
                        <p className="m-0 p-2 text-muted" style={{ textDecoration: "line-through" }}>{task.title}</p>
                    </div>
                </div>

            )) : (
                <p>Loading...</p>
            )}

        </div>
    )
}