import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/authentication/Login";

const router = createBrowserRouter([


    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },

        ],
        




    },

    {
        path: "/login",
        element:<Login></Login>,
    }


]);

export default router;