


// import Swiper core and required modules
import { Navigation, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavButtons from '../../components/SwiperNavButtons';
import TestimonialCard from '../../components/card/TestimonialCard';
import Title from '../../components/header/Title';


const HomeTestimonial = () => {
    return (
        <div>
            {/* header */}
            <Title
                title="Testimonials"
                subTitle="Real Stories, Happy neighbor See What Our Satisfied Users Are Saying About Our Services."
            />
            {/* container */}
            <div className="mt-10 ">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay,Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default HomeTestimonial;