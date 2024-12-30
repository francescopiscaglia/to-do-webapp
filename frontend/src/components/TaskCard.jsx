export default function TaskCard({ tasks }) {
    return (
        <>
            {tasks ? tasks.map(task => (
                <div className="card text-center" key={task.id} style={{ width: "18rem", margin: "5px" }}>
                    <div className="d-flex align-items-center ps-1">
                        <i className="bi bi-circle text-muted m-0 p-0" style={{ verticalAlign: "middle" }}></i>
                        <p className="m-0 p-2">{task.title}</p>
                    </div>
                </div>

            )) : (
                <p>Loading...</p>
            )}
        </>
    )
}