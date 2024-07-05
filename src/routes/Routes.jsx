import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Error from "../pages/Error/Error.jsx";
import Root from "../layout/Root.jsx";
import Skills from "../pages/Skills/Skills.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,

        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/skills',
                element: <Skills/>
            }
        ]
    },
]);

export default router;
