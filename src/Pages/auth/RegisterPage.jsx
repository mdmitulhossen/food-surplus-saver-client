import './auth.css';
import authbg from '../../assets/Home/auth/auth.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Spinner from '../../components/spinner/Spinner';
import { Helmet } from 'react-helmet';
import axios from 'axios';
const RegisterPage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { signUpWithEmailPassword, updateUserProfile, loading, setLoading,
    } = useAuth() || {};


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()




    // Handle register
    const handleRegister = (data) => {
        const { name, email, password, photoURL } = data || {}
        // console.log(data)

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }
        //create user
        signUpWithEmailPassword(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then((r) => {
                        axios.post('https://food-surplus-saver.vercel.app/jwt', { email: r?.user.email }, { withCredentials: true })
                            .then(res => {
                                setLoading(false);
                                navigate(location?.state ? location.state : "/");
                                toast.success("Registration successful");
                            })

                    })
                    .catch((err) => {
                        setLoading(false);
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });

    }




    // console.log(user)

    return (
        <div
            style={{ backgroundImage: `url(${authbg})` }}
            className=" w-full relative h-full"
        >
            <Helmet><title>Register</title></Helmet>
            {
                loading && <div className='absolute w-full h-full bg-green-200/60 flex justify-center items-center'> <Spinner /></div>

            }
            <div className=' bg-white/80 foodContainer flex justify-center items-center py-10'>
                <div className="form-container">

                    <p className="text-4xl font-bold text-center mb-3 mt-5">Register</p>
                    <p className='font-medium text-center text-gray-400 mb-8'>Create a free account with your email.</p>
                    <form onSubmit={handleSubmit(handleRegister)} className="form">
                        <input {...register("name", { required: true })} type="text" className="input" placeholder="Name" />
                        {
                            errors.name && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                        }
                        <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                        {
                            errors.email && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                        }
                        <input {...register("password", { required: true })} type="password" className="input" placeholder="Password" />
                        {
                            errors.password && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                        }
                        <input {...register("photoURL", { required: true })} type="text" className="input" placeholder="photoURL" />
                        {
                            errors.photo && <p className='text-red-500 text-sm font-semibold'>photoURL is required</p>
                        }
                        <p className="page-link">
                            <span className="page-link-label">Forgot Password?</span>
                        </p>
                        <button type='submit' className="form-btn">Register</button>
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