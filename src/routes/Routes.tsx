import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Routes() {
    const elements = useRoutes([
        {path: '/v360/', element: <Home />},
        {path: '/v360/about', element: <About />},
        {path: '/v360/Contact', element: <Contact />},
        {path: '*', element: <NotFound />},
    ])

    return elements;
}
