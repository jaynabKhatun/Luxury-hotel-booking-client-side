import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import RoomDetailsPage from "../pages/roomDetailsPage/RoomDetailsPage";

const router = createBrowserRouter([


    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/roomDetailsPage/:id',
                element: <RoomDetailsPage></RoomDetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },

        ],





    },


    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Registration></Registration>
    }


]);

export default router;