import Search from "../Search";
import {Link} from "react-router-dom";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import Pagination from "../Pagination";
import {useState} from "react";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[#D0D2D6] font-semibold text-lg mb-3">Ordens</h1>
            <div className='w-full p-4 bg-[#6A5FDF] rounded-md'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className="relative overflow-x-auto mt-5">
                    <table className="w-full text-sm text-left text-[#D0D2D6]">
                        <thead className="text-sm text-[#D0D2D6] uppercase border-b border-slate-700">
                        <tr>
                            <th scope='col' className='py-3 px-4'>Nº da Ordem</th>
                            <th scope='col' className='py-3 px-4'>Preço</th>
                            <th scope='col' className='py-3 px-4'>Status do Pagamento</th>
                            <th scope='col' className='py-3 px-4'>Status da Ordem</th>
                            <th scope='col' className='py-3 px-4'>Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            [1,2,3,4,5].map((d,i) =>
                                <tr key={i}>
                                    <td className='py-1 px-4 font-medium whitespace-nowrap'>#5455</td>
                                    <td className='py-1 px-4 font-medium whitespace-nowrap'>R$ 49,99</td>
                                    <td className='py-1 px-4 font-medium whitespace-nowrap'>Pendente</td>
                                    <td className='py-1 px-4 font-medium whitespace-nowrap'>Pendente</td>
                                    <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex items-center justify-start gap-4'>
                                            <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg
                                                        hover:shadow-green-500/50'
                                                  to={``}><FaEye />
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

export default Orders
