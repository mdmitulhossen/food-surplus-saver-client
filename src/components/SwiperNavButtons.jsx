import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper();
    return (
        // swiper-nav-btns
        <div className="absolute w-full  top-1/2 z-40 flex justify-between items-center">
            <button onClick={() => swiper.slidePrev()} className='py-2 px-3 flex justify-center items-center rounded-full bg-[#8DC53E] hover:text-white hover:bg-[#0C4428] duration-200'>
                <span className='text-2xl '><i className='bx bx-right-arrow-alt' ></i></span>
                {/* <box-icon name='left-arrow-alt' color='white' size='sm' ></box-icon> */}
            </button>
            
            <button onClick={() => swiper.slideNext()} className='p-2 flex justify-center items-center rounded-full bg-[#8DC53E] hover:bg-[#0C4428] duration-200'>
                <box-icon name='right-arrow-alt' color='white' size='sm' ></box-icon>
            </button>
        </div>
    );
};

export default SwiperNavButtons;