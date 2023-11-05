import bannerBg from '../../assets/Home/bannerBg.png'

const Hero = () => {
    return (
        <div className='relative'>
            <img className='h-[500px] lg:h-[700px] object-cover w-full' src={bannerBg} alt="" />
            <div className=' bg-gradient-to-t from-black/10 to-black/80 absolute inset-0'>
                <div className='w-full h-full foodContainer flex items-center justify-center lg:justify-normal'>
                    <p className='xl:text-[55px] lg:text-[45px] md:text-[42px] text-[40px] font-bold text-white text-center lg:text-left'>Uniting Communities  <br/>
                        <span className='inline-block '>to Share Surplus,</span><br />
                        <span>Erase Hunger</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;