import { useState, useEffect } from 'react'

export default function CompletedCard() {

    // logic
    const [tasks, setTasks] = useState([]);

    const url = `http://localhost:3007/categories/tasks`;

    // fetch data
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setTasks(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // filter completed tasks
    const completedTask = tasks.filter(task => task.completed === 1);
    // console.log(completedTask);

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