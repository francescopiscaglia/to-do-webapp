import { useState, useEffect } from 'react'
import AllTasksCard from '../components/AllTasksCard';

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

    // remove completed tasks
    const allTaskNotCompleted = tasks.filter(task => task.completed === 0);

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">

                <AllTasksCard tasks={allTaskNotCompleted} />

            </div>
        </>
    )
}