import {useState} from "react";
import {Link} from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";

const DeactiveSellers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">Vendedores Inativos</h1>
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <div className="flex items-center justify-between">
                    <select
                        onChange={(e) => setPerPage(parseInt(e.target.value))}
                        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6A5FDF] border
                                  border-slate-700 rounded-md text-[#D0D2D6]"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input type="text" placeholder="Pesquisar..." className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"/>
                </div>
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
                            [1,2,3,4,5].map((d,i) =>
                                <tr key={i}>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>{d}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[45px] h-[45px]'
                                             src={`http://localhost:3000/images/category/${d}.jpg`} alt="" />
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>Herval Mata</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>test@gmail.com</td>
                                    <td className="w-[25%] p-2 whitespace-nowrap">
                                        <span  className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
                                            Pendente
                                        </span>
                                    </td>
                                    <td className="w-[25%] p-2 whitespace-nowrap">
                                        <span  className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
                                            Inativo
                                        </span>
                                    </td>
                                    <td className="py-1 px-4 font-medium whitespace-nowrap">
                                        <div className="flex items-center justify-start gap-4">
                                            <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg
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

export default DeactiveSellers;
