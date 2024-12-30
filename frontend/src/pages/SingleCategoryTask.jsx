import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TaskCard from "../components/TaskCard";

export default function SingleCategoryTask() {

    // useState for fetch data
    const [tasks, setTasks] = useState([]);

    // get category_id 
    const { category_id } = useParams();

    // API url
    const url = `http://localhost:3007/categories/${category_id}/tasks`;

    // fetch data
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTasks(data)
            })
            .catch(err => console.error(err))
    });

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">

                <TaskCard tasks={tasks} />

            </div>
        </>
    )
}