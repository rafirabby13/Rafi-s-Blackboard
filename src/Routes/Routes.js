import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/login/Login.js";
import OptionLogin from "../Pages/OptionLogin/OptionLogin.js";
import SignUp from "../Pages/login/SignUp.js";
import CourseList from "../Pages/CourseList/CourseList.js";
import CourseDetail from "../Pages/CourseDetail/CourseDetail.js";
import Exprement from "../Pages/Expreiment/Exprement.js";
import Home from "../Pages/Home/Home.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import GetPremiumAccess from "../Pages/GetPremiumAccess/GetPremiumAccess.js";
import GetPremiumDetail from "../Pages/GetPremiumDetail/GetPremiumDetail.js";
import SeeDetail from "../Pages/SeeDetail/SeeDetail.js";

 export const router =  createBrowserRouter([
            {
                path:'/',
                element:<Main></Main>,
                children: [
                    {
                        path:'/login',
                        element:<Login></Login>
                    },
                    {
                        path:'/getPremiumAccess',
                        element:<GetPremiumAccess></GetPremiumAccess> 
                    },
                    {
                        path:'/getPremiumDetail',
                        element:<PrivateRoute><GetPremiumDetail></GetPremiumDetail></PrivateRoute>
                    },
                    {
                        path:'/',
                        element:<Home></Home>
                    },
                    {
                        path:'/register',
                        element:<SignUp></SignUp>
                    },
                    {
                        path:'/optionlogin',
                        element:<OptionLogin></OptionLogin>
                    },
                    {
                        path:'/courseDetail/:id',
                        element:<SeeDetail></SeeDetail>,
                        loader: ({params})=>fetch(`http://localhost:5000/coursedetail/${params.id}`)
                    },
                    {
                        path:'/courseList',
                        element:<CourseList></CourseList>,
                        loader: ()=>fetch(`http://localhost:5000/courseList`),
                        children:[
                            {
                                path:':id',
                                element:<CourseDetail></CourseDetail>,
                                loader: ({params})=>fetch(`http://localhost:5000/courseList/${params.id}`)
                            }
                        ]
                    }
                    
                ]
            }
])