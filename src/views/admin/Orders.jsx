import {useState} from "react";
import {LuArrowDown} from "react-icons/lu";
import {Link} from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 pt-5">
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
                    <div className="w-full text-sm text-left text-[#D0D2D6]">
                        <div className="text-sm text-[#D0D2D6] uppercase  border border-slate-700">
                            <div className="flex items-center justify-between">
                                <div className="py-3 w-[25%] font-bold">Ordem ID</div>
                                <div className="py-3 w-[13%] font-bold">Preço</div>
                                <div className="py-3 w-[18%] font-bold">Status de Pagamento</div>
                                <div className="py-3 w-[18%] font-bold">Status da Ordem</div>
                                <div className="py-3 w-[18%] font-bold">Ação</div>
                                <div className="py-3 w-[8%] font-bold"><LuArrowDown/></div>
                            </div>
                        </div>
                        <div className="text-[#D0D2D6]">
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 654,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium"><Link>Veja</Link></div>
                                <div onClick={(e) => setShow(!show)}
                                     className="py-3 w-[8%] font-medium"><LuArrowDown/></div>
                            </div>
                            <div className={show ? "block border-b border-slate-700 bg-[#8288ED]" : 'hidden'}>
                                <div className="flex items-start justify-between border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                    <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                </div>
                                <div className="flex items-start justify-between border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                    <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#D0D2D6]">
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 654,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium"><Link>Veja</Link></div>
                                <div onClick={(e) => setShow(!show)}
                                     className="py-3 w-[8%] font-medium"><LuArrowDown/></div>
                            </div>
                            <div className={show ? "block border-b border-slate-700 bg-[#8288ED]" : 'hidden'}>
                                <div className="flex items-start justify-between border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                    <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                </div>
                                <div className="flex items-start justify-between border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                    <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                    <div className="py-3 w-[18%] font-medium">Pendente</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#D0D2D6]">
                        <div className="flex items-start justify-between border-b border-slate-700">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#34343</div>
                            <div className="py-3 w-[13%] font-medium">R$ 654,00</div>
                            <div className="py-3 w-[18%] font-medium">Pendente</div>
                            <div className="py-3 w-[18%] font-medium">Pendente</div>
                            <div className="py-3 w-[18%] font-medium"><Link>Veja</Link></div>
                            <div onClick={(e) => setShow(!show)}
                                 className="py-3 w-[8%] font-medium"><LuArrowDown/></div>
                        </div>
                        <div className={show ? "block border-b border-slate-700 bg-[#8288ED]" : 'hidden'}>
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                            </div>
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#D0D2D6]">
                        <div className="flex items-start justify-between border-b border-slate-700">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#34343</div>
                            <div className="py-3 w-[13%] font-medium">R$ 654,00</div>
                            <div className="py-3 w-[18%] font-medium">Pendente</div>
                            <div className="py-3 w-[18%] font-medium">Pendente</div>
                            <div className="py-3 w-[18%] font-medium"><Link>Veja</Link></div>
                            <div onClick={(e) => setShow(!show)}
                                 className="py-3 w-[8%] font-medium"><LuArrowDown/></div>
                        </div>
                        <div className={show ? "block border-b border-slate-700 bg-[#8288ED]" : 'hidden'}>
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                            </div>
                            <div className="flex items-start justify-between border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#34343</div>
                                <div className="py-3 w-[13%] font-medium">R$ 56,00</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                                <div className="py-3 w-[18%] font-medium">Pendente</div>
                            </div>
                        </div>
                    </div>
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

export default Orders;
