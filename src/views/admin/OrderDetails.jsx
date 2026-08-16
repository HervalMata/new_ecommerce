const OrderDetails = () => {
    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-[#D0D2D6] text-xl">Detalhes da Ordem</h2>
                    <select
                        name="" id=""
                        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6A5FDF] border
                                  border-slate-700 rounded-md text-[#D0D2D6]"
                    >
                        <option value="">Pendente</option>
                        <option value="">Processando</option>
                        <option value="">Arquivada</option>
                        <option value="">Colocada</option>
                        <option value="">Cancelada</option>
                    </select>
                </div>

                <div className="p-4">
                    <div className="flex gap-2 text-lg text-[#D0D2D6]">
                        <h2>#34344</h2>
                        <span>3 Jan 2027</span>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-[30%]">
                            <div className="pr-3 text-lg text-[#D0D2D6]">
                                <div className="flex flex-col gap-1">
                                    <h2 className="pb-2 font-semibold">Entregar Para: Raju Kanh </h2>
                                    <p><span className="text-sm">Av. Centro, 100, Centro - São Paulo-SP </span></p>
                                </div>

                                <div className="flex justify-start items-center gap-3">
                                    <h2>Status do Pagamento: </h2>
                                    <span className="text-base">Pago</span>
                                </div>
                                <span>Preço: R$ 232,00</span>

                                <div className="mt-4 flex flex-col gap-4 bg-[#8288ED] rounded-md">
                                    <div className="text-[#D0D2D6]">
                                        <div className="flex gap-3 text-md">
                                            <img className="w-[50px] h-[50px]"
                                                src="http://localhost:3000/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Nome do Produto</h2>
                                                <p>
                                                    <span>Marca: </span>
                                                    <span>Cris Laços</span>
                                                    <span className='text-lg'> Quantidade: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-4 bg-[#8288ED] rounded-md">
                                    <div className="text-[#D0D2D6]">
                                        <div className="flex gap-3 text-md">
                                            <img className="w-[50px] h-[50px]"
                                                 src="http://localhost:3000/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Nome do Produto</h2>
                                                <p>
                                                    <span>Marca: </span>
                                                    <span>Cris Laços</span>
                                                    <span className='text-lg'> Quantidade: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-4 bg-[#8288ED] rounded-md">
                                    <div className="text-[#D0D2D6]">
                                        <div className="flex gap-3 text-md">
                                            <img className="w-[50px] h-[50px]"
                                                 src="http://localhost:3000/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Nome do Produto</h2>
                                                <p>
                                                    <span>Marca: </span>
                                                    <span>Cris Laços</span>
                                                    <span className='text-lg'> Quantidade: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[70%]">
                            <div className="pl-3">
                                <div className="mt-4 flex flex-col gap-4 bg-[#8288ED] rounded-md">
                                    <div className="text-[#D0D2D6] mt-2">
                                        <div className="flex justify-start items-center gap-3">
                                            <h2>Vendedor Order 1: </h2>
                                            <span>Pendente</span>
                                        </div>
                                        <div className="flex gap-3 text-md mt-2">
                                            <img className="w-[50px] h-[50px]"
                                                 src="http://localhost:3000/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Nome do Produto</h2>
                                                <p>
                                                    <span>Marca: </span>
                                                    <span>Cris Laços</span>
                                                    <span className='text-lg'> Quantidade: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[#D0D2D6] mt-2">
                                        <div className="flex justify-start items-center gap-3">
                                            <h2>Vendedor Order 1: </h2>
                                            <span>Pendente</span>
                                        </div>
                                        <div className="flex gap-3 text-md mt-2">
                                            <img className="w-[50px] h-[50px]"
                                                 src="http://localhost:3000/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Nome do Produto</h2>
                                                <p>
                                                    <span>Marca: </span>
                                                    <span>Cris Laços</span>
                                                    <span className='text-lg'> Quantidade: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
