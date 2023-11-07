import { useLocation, useNavigate } from 'react-router-dom';
import authbg from '../../assets/Home/auth/auth.svg'
import './auth.css';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import Spinner from '../../components/spinner/Spinner';

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { loading, signInWithEmailPassword, setLoading, googleSignIn, githubSignIn } = useAuth() || {};

    // Handle Login
    const handleLogin = (data) => {
        const { email, password } = data || {}
        // Sign In
        signInWithEmailPassword(email, password)
            .then((result) => {
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
                toast.error(err.message);
            });
    };


    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            });
    };

    // github sign in
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            });
    };

    return (
        <div
            style={{ backgroundImage: `url(${authbg})` }}
            className=" w-full relative h-full"
        >
            {
                loading && <div className='absolute w-full h-full bg-green-200/60 flex justify-center items-center'> <Spinner /></div>

            }
            <div className=' bg-white/80 foodContainer flex justify-center items-center py-10'>
                <div className="form-container">
                    <p className="title">Welcome back</p>
                    <form onSubmit={handleSubmit(handleLogin)} className="form">
                        <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                        {
                            errors.email && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                        }
                        <input {...register("password", { required: true })} type="password" className="input" placeholder="Password" />
                        {
                            errors.password && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                        }
                        <p className="page-link">
                            <span className="page-link-label">Forgot Password?</span>
                        </p>
                        <button type='submit' className="form-btn">Log in</button>
                    </form>
                    <p className="sign-up-label">
                        Don't have an account?<span onClick={() => navigate('/register')} className="sign-up-link">Sign up</span>
                    </p>
                    <div className="buttons-container">

                        <div onClick={handleGoogleSignIn} className="google-login-button">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span>Log in with Google</span>
                        </div>
                        <div onClick={handleGithubSignIn} className="apple-login-button">
                            <span className='text-2xl'><i className='bx bxl-github' ></i></span>
                            <span>Log in with github</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;