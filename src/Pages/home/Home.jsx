import Hero from "../../components/header/Hero";
import ServiceCard from "../../components/card/ServiceCard";
import FeatureFoods from "./FeatureFoods";
import TestimonialCard from "../../components/card/TestimonialCard";
import HomeTestimonial from "./HomeTestimonial";
import HomeAbout from "./HomeAbout";

// img import 
import findfoodbg from '../../assets/Home/map.jpg'
import footerimage from '../../assets/Home/footerAbove.jpg'
const Home = () => {
    return (
        <div>
            <Hero />

            {/* services section */}
            <div
                style={{ backgroundImage: `url(${findfoodbg})` }}
                className=" bg-cover bg-no-repeat w-full pb-16">

                <div className="foodContainer ">
                    <div className="w-full relative -mt-10">
                        <ServiceCard />
                    </div>
                </div>

                {/* Find food on map btn */}
                <div className="foodContainer text-center mt-24 space-y-2">
                    <p className="text-3xl font-bold text-[#0C4428]">Find Food Resources Near You</p>
                    <p className="font-bold">Search our map to find free groceries and meals at a food pantry or program near you. </p>
                    <button className='px-4 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200'>Find Food</button>
                </div>
            </div>

            {/* Our Feature Foods */}
            <div>
                <FeatureFoods />
            </div>
            {/* testimonial */}
            <div className="foodContainer my-24">
                <HomeTestimonial />
            </div>

            {/* about us Foods */}
            <div className="">
                <HomeAbout />
            </div>


            <div className="w-full">
                <img src={footerimage} className="w-full" alt="" />
            </div>


        </div>
    );
};

export default Home;