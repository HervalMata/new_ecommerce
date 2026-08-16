import Home from "../../views/Home";
import SellerDashboard from "../../views/seller/SellerDashboard";
import AddProduct from "../../views/seller/AddProduct";

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin', 'seller'],
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        ability: ['seller'],
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        ability: ['seller'],
    }
]
