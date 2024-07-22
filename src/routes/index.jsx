import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Fisica from "../pages/temas/fisica";
import Matematica from "../pages/temas/matematica";
import Geografia from "../pages/temas/geografia";
import Historia from "../pages/temas/historia";
import NotFound from "../pages/notFound";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        path:"/",
        children:
        [
            {
                element:<Fisica/>,
                path:"/disciplina/fisica"
            },
            {
                element:<Matematica/>,
                path:"/disciplina/matematica"
            },
            {
                element:<Historia/>,
                path:"/disciplina/historia"
            },
            {
                element:<Geografia/>,
                path:"/disciplina/geografia"
            },
        ]
    },
    {
        element:<NotFound/>,
        path:"*"
    }
])