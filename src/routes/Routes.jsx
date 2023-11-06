import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/home/Home";
import LoginPage from "../Pages/auth/LoginPage";
import RegisterPage from "../Pages/auth/RegisterPage";
import AvailableFooodPage from "../Pages/AvailableFooodPage";
import AddFoodPage from "../Pages/AddFoodPage";
import FoodDetails from "../Pages/FoodDetails";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
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
                element:<FoodDetails/>
            },
            {
                path:'/food/add',
                element:<AddFoodPage/>
            },
            {
                path:'/myFoods/manage',
                element:<div>Food manage</div>
            },
            {
                path:'/myFoods/request',
                element:<div>Food request</div>
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