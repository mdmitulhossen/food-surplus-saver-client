import { useNavigate } from "react-router-dom";
import featureFoodBg from "../../assets/Home/featureFood.jpg"
import FoodCard from "../../components/card/FoodCard";
import Title from "../../components/header/Title";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/spinner/Spinner";

const FeatureFoods = () => {
    const navigate = useNavigate()
    // tanstack query data load
    const { data: featureFoods, isLoading, isPending, isSuccess, refetch } = useQuery({
        queryKey: ['featureFoods'],
        queryFn: async () => {
            return await axios.get('https://food-surplus-saver.vercel.app/featuredFoods')
        }
    })

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
                    {
                            isLoading && <div className=' z-10 flex justify-center items-center h-[200px]'> <Spinner /></div>
                    
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                        {
                            isSuccess && featureFoods?.data && featureFoods?.data?.map((food, index) => <FoodCard key={index} food={food} />)
                        }

                    </div>

                    <div className="flex justify-center w-full mt-10">
                        <button onClick={() => navigate('/availableFoods')} className='px-8 py-2 bg-[#8DC53E] text-base rounded-md font-semibold hover:bg-[#0C4428] hover:text-white duration-200'>Show All</button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default FeatureFoods;