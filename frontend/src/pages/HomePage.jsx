import { useEffect, useState } from "react"

export default function HomePage() {

    // logic

    // state
    const [categories, setCategories] = useState([]);

    const url = `http://localhost:3007/categories`

    // fetch data
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, []);

    // render
    return (
        <>
            {categories ? categories.map(category => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                </div>
            )) : (
                <p>Loading...</p>
            )}
        </>
    )
}