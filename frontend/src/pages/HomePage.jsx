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
                // console.log(data);
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // render
    return (
        <>
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    {categories ? categories.map(category => (
                        <div className="card text-center" key={category.id} style={{ width: "18rem", margin: "5px" }}>
                            <div className="d-flex align-items-center ps-1">
                                <i className="bi bi-bookmark-fill text-primary m-0 p-0" style={{ verticalAlign: "middle" }}></i>
                                <p className="m-0 p-2">{category.name}</p>
                            </div>
                        </div>

                    )) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

        </>
    )
}