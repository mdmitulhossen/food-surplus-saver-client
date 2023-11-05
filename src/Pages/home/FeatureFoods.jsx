import featureFoodBg from "../../assets/Home/featureFood.jpg"
import FoodCard from "../../components/card/FoodCard";
import Title from "../../components/header/Title";
const FeatureFoods = () => {
    return (
        // backgroundSize: '100% 100%'
        <div
            style={{ backgroundImage: `url(${featureFoodBg})`, backgroundSize: '100% 100%' }}
            className=" w-full h-full bg-cover bg-repeat mb-10 ">
            <div className="bg-white/95 h-full w-full">
                <div className="foodContainer pt-16">
                      <Title/>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                        <FoodCard/>
                      </div>
                </div>
            </div>
        </div>

    );
};

export default FeatureFoods;