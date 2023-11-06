import Adds from "../components/Adds";
import Breadcrumb from "../components/Breadcrumb";
import FoodCard from "../components/card/FoodCard";

const AvailableFooodPage = () => {
    return (
        <div >
            <Adds />
            <div className="foodContainer py-10">
                <Breadcrumb />

                <div className="mt-10 border rounded-md p-4">
                    <h1 className="text-4xl font-bold text-center text-[#0C4428] ">All Available Foods</h1>


                    <div className="grid grid-cols-12 mt-10">

                        <div className="md:col-span-3">

                        </div>
                        {/* right */}
                        <div className="md:col-span-9 grid grid-cols-3 gap-4">
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFooodPage;