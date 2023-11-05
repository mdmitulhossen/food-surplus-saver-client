import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/home/Home";


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
                element:<div>availableFoods</div>
            },
            {
                path:'/food/add',
                element:<div>Food Add</div>
            },
            {
                path:'/myFoods/manage',
                element:<div>Food manage</div>
            },
            {
                path:'//myFoods/request',
                element:<div>Food request</div>
            },
        ]
    }
])

export default Routes;