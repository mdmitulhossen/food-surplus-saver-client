import Breadcrumb from "../components/Breadcrumb";
import bg from '../assets/addFood/addFoodbg.svg'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../components/spinner/Spinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyFoodUpdatePage = () => {
    const params = useParams()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()


    // tanstack query data load
    const { data: updateFoodsData, isLoading } = useQuery({
        queryKey: ['updatefoods'],
        queryFn: async () => {
            return await axiosSecure.get(`/foods/${params?.id}`)
        }
    })


    // useMutation tanstack query
    const { mutate, isPending} = useMutation({
        mutationFn: async (updateFood) => {
            return await axiosSecure.put(`/foods/${params?.id}`, updateFood)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success('Food updated successfully');
        },
        onError: () => {
            toast.error("Something went wrong ! isn't updated")
        },
        onSettled: () => {
            queryClient.invalidateQueries('updatefoods')
        }
    })


    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors,isLoading:isFormLoading },
    } = useForm(
        {
            defaultValues: async () => {
                const updateData = await axiosSecure.get(`/foods/${params?.id}`)
                return await updateData?.data
            }
        }
    )

    // {
    //     foodName: updateFoodsData?.data?.foodImgURL || 'afsdf',
    //     foodImgURL: updateFoodsData?.data?.foodImgURL,
    //     quantity: updateFoodsData?.data?.quantity,
    //     location: updateFoodsData?.data?.location,
    //     expireDate: updateFoodsData?.data?.expireDate,
    //     donatorName: updateFoodsData?.data?.donatorName,
    //     donatorImageURL: updateFoodsData?.data?.donatorImageURL,
    //     donatorEmail: updateFoodsData?.data?.donatorEmail,
    //     description: updateFoodsData?.data?.description,
    //     status: updateFoodsData?.data?.status,       
    // }
    // handle update myFoods

    const handleUpdateMyFoods = (data) => {
        const { foodName, foodImgURL, quantity, location, expireDate, donatorName, donatorImageURL, donatorEmail, description, status } = data || {};

        const updateFood = {
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

        console.log(updateFood)

        mutate(updateFood)
    }

    return (
        <div className="relative">
            <Helmet><title>Food-Saver | {updateFoodsData?.data?.foodName}</title></Helmet>
            {
                isLoading || isPending || isFormLoading ? <div className='z-10 h-full absolute w-full bg-[#8DC53E]/30 flex justify-center items-center'> <Spinner /></div>:null

            }
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="w-full h-full bg-cover bg-center bg-no-repeat"
            >

                <div className="w-full h-full bg-white/90">
                    <div className="foodContainer py-10">
                        <Breadcrumb path='update Food' />

                        <div className="mt-10 border rounded-md px-2  py-8">
                            <h1 className="text-4xl font-bold text-center text-[#0C4428] ">Update  Food</h1>


                            <div className="mt-20">
                                <form onSubmit={handleSubmit(handleUpdateMyFoods)} className="w-full mx-auto grid grid-cols-12 max-w-[850px] gap-5">
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Name : </p>
                                        <input name="foodName" {...register("foodName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Image : </p>
                                        <input {...register("foodImgURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2"> Quantity : </p>
                                        <input {...register("quantity")} min={0} type="number" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Pickup Location : </p>
                                        <input {...register("location")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full ">
                                        <p className="text-base font-medium mb-2">Expire Date : </p>
                                        <input {...register("expireDate")} type="date" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full ">
                                        <p className="text-base font-medium mb-2">Food Description : </p>
                                        <textarea {...register("description")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Name : </p>
                                        <input {...register("donatorName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Email : </p>
                                        <input {...register("donatorEmail")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Image: </p>
                                        <input  {...register("donatorImageURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Status : </p>
                                        <input {...register("status")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" />
                                    </div>
                                    <button className='px-4 py-2 mx-auto w-[300px] col-span-full bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 '>Update Food</button>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFoodUpdatePage;