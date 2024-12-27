import { useEffect, useState } from "react"
import CategoriesCard from "../components/CategoriesCard";
import CompletedCard from "../components/CompletedCard";

export default function HomePage() {

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
            <div className="container py-4">

                <CompletedCard />

                <CategoriesCard />

            </div>
        </>
    );
};