import adds from '../assets/adds.gif'
const Adds = () => {
    return (
        <div className="w-full bg-[#0C4428]/80 flex justify-center items-center gap-2 text-white py-2">
            <img src={adds} className='w-8' alt="" />
            <p className='text-sm font-bold'>
                In every shared meal, there's a story, a connection, and a gesture of kindness
            </p>
        </div>
    );
};

export default Adds;