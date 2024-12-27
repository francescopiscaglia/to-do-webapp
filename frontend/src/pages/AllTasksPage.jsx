import { useState, useEffect } from 'react'

export default function AllTasksPage() {

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

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">

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

            </div>
        </>
    )
}