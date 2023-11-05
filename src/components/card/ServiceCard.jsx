import service1 from '../../assets/Home/service1.jpg';
import service2 from '../../assets/Home/service2.jpg';
import service3 from '../../assets/Home/service3.jpg';
import './card.css'

const ServiceCard = () => {
    // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-16 '>
          

            {/* one */}
            <div className='bg-white  w-full shadow-lg  rounded-md cursor-pointer'>
                <div className="flip-card w-full rounded-md">
                    <div className="flip-card-inner rounded-md">
                        <div className="flip-card-front rounded-md">
                            <img src={service1} alt="Avatar" className='h-[300px] w-full object-cover rounded-md' />
                        </div>
                        <div className="flip-card-back rounded-md bg-[#0C4428] text-white flex flex-col justify-center items-center text-lg p-10">
                            <p>
                                Our network of community-based partners and programs is here to provide free groceries, fresh produce, and nutritious meals for all.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='text-center font-bold text-2xl pt-5 pb-10 relative'>
                    <p className='text-[#0C4428] '>Our Food Programs</p>
                    <button className='px-4 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>Learn More</button>
                </div>
            </div>
            {/* two */}
            <div className='bg-white  w-full shadow-lg  rounded-md cursor-pointer'>
                <div className="flip-card w-full rounded-md">
                    <div className="flip-card-inner rounded-md">
                        <div className="flip-card-front rounded-md">
                            <img src={service2} alt="Avatar" className='h-[300px] w-full object-cover rounded-md' />
                        </div>
                        <div className="flip-card-back rounded-md bg-[#0C4428] text-white flex flex-col justify-center items-center text-lg p-10">
                            <p>
                                Help ensure anyone who needs a healthy meal is able to get one. Your donation today can make that possible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='text-center font-bold text-2xl pt-5 pb-10 relative'>
                    <p className='text-[#0C4428] '>Donate Food or Share</p>
                    <button className='px-4 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>Learn More</button>
                </div>
            </div>
            {/* three */}
            <div className='bg-white  w-full shadow-lg  rounded-md cursor-pointer'>
                <div className="flip-card w-full rounded-md">
                    <div className="flip-card-inner rounded-md">
                        <div className="flip-card-front rounded-md">
                            <img src={service3} alt="Avatar" className='h-[300px] w-full object-cover rounded-md' />
                        </div>
                        <div className="flip-card-back rounded-md bg-[#0C4428] text-white flex flex-col justify-center items-center text-lg p-10">
                            <p>
                                Lend a hand, help a neighbor. We rely on volunteers every day to help distribute food to our neighbors. With multiple ways to get involved, the perfect spot on our team awaits.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='text-center font-bold text-2xl pt-5 pb-10 relative'>
                    <p className='text-[#0C4428] '>Volunteer With Us</p>
                    <button className='px-4 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>Learn More</button>
                </div>
            </div>




        </div>
    );
};

export default ServiceCard;