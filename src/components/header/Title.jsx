import PropTypes from 'prop-types';

const Title = ({title,subTitle}) => {
    return (
        <div className="w-full text-center flex flex-col items-center">
            <h1 className="xl:text-[42px] text-[36px] font-bold text-[#0C4428]">{title}</h1>
            <p className="w-full md:w-4/5 xl:w-1/2">{subTitle}</p>
        </div>
    );
   
};

Title.prototype = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}
export default Title;