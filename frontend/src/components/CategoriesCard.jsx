import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function CategoriesCard() {
    // add loader

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
            <div className="text-center text-light">Categories</div>

            <div className="d-flex flex-column align-items-center justify-content-center">

                {categories ? categories.map(category => (

                    <Link
                        to={`/category-tasks/${category.id}`}
                        key={category.id}
                        className="text-decoration-none"
                    >
                        <div className="card text-center" key={category.id} style={{ width: "18rem", margin: "5px" }}>
                            <div className="d-flex align-items-center ps-1">
                                <i
                                    className={`bi ${category.name === "Work" ? "bi-display text-secondary" : category.name === "Hobby" ? "bi-person text-primary" : "bi-archive text-info"} m-0 p-0`}
                                    style={{ verticalAlign: "middle" }}
                                ></i>
                                <p className="m-0 p-2">{category.name}</p>
                            </div>
                        </div>
                    </Link>

                )) : (
                    <p>Loading...</p>
                )}

            </div>
        </>
    );
};