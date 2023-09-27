import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../page/Home";
import Donation from "../page/Donation";
import DonationDetails from "../page/DonationDetails";
import Statistics from "../page/Statistics";



const Router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
               path: '/',
                element:<Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics', 
                // loader: ()=> fetch('../../public/data.json'),
                element: <Statistics></Statistics>
            },
            {
                path:'/home/:id', 
                loader: ()=> fetch('../../public/data.json'),
                element: <DonationDetails></DonationDetails>,
            }
        ]
    }
])

export default Router;