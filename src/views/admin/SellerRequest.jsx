import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";
import {useDispatch, useSelector} from "react-redux";
import {get_seller_request} from "../../store/Reducers/sellerReducer";
import Search from "../Search";

const SellerRequest = () => {
    const dispatch = useDispatch()
    const { sellers, totalSeller, loader, successMessage } = useSelector(state => state.seller || {});

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(get_seller_request({
            perPage,
            searchValue,
            page: currentPage,
        }))
    }, [perPage, currentPage, dispatch, searchValue]);


    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">Requisições dos Vendedores</h1>
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className="relative mt-5 overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#D0D2D6]">
                        <thead className="text-sm text-[#D0D2D6] uppercase  border border-slate-700">
                        <tr>
                            <th scope='col' className="py-3 px-4">Nº</th>
                            <th scope='col' className="py-3 px-4">Imagem</th>
                            <th scope='col' className="py-3 px-4">Nome</th>
                            <th scope='col' className="py-3 px-4">Email</th>
                            <th scope="col" className="px-4 py-3">Status do Pagamento</th>
                            <th scope="col" className="px-4 py-3">Status</th>
                            <th scope='col' className="py-3 px-4">Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            sellers.map((d,i) =>
                                <tr key={i}>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>{d._id}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[45px] h-[45px]'
                                             src={`http://localhost:3000/images/category/${d}.jpg`} alt="" />
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>{d.name}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>{d.email}</td>
                                    <td className="w-[25%] p-2 whitespace-nowrap">
                                        <span  className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
                                            {d.payment}
                                        </span>
                                    </td>
                                    <td className="w-[25%] p-2 whitespace-nowrap">
                                        <span  className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
                                            {d.status}
                                        </span>
                                    </td>
                                    <td className="py-1 px-4 font-medium whitespace-nowrap">
                                        <div className="flex items-center justify-start gap-4">
                                            <Link to={`/admin/dashboard/seller/details/${d._id}`}
                                                className="p-[6px] bg-yellow-500 rounded hover:shadow-lg
                                                hover:shadow-yellow-500/50">
                                                <FaEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        perPage={perPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default SellerRequest;
