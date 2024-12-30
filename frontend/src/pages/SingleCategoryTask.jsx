import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
            <p className="text-white">Category ID: {category_id}</p>
            {tasks.map(task => (
                <div key={task.id}>
                    <h1 className="text-white">{task.title}</h1>
                    <p className="text-white">{task.description}</p>
                </div>
            ))}
        </>
    )
}