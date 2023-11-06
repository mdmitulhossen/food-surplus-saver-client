import featureFoodBg from "../../assets/Home/featureFood.jpg"
import FoodCard from "../../components/card/FoodCard";
import Title from "../../components/header/Title";
const FeatureFoods = () => {
    return (
        // backgroundSize: '100% 100%'
        <div
            style={{ backgroundImage: `url(${featureFoodBg})`, backgroundSize: '100% 100%' }}
            className=" w-full h-full bg-cover bg-repeat">
            <div className="bg-white/95 h-full w-full">
                <div className="foodContainer pt-16">
                      <Title
                            title="Our Feature Foods"
                            subTitle="We are a nonprofit organization that distributes food to hungry people. Find out how you can help us feed those in need in your community."
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                      </div>

                      <div className="flex justify-center w-full mt-10">
                            <button className='px-8 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200'>Show All</button>
                      </div>
                </div>
            </div>

            
        </div>

    );
};

export default FeatureFoods;