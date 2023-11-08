import { useForm } from "react-hook-form";
import Adds from "../components/Adds";
import Breadcrumb from "../components/Breadcrumb";
import FoodCard from "../components/card/FoodCard";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../components/spinner/Spinner";
import { Helmet } from "react-helmet";
import axios from "axios";

const AvailableFooodPage = () => {
    const [allFoodData, setAllFoodData] = useState([])
    // const axiosSecure = useAxiosSecure()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])


    // tanstack query data load
    const { data: foodsData, isLoading, isPending, isSuccess, refetch } = useQuery({
        queryKey: ['availablefoods'],
        queryFn: async () => {
            const res = await axios.get('https://food-surplus-saver.vercel.app/foods?status=available')
            const data = await res.data
            return data
        }
    })

    useEffect(() => {
        if (foodsData) {
            setAllFoodData(foodsData)
        }
    }, [foodsData])

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    // handle search
    const handleSearch = (data) => {
        const filterData = foodsData?.filter(food => food?.foodName?.toLowerCase().includes(data?.search.toLowerCase()))
        console.log(filterData)
        setAllFoodData(filterData)
    }

    // handle sort
    const handleSort = (data) => {
        const filterData = foodsData?.sort((a, b) => {
            if (data?.sort === 'expireDate') {
                return new Date(a?.expireDate) - new Date(b?.expireDate)
            }
        })
        console.log(filterData)
        setAllFoodData(filterData)
    } 
    return (
        <div >
            <Helmet><title>Food-Saver | Available-Foods</title></Helmet>
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
                                <input onKeyUp={handleSubmit(handleSearch)}
                                    {...register("search")}
                                    type="text" placeholder="serach by food name"
                                    className="px-1 py-2 border border-[#8DC53E] rounded-md w-full"
                                />
                            </div>
                            <div>
                                <p className="text-xl font-bold mb-2">Sort</p>
                                <select onChange={handleSubmit(handleSort)}  {...register("sort")} className="px-1 py-2 border border-[#8DC53E] rounded-md w-full">
                                    <option value="sort" selected>Sort</option>
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
                        {
                            isPending && <div className='lg:col-span-9 col-span-full z-10 flex justify-center mt-20'> <Spinner /></div>
                        }
                        <div className="col-span-full lg:col-span-9 grid xl:grid-cols-3 md:grid-cols-2 gap-2">

                            {
                                allFoodData?.length === 0 ? <div className="col-span-full flex justify-center items-center">No Data Available</div>:
                                isSuccess && foodsData && allFoodData.map((food) => <FoodCard key={food._id} food={food} />)
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFooodPage;