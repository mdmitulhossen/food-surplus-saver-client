import './auth.css';
import authbg from '../../assets/Home/auth/auth.svg'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const RegisterPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        toast.success('Registration Successfull')
        console.log(data)
    }

    return (
        <div
            style={{ backgroundImage: `url(${authbg})` }}
            className=" w-full relative h-full"
        >
            <div className=' bg-white/80 foodContainer flex justify-center items-center py-10'>
                <div className="form-container">

                    <p className="text-4xl font-bold text-center mb-3 mt-5">Register</p>
                    <p className='font-medium text-center text-gray-400 mb-8'>Create a free account with your email.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <input {...register("name", { required: true })} type="text" className="input" placeholder="Name" />
                        {
                            errors.name && <p className='text-red-500 font-semibold'>Name is required</p>
                        }
                        <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                        <input {...register("password", { required: true })} type="password" className="input" placeholder="Password" />
                        <input {...register("photo", { required: true })} type="text" className="input" placeholder="photoURL" />
                        {
                            errors.photo && <p className='text-red-500 font-semibold'>photoURL is required</p>
                        }
                        <p className="page-link">
                            <span className="page-link-label">Forgot Password?</span>
                        </p>
                        <button className="form-btn">Register</button>
                    </form>
                    <p className="sign-up-label">
                        have an account?<span onClick={() => navigate('/login')} className="sign-up-link">Login</span>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;