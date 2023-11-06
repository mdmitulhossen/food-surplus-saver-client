import about from '../../assets/Home/wave.svg'
import aboutus from '../../assets/Home/aboutus.jpg'

const HomeAbout = () => {
    return (
        <div className="">
            <section
                style={{ backgroundImage: `url(${about})` }}
                className=" bg-[#8DC53E]/10 dark:bg-gray-800 bg-no-repeat bg-cover">
                <div className="foodContainer pt-24 pb-10">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-[#0C4428]">
                                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-[#0C4428] md:text-5xl dark:text-gray-300">
                                        About Us
                                    </h1>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    At FoodSurplus Saver, we believe that every meal has a story, and every person deserves to enjoy the nourishment it brings. Our journey began with a simple yet powerful idea: to connect surplus food with those in need, reducing waste and hunger in our community.
                                </p>
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-[#8DC53E] dark:text-teal-400 text-4xl">
                                                <i className='bx bxs-basket'></i>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">20097
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Meals distributed in 2023 </h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">

                                            <span className="text-[#8DC53E] dark:text-teal-400 text-4xl">
                                                <i className='bx bxs-bowl-rice'></i>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,587590
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Pounds of food rescued each year</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-[#8DC53E] dark:text-teal-400 text-4xl">
                                            <i className='bx bxs-user' ></i>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-[#8DC53E] dark:text-teal-400 text-4xl">
                                                <i className='bx bxs-badge-dollar' ></i>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">$100872
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">The value of meals distributed in 2023</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <img src={aboutus} alt=""
                                className="relative z-40 object-cover w-full h-full rounded" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeAbout;