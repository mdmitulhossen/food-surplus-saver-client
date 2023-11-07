import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const Navbar = () => {
  const location = useLocation()
  const [userOpen, setUserOpen] = useState(false)
  const { user,logOut } = useAuth() || {};

  console.log(user)

  
  const handleLogOut = ()=>{
    logOut()
    .then(result => toast.success('successfully Logout'))
    .catch(err => toast.error(err))
    setUserOpen(false)
  }
  const menu = [
    { path: '/', name: 'Home' },
    { path: '/availableFoods', name: 'Available-Foods' },
    { path: '/food/add', name: 'Add-Food' },
    { path: '/myFoods/manage', name: 'Manage-My-Foods' },
    { path: '/myFoods/request', name: 'My-Food-Request' },

  ]
  return (
    <div className={`${location.pathname==='/' ? 'absolute ':'bg-[#0C4428]' }  top-0 w-full z-50`}>
      <header className=" z-50 w-full bg-transparent  py-3 lg:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav className="relative foodContainer w-full lg:flex lg:items-center lg:justify-between " aria-label="Global">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className='flex items-center gap-2'>
              <img src={logo} className='w-[35px] h-[35px] object-fill ' alt="" />
              <Link className="flex-none text-lg sm:text-2xl lg:text-xl xl:text-2xl font-bold dark:text-white text-white" href="#" aria-label="Brand">Food-<span className='text-[#c0ffc5]'>Surplus</span>-Saver</Link>
            </div>
          {/* user menu login mobile menu*/}
            <div className='flex gap-5 lg:hidden'>
              <div>
                {
                  user ? <div className="relative lg:border-l sm:border-[#618264] lg:my-6 lg:pl-6 dark:border-gray-700 max-w-[250px] lg:w-auto">
                    <button onClick={() => setUserOpen(!userOpen)} type="button" className="flex mx-auto items-center justify-center transition-all ">
                      <div className="relative inline-block">
                        <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-[#618264] dark:ring-gray-800 " src={user?.photoURL} alt="Image Description" />
                        <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-[#618264]"></span>
                      </div>
                    </button>
                    <div className={`absolute ${userOpen ? 'block' : 'hidden'}  top-10 right-4 max-w-[250px] min-w-[200px] bg-[#c0ffc5] border-[#618264] z-40 shadow-xl p-4 border rounded-md`}>
                      <p className='font-bold mb-2 text-center'>{user?.displayName}</p>
                      <button onClick={handleLogOut} className='flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-[#618264] rounded-md hover:bg-[#64AF5D] transition-all'>Logout</button>
                    </div>
                  </div>
                    :
                    <NavLink  to='/login' className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-[#64AF5D] lg:border-l sm:border-gray-300 lg:my-6 lg:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#618264]">
                      <button type="button" className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-black hover:text-white bg-[#c0ffc5] rounded-md hover:bg-[#64AF5D] transition-all">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                          </svg>
                          <span className="inline-block">Login</span>
                        </span>
                      </button>
                    </NavLink>
                }
              </div>


              <div className="">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#c0ffc5] text-black hover:text-white shadow-sm align-middle hover:bg-[#618264]/80 focus:outline-none   text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* menu */}
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden transition-all duration-200 basis-full grow lg:block bg-[#c0ffc5] rounded lg:rounded-none  p-5 mt-5 lg:bg-transparent lg:p-0 lg:mt-0">
            <div className="flex flex-col gap-y-4 gap-x-0  lg:flex-row lg:items-center lg:justify-end lg:gap-y-0 lg:gap-x-3 xl:gap-x-7 lg:mt-0 lg:pl-2 xl:pl-7 pr-3">
              {
                menu.map((item, index) => <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "lg:text-[#c0ffc5] font-semibold text-base border-b-4 border-[#305f34] lg:border-[#c0ffc5] w-fit" : "font-semibold font-sans text-base lg:text-white"
                  }
                >{item.name}</NavLink>)
              }

              {
                user ? <div className="relative hidden lg:block lg:border-l sm:border-[#618264] lg:my-6 lg:pl-6 dark:border-gray-700 max-w-[250px] lg:w-auto">
                  <button onClick={() => setUserOpen(!userOpen)} type="button" className="flex mx-auto items-center justify-center transition-all mt-6 lg:mt-0">
                    <div className="relative inline-block">
                      <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={user?.photoURL} alt="Image Description" />
                      <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-[#618264]"></span>
                    </div>
                  </button>
                  <div className={`lg:absolute ${userOpen ? 'block' : 'hidden'}   top-10 right-4 max-w-[250px]  lg:min-w-[200px] bg-[#c0ffc5] border-[#618264] z-40 shadow-xl p-4 border rounded-md`}>
                    <p className='font-bold mb-2 text-center'>{user?.displayName}</p>
                    <button onClick={handleLogOut} className='flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-[#618264] rounded-md hover:bg-[#64AF5D] transition-all'>Logout</button>
                  </div>
                </div>
                  :
                  <NavLink to='/login' className=" hidden lg:flex items-center gap-x-2 font-medium  lg:border-l sm:border-gray-300 lg:my-6 lg:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#618264]">
                    <button type="button" className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium  bg-[#c0ffc5] rounded-md hover:bg-[#64AF5D] hover:text-white">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <span className="hidden lg:inline-block">Login</span>
                      </span>
                    </button>
                  </NavLink>
              }
            </div>
          </div>


        </nav>
      </header>
    </div>

  );
};

export default Navbar;