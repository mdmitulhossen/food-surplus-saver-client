import Breadcrumb from "../components/Breadcrumb";
import bg from '../assets/addFood/addFoodbg.svg'
import { useForm } from "react-hook-form";

const MyFoodUpdatePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="w-full h-full bg-cover bg-center bg-no-repeat"
            >
                <div className="w-full h-full bg-white/90">
                    <div className="foodContainer py-10">
                        <Breadcrumb path='update Food' />

                        <div className="mt-10 border rounded-md px-2  py-8">
                            <h1 className="text-4xl font-bold text-center text-[#0C4428] ">Update Your Food</h1>
                          

                            <div className="mt-20">
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto grid grid-cols-12 max-w-[850px] gap-5">
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
                                        <input {...register("donatorName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue="donator" />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Email : </p>
                                        <input {...register("donatorEmail")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue="donator@gmail.com" readOnly />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Image: </p>
                                        <input {...register("donatorImageURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue="https://imgbb/ashasifasdfa/im.jpg" readOnly />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Status : </p>
                                        <input {...register("status")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue='available' readOnly />
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