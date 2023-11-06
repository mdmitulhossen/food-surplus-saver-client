import user from './../assets/user.jpg'
import food from './../assets/Home/food/berry-smoothies.jpg'
import { useForm } from 'react-hook-form';
const FoodDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    const onSubmit = (data) => console.log(data)

    return (
        <div className='foodContainer mt-10'>
            <p className='text-3xl font-bold text-[#0C4428] text-center' >FOOD Name</p>
            <div className="md:flex items-start justify-center py-12 ">
                <div className="xl:w-2/6 lg:w-2/5 w-80 mx-auto md:mx-5 md:block  border">
                    <img className="w-full h-full mx-auto" alt="img of a girl posing" src={food} />

                </div>

                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-2">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                        >
                            Donar
                        </h1>
                    </div>
                    <div className='border-b border-gray-200 pb-2'>
                        {/* donator and location */}
                        <div className='flex justify-between gap-3 flex-wrap pt-5 '>
                            <div className='flex gap-2 items-center'>
                                <span className='w-10 h-10 rounded-full border'>
                                    <img src={user} className='w-full rounded-full object-cover' alt="" />
                                </span>
                                <div>
                                    <p className='text-[#0C4428] font-bold'>John Doe</p>
                                    <p className='text-gray-800/70'>Donator</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-3xl text-[#0C4428]'><i className='bx bx-current-location'></i></span>
                                <div>
                                    <p className='text-[#0C4428] font-bold'>Location</p>
                                    <p className='text-gray-800/70'>Mirpur,Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 border-b border-gray-200">
                        <div className='flex justify-between gap-3 flex-wrap'>
                            <div className='flex gap-2 items-center'>

                                <span className='text-3xl text-[#0C4428]'><i className='bx bx-shield-plus'></i></span>
                                <div>
                                    <p className='text-[#0C4428] font-bold'>Quantity</p>
                                    <p className='text-gray-800/70'>5</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-3xl text-[#0C4428]'><i className='bx bxs-timer' ></i></span>
                                <div>
                                    <p className='text-[#0C4428] font-bold'>Expired Date</p>
                                    <p className='text-gray-800/70'>10-12-2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        data-hs-overlay="#hs-notifications"
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
                        rounded-md
                        font-semibold
                        duration-200
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-[#8DC53E]
						w-full
						py-4
						hover:bg-[#0C4428]
					"
                    >
                        <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Request
                    </button>
                    <div>
                        <p className="xl:pr-20 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                    </div>


                </div>
            </div>



            {/* Modal */}

            <div id="hs-notifications" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="absolute top-2 right-2">
                            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-notifications">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4 sm:p-10 overflow-y-auto">
                            <div className="mb-6 text-center">
                                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                    Notifications
                                </h3>
                                <p className="text-gray-500">
                                    Get notified of activity at Preline
                                </p>
                            </div>

                            <div className="space-y-4">

                                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto grid grid-cols-12 max-w-[850px] gap-5">
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Id : </p>
                                        <input {...register("foodID")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food id" readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Name : </p>
                                        <input {...register("foodName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food Name" readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Food Image : </p>
                                        <input {...register("foodImgURL")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Food Image Url" readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Name : </p>
                                        <input {...register("donatorName")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue="donator" readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donator Email : </p>
                                        <input {...register("donatorEmail")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue="donator@gmail.com" readOnly />
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2"> Your Email : </p>
                                        <input {...register("userEmail")}  type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="user email" readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Requested Date: </p>
                                        <input {...register("requestedDate")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" defaultValue={today}  readOnly/>
                                    </div>
                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Pickup Location : </p>
                                        <input {...register("location")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Pickup Location" readOnly/>
                                    </div>
                                    <div className="w-full md:col-span-6 col-span-full ">
                                        <p className="text-base font-medium mb-2">Expire Date : </p>
                                        <input {...register("expireDate")} type="date" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Expire Date" readOnly/>
                                    </div>


                                    <div className="w-full col-span-full md:col-span-6">
                                        <p className="text-base font-medium mb-2">Donation Money : </p>
                                        <input {...register("donationMoney")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder='Donation Money' />
                                    </div>
                                    <div className="w-full col-span-full ">
                                        <p className="text-base font-medium mb-2">Your Message : </p>
                                        <textarea {...register("userMessge")} type="text" className="px-4 py-2 border border-[#8DC53E] rounded-md w-full" placeholder="Your Message" />
                                    </div>
                                    
                                   
                                    
                                    <button className='px-4 py-2 mx-auto w-[300px] col-span-full bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 '>Request Food</button>

                                </form>

                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700">
                            <button type="button" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-notifications">
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FoodDetails;