import { useForm } from "react-hook-form";
import Adds from "../components/Adds";
import Breadcrumb from "../components/Breadcrumb";
import FoodCard from "../components/card/FoodCard";

const AvailableFooodPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div >
            <Adds />
            <div className="foodContainer py-10">
                <Breadcrumb path="Available Foods" />

                <div className="mt-10 border rounded-md p-2 pt-8">
                    <h1 className="text-4xl font-bold text-center text-[#0C4428] ">All Available Foods</h1>


                    <div className="grid grid-cols-12 mt-10 gap-2">
                        {/* left search and sort */}
                        <div className="col-span-full lg:col-span-3  space-y-5">
                            <div>
                                <p className="text-xl font-bold mb-2">Search</p>
                                <input
                                    {...register("search")}
                                    type="text" placeholder="serach by food name"
                                    className="px-1 py-2 border border-[#8DC53E] rounded-md w-full"
                                />
                            </div>
                            <div>
                                <p className="text-xl font-bold mb-2">Sort</p>
                                <select name="" id="" {...register("sort")} className="px-1 py-2 border border-[#8DC53E] rounded-md w-full">
                                    <option value="" selected disabled>Sort</option>
                                    <option value="expireDate">Expire Date</option>
                                </select>
                                {/* <input
                                    {...register("search")}
                                    type="text" placeholder="serach by food name"
                                    className="px-1 py-2 border rounded-md w-full"
                                /> */}
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-span-full lg:col-span-9 grid xl:grid-cols-3 md:grid-cols-2 gap-2">
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