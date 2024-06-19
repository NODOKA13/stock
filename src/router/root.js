import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Read = lazy(() => import("../pages/ReadPage"));

const root = createBrowserRouter([
    {
        path: "*",
        element: <Navigate replace to="/"/>
    },
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "read",
        element: <Suspense fallback={Loading}><Read /></Suspense>
    },
    {
        path: "read/:tno",
        element: <Suspense fallback={Loading}><Read /></Suspense>
    }
]);

export default root;