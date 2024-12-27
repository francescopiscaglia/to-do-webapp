import { Link } from "react-router-dom";

export default function AllTasksButton() {
    return (
        <Link to="/all-tasks" className="text-decoration-none">
            <div id="compleated-tasks" className="card text-light" style={{ width: "10rem", margin: "5px" }}>

                <div className="d-flex align-items-center p-2">

                    <i className="bi bi-list-task text-secondary fs-4 m-0 p-0"></i>
                    <p className="m-0 ms-2 text-secondary" style={{ fontSize: "14px" }}>All</p>
                </div>

            </div>
        </Link>
    )
}