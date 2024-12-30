import { useState, useEffect } from 'react'
import TaskCard from '../components/TaskCard';

export default function CompletedPage() {

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

    // render
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">

                <TaskCard tasks={completedTask} isCompleted={true} />

            </div>
        </>
    )
}