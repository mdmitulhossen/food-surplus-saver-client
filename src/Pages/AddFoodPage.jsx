import Breadcrumb from "../components/Breadcrumb";
import bg from '../assets/addFood/addFoodbg.svg'
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Spinner from "../components/spinner/Spinner";
import { Helmet } from "react-helmet";

const AddFoodPage = () => {
    const { user } = useAuth() || {};
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()
     const {
        register,
        reset,
        handleSubmit,
        // formState: { errors },
    } = useForm()
    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (newFood) => {
            return await axiosSecure.post('/foods', newFood)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success('Food added successfully')
            reset()
        },
        onError: () => {
            toast.error("Something went wrong ! isn't added")
        },
        onSettled: () => {
            queryClient.invalidateQueries('availablefoods')
        }
    })




    // handle add product
    const handleAddProduct = (data) => {
        const { foodName, foodImgURL, quantity, location, expireDate, donatorName, donatorImageURL, donatorEmail, description, status } = data || {};

        const newFood = {
            foodName: foodName || '',
            foodImgURL: foodImgURL || '',
            quantity: quantity || '',
            location: location || '',
            expireDate: expireDate || '',
            donatorName: donatorName || '',
            donatorImageURL: donatorImageURL || '',
            donatorEmail: donatorEmail || '',
            description: description || '',
            status: status || '',
        };

        mutate(newFood)


    }


    return (
        <div>
            <Helmet><title>Food-Saver | Add-Foods</title></Helmet>
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            >
                {
                    isPending && <div className='z-10 absolute h-full w-full bg-[#8DC53E]/30 flex justify-center items-center'> <Spinner /></div>

                }
                <div className="w-full h-full bg-white/90">
                    <div className="foodContainer py-10">

                        <Breadcrumb path='Add Food' />

                        <div className="mt-10 border rounded-md px-2  py-8">

                            <h1 className="text-4xl font-bold text-center text-[#0C4428] ">Add Your Food </h1>
                            <p className="text-gray-500 lg:w-1/2 md:w-4/5 w-full mt-3 mx-auto text-center">
                                "Help reduce food waste and fight hunger in your community by adding details about the surplus food you have."
                            </p>



                            <div className="mt-20">
                                <form onSubmit={handleSubmit(handleAddProduct)} className="w-full mx-auto grid grid-cols-12 max-w-[850px] gap-5">
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Name : </p>
                                        <input {...register("foodName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food Name" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Image : </p>
                                        <input {...register("foodImgURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food Image Url" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2"> Quantity : </p>
                                        <input {...register("quantity")} min={0} type="number" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food quantity" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Pickup Location : </p>
                                        <input {...register("location")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Pickup Location" />
                                    </div>
                                    <div className="w-full col-span-full ">
                                        <p className="text-base font-medium mb-2">Expire Date : </p>
                                        <input {...register("expireDate")} type="date" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Expire Date" />
                                    </div>
                                    <div className="w-full col-span-full ">
                                        <p className="text-base font-medium mb-2">Food Description : </p>
                                        <textarea {...register("description")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="description" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Name : </p>
                                        <input {...register("donatorName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue={user?.displayName} />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Email : </p>
                                        <input {...register("donatorEmail")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue={user?.email} readOnly />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Image: </p>
                                        <input {...register("donatorImageURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue={user?.photoURL} readOnly />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Status : </p>
                                        <input {...register("status")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue='available' readOnly />
                                    </div>
                                    <button className='px-4 py-2 mx-auto w-[300px] col-span-full bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 '>Add Food</button>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoodPage;