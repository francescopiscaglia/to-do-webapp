import CategoriesCard from "../components/CategoriesCard";
import CompletedButton from "../components/button/CompletedButton";

export default function HomePage() {

    // logic


    // render
    return (
        <>
            <div className="container py-4">

                <CompletedButton />

                <CategoriesCard />

            </div>
        </>
    );
};