import { useNavigate } from 'react-router-dom';
import berry from '../../assets/Home/food/berry-smoothies.jpg'
import user from '../../assets/user.jpg'

const FoodCard = ({ food }) => {

    const { createdAt, description, donatorEmail, donatorImageURL, donatorName, expireDate, foodImgURL, foodName, location, quantity, status, _id, } = food || {};


    // console.log(food)
    const navigate = useNavigate()
    return (
        <div className='h-full'>
            <div className="flex w-full h-full flex-col grow group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] " >
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[50%] rounded-t-xl overflow-hidden ">
                    <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={foodImgURL} alt="Image Description" />
                </div>
                <div className="p-4 md:p-5">
                    <h3 className="text-xl font-bold text-[#0C4428] dark:text-white">
                        {foodName}
                    </h3>
                    <p className="mt-1 text-gray-800/70 dark:text-gray-400">
                        {
                            description?.length > 30 ? description?.slice(0, 30) + '...' : description
                        }
                    </p>
                </div>
                <div className="px-4 md:px-5 flex-grow flex flex-col">
                    {/* donator and location */}
                    <div className='flex justify-between gap-3 flex-grow'>
                        <div className='flex gap-2 items-center'>
                            <span className='w-10 h-10 rounded-full border'>
                                <img src={donatorImageURL} className='w-full rounded-full object-cover' alt="" />
                            </span>
                            <div className='flex-grow'>
                                <p className='text-[#0C4428] font-bold'>{donatorName}</p>
                                <p className='text-gray-800/70'>Donator</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-3xl text-[#0C4428]'><i className='bx bx-current-location'></i></span>
                            <div className='flex-grow'>
                                <p className='text-[#0C4428] font-bold'>{Location}</p>
                                <p className='text-gray-800/70'>{location}</p>
                            </div>
                        </div>
                    </div>
                    {/* Quantity and Expired date */}
                    <div className='flex justify-between gap-3 my-5 flex-grow'>
                        <div className='flex gap-2 items-center'>

                            <span className='text-3xl text-[#0C4428]'><i className='bx bx-shield-plus'></i></span>
                            <div className='flex-grow'>
                                <p className='text-[#0C4428] font-bold'>Quantity</p>
                                <p className='text-gray-800/70'>{quantity}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-3xl text-[#0C4428]'><i className='bx bxs-timer' ></i></span>
                            <div className='flex-grow'>
                                <p className='text-[#0C4428] font-bold'>Expired Date</p>
                                <p className='text-gray-800/70'>{expireDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate(`/food/${_id}`)} className='px-4 py-2 w-full bg-[#8DC53E] text-base rounded-b-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200'>View Details</button>
            </div>
        </div>
    );
};

export default FoodCard;