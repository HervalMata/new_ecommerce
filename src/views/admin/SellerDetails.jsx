const SellerDetails = () => {
    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3"> Detalhes dos Vendedores</h1>
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <div className="w-full flex flex-wrap text-[#D0D2D6]">
                    <div className="w-3/12 flex justify-center items-center py-3">
                        <div>
                            <img className="w-full h-[230px]" src="http://localhost:3000/images/demo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="px-0 md:px-5 py-2">
                            <div className="py-2 text-lg">
                                <h2>Informações Básicas</h2>
                            </div>
                            <div className="flex justify-between flex-col gap-2 p-4 text-sm bg-[#9E97E9] rounded-md">
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Nome: </span>
                                    <span>Herval Mata</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Email: </span>
                                    <span>test@gmail.com</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Função: </span>
                                    <span>Vendedor</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Status: </span>
                                    <span>Ativo</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Status de Pagamento: </span>
                                    <span>Ativo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-4/12">
                        <div className="px-0 md:px-5 py-2">
                            <div className="py-2 text-lg">
                                <h2>Endereço</h2>
                            </div>
                            <div className="flex justify-between flex-col gap-2 p-4 text-sm bg-[#9E97E9] rounded-md">
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Nome da Loja: </span>
                                    <span>Cris Laços</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Departamento: </span>
                                    <span>Vendas</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Distrito: </span>
                                    <span>Centro</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Estado: </span>
                                    <span>São Paulo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form>
                        <div className="flex gap-4 py-3">
                            <select
                                name="" id=""
                                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6A5FDF] border
                                  border-slate-700 rounded-md text-[#D0D2D6]"
                            >
                                <option value="">--Selecione o Status--</option>
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                            </select>
                            <button className="bg-red-500 w-[170px] hover:shadow-red-500/40 hover:shadow-md
                                              text-white rounded-md px-7 py-2">
                                Alterar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SellerDetails;
