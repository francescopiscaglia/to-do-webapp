import CategoriesCard from "../components/CategoriesCard";
import AllTasksButton from "../components/button/AllTasksButton";
import CompletedButton from "../components/button/CompletedButton";

export default function HomePage() {

    // logic


    // render
    return (
        <>
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