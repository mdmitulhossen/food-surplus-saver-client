import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/home/Home";
import LoginPage from "../Pages/auth/LoginPage";
import RegisterPage from "../Pages/auth/RegisterPage";
import AvailableFooodPage from "../Pages/AvailableFooodPage";
import AddFoodPage from "../Pages/AddFoodPage";
import FoodDetails from "../Pages/FoodDetails";
import ManageMyFoodPage from "../Pages/ManageMyFoodPage";
import ManageSingleFood from "../Pages/ManageSingleFood";
import MyFoodRequestPage from "../Pages/MyFoodRequestPage";
import MyFoodUpdatePage from "../Pages/MyFoodUpdatePage";
import NotFoundPage from "../Pages/NotFoundPage";
import ProtectedRoute from "../Utils/ProtectedRoute";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/availableFoods',
                element:<AvailableFooodPage/>
            },
            {
                path:'/food/:id',
                element:<ProtectedRoute><FoodDetails/></ProtectedRoute>
            },
            {
                path:'/food/add',
                element:<ProtectedRoute><AddFoodPage/></ProtectedRoute>
            },
            {
                path:'/food/update/:id',
                element:<ProtectedRoute><MyFoodUpdatePage/></ProtectedRoute>
            },
            {
                path:'/myFoods/manage',
                element:<ProtectedRoute><ManageMyFoodPage/></ProtectedRoute>
            },
            {
                path:'/manage/:id',
                element:<ProtectedRoute><ManageSingleFood/></ProtectedRoute>
            },
            {
                path:'/myFoods/request',
                element:<ProtectedRoute><MyFoodRequestPage/></ProtectedRoute>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
        ]
    }
])

export default Routes;