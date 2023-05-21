import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/login/Login.js";
import OptionLogin from "../Pages/OptionLogin/OptionLogin.js";
import SignUp from "../Pages/login/SignUp.js";

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
                        path:'/register',
                        element:<SignUp></SignUp>
                    },
                    {
                        path:'/optionlogin',
                        element:<OptionLogin></OptionLogin>
                    }
                ]
            }
])