import Home from "../../views/Home";

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin', 'seller'],
    }
]
