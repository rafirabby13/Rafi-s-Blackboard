import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/login/Login.js";
import OptionLogin from "../Pages/OptionLogin/OptionLogin.js";
import SignUp from "../Pages/login/SignUp.js";
import CourseList from "../Pages/CourseList/CourseList.js";
import CourseDetail from "../Pages/CourseDetail/CourseDetail.js";
import Exprement from "../Pages/Expreiment/Exprement.js";
import Home from "../Pages/Home/Home.js";

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