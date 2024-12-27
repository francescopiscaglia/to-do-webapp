import { Helmet } from "react-helmet";
import CategoriesCard from "../components/CategoriesCard";
import AllTasksButton from "../components/button/AllTasksButton";
import CompletedButton from "../components/button/CompletedButton";

export default function HomePage() {
    // render
    return (
        <>
            <Helmet>
                <title>Home page - To Do List</title>
            </Helmet>
            <div className="container py-4">

                <div className="d-flex justify-content-center mb-4">
                    <AllTasksButton />
                    <CompletedButton />
                </div>

                <CategoriesCard />

            </div>
        </>
    );
};