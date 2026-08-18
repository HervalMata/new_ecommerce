import {useState, useEffect} from "react";
import Search from "../Search";
import {Link} from "react-router-dom";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import Pagination from "../Pagination";
import {useDispatch, useSelector} from "react-redux";
import {get_products} from "../../store/Reducers/productReducer";

const Products = () => {
    const dispatch = useDispatch()
    const { loader, successMessage, errorMessage, products = [], totalProduct  } = useSelector((state) => state.product ?? {})

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue,
        }
        dispatch(get_products(obj))
    }, [searchValue, perPage, currentPage, dispatch]);


    return (
        <div className="px-2 lg-px-7 pt-5">
            <h1 className="text-[#D0D2D6] font-semibold text-lg mb-3">Todos os Produtos</h1>
            <div className='w-full p-4 bg-[#6A5FDF] rounded-md'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className="relative overflow-x-auto mt-5">
                    <table className="w-full text-sm text-left text-[#D0D2D6]">
                        <thead className="text-sm text-[#D0D2D6] uppercase border-b border-slate-700">
                        <tr>
                            <th scope='col' className='py-3 px-4'>Nº</th>
                            <th scope='col' className='py-3 px-4'>Imagem</th>
                            <th scope='col' className='py-3 px-4'>Npme</th>
                            <th scope='col' className='py-3 px-4'>Categoria</th>
                            <th scope='col' className='py-3 px-4'>Marca</th>
                            <th scope='col' className='py-3 px-4'>Preço</th>
                            <th scope='col' className='py-3 px-4'>Desconto</th>
                            <th scope='col' className='py-3 px-4'>Estoque</th>
                            <th scope='col' className='py-3 px-4'>Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            products.map((d,i) =>
                            <tr key={i}>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>{d._id}</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                    <img className='w-[45px] h-[45px]'
                                        src={d.images[0]} alt="" />
                                </td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>{d?.name?.slice(0,15)}...</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>{d.category}</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>{d.brand}</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>R$ {d.price.toLocaleString("pt-BR")}</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                    {
                                        d.discount === 0 ?
                                            <span>Nenhum Desconto</span> :
                                            <span>{d.discount}%</span>
                                    }
                                </td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>{d.stack}</td>
                                <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                    <div className='flex items-center justify-start gap-4'>
                                        <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg
                                                        hover:shadow-yellow-500/50'
                                            to={`/seller/dashboard/edit-product/${d._id}`}><FaEdit />
                                        </Link>
                                        <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg
                                                        hover:shadow-green-500/50'
                                              to={``}><FaEye />
                                        </Link>
                                        <Link className='p-[6px] bg-red-500 rounded hover:shadow-lg
                                                        hover:shadow-red-500/50'
                                              to={``}><FaTrash />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                {
                    totalProduct <= perPage ? "" :
                    <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={50}
                            perPage={perPage}
                            showItem={3}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Products;
