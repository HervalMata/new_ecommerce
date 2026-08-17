import {AiOutlineDashboard, AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import {FaUsers, FaUserTimes} from "react-icons/fa";
import {MdPayment} from "react-icons/md";
import {FaCodePullRequest} from "react-icons/fa6";
import {IoIosChatbubbles} from "react-icons/io";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard',
    },
    {
        id: 2,
        title: 'Ordens',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders',
    },
    {
        id: 3,
        title: 'Categorias',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category',
    },
    {
        id: 4,
        title: 'Vendedores',
        icon: <FaUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers',
    },
    {
        id: 5,
        title: 'Pagamentos',
        icon: <MdPayment />,
        role: 'admin',
        path: '/admin/dashboard/payment-request',
    },
    {
        id: 6,
        title: 'Vendedores Inativos',
        icon: <FaUserTimes />,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers',
    },
    {
        id: 7,
        title: 'Requisições dos Vendedores',
        icon: <FaCodePullRequest />,
        role: 'admin',
        path: '/admin/dashboard/sellers-request',
    },
    {
        id: 8,
        title: 'Chat',
        icon: <IoIosChatbubbles />,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers',
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard',
    },
    {
        id: 10,
        title: 'Adicionar Produto',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/add-product',
    },
    {
        id: 11,
        title: 'Produtos',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/products',
    },
    {
        id: 12,
        title: 'Descontos',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/discount-product',
    },
    {
        id: 13,
        title: 'ordens',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/orders',
    },
    {
        id: 14,
        title: 'Pagamentos',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/payments',
    },
    {
        id: 15,
        title: 'Chat Comprador',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer',
    },
    {
        id: 10,
        title: 'Chat Suporte',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard/chat-support',
    }
]
