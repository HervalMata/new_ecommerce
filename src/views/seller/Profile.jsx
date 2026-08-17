import {FaImages, FaRegEdit} from "react-icons/fa";
import {FadeLoader} from "react-spinners";

const Profile = () => {
    const image = true
    const loader = true
    const status = 'active'
    const userInfo = true

    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-6/12">
                    <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                        <div className='flex items-center justify-center py-3'>
                            {
                                image ?
                                    <label htmlFor="img"
                                           className='w-[150px] h-[150px] relative p-3 cursor-pointer overflow-hidden'>
                                        <img src="http://localhost:3000/images/demo.jpg" alt="" />
                                        {
                                            !loader &&
                                            <div className="bg-slate-600 absolute left-0 top-0 w-full
                                                                   h-full opacity-70 flex items-center justify-center
                                                                   z-20">
                                                <span><FadeLoader /></span>
                                            </div>
                                        }
                                    </label>
                                        : <label htmlFor="img"
                                                 className="flex justify-center items-center flex-col h-[150px]
                                                           w-[200px] cursor-pointer border border-dashed
                                                           hover:border-red-500 border-[#D0D2D6] relative"
                                            >
                                            <span><FaImages /></span>
                                            <span>Selecionar Imagem</span>
                                        {
                                            loader &&
                                            <div className="bg-slate-600 absolute left-0 top-0 w-full
                                                                   h-full opacity-70 flex items-center justify-center
                                                                   z-20">
                                                <span><FadeLoader /></span>
                                            </div>
                                        }
                                          </label>
                            }
                            <input type="file" id="img" className="hidden" />
                        </div>

                        <div className="px-0 md:px-5 py-2">
                            <div className="flex justify-between text-sm flex-col gap-2 bg-slate-800 rounded-md
                                            text-white relative">
                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50
                                                    absolute right-2 top-2 cursor-pointer'
                                >
                                    <FaRegEdit />
                                </span>
                                <div className="flex gap-2 p-2">
                                    <span>Nome: </span>
                                    <span>Herval Mata</span>
                                </div>
                                <div className="flex gap-2 p-2">
                                    <span>Email: </span>
                                    <span>test@gmail.com</span>
                                </div>
                                <div className="flex gap-2 p-2">
                                    <span>Função: </span>
                                    <span>Vendedor</span>
                                </div>
                                <div className="flex gap-2 p-2">
                                    <span>Status: </span>
                                    <span>Ativo</span>
                                </div>
                                <div className="flex gap-2 p-2">
                                    <span>Conta de Pagamento: </span>
                                    <p>
                                        {
                                            status === 'active' ?
                                                <span className='bg-green-500 text-white text-xs
                                                                    cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>
                                                    Pendente
                                                </span> :
                                                <span className='bg-blue-500 text-white text-xs
                                                                    cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>
                                                    Ativar
                                                </span>
                                        }
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="px-0 md:px-5 py-2">
                            {
                                !userInfo ?
                                <form>
                                    <div className="flex flex-col w-full gap-1 mb-2">
                                        <label htmlFor="shop">Nome da Loja</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                            type="text" name="shop" id="shop" placeholder="Nome da Loja" />
                                    </div>

                                    <div className="flex flex-col w-full gap-1 mb-2">
                                        <label htmlFor="division">Nome do Departamento</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                               type="text" name="division" id="division" placeholder="Nome do Departamento" />
                                    </div>

                                    <div className="flex flex-col w-full gap-1 mb-2">
                                        <label htmlFor="district">Nome do Distrito</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                               type="text" name="district" id="district" placeholder="Nome do Distrito" />
                                    </div>

                                    <div className="flex flex-col w-full gap-1 mb-2">
                                        <label htmlFor="subdis">Nome do Sub-Distrito</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                               type="text" name="subdis" id="subdis" placeholder="Nome do Sub-Distrito" />
                                    </div>

                                    <button className="bg-red-500 hover:shadow-red-500/40 hover:shadow-md
                                                        text-white rounded-md px-7 py-2 my-2 w-full"
                                        type="submit">
                                        Salvar Alterações
                                    </button>
                                </form> :
                                    <div className="flex justify-between text-sm flex-col gap-2 bg-slate-800 rounded-md
                                            text-white relative">
                                         <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50
                                                    absolute right-2 top-2 cursor-pointer'
                                         >
                                    <FaRegEdit />
                                </span>
                                        <div className="flex gap-2 p-2">
                                            <span>Nome da Loja: </span>
                                            <span>Cris Laços</span>
                                        </div>
                                        <div className="flex gap-2 p-2">
                                            <span>Departamento: </span>
                                            <span>Vendas</span>
                                        </div>
                                        <div className="flex gap-2 p-2">
                                            <span>Distrito: </span>
                                            <span>Centro</span>
                                        </div>
                                        <div className="flex gap-2 p-2">
                                            <span>SubDistrito: </span>
                                            <span>Centro</span>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>


                </div>

                <div className="w-full md:w-6/12">
                    <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0">
                        <div className="bg-[#6A5FDF] rounded-md text-[#D0D2D6] p-4">
                            <h1 className="text-[#D0D2D] text-lg mb-3 font-semibold">Alterar Senha</h1>
                            <form>
                                <div className="flex flex-col w-full gap-1 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                           type="text" name="email" id="email" placeholder="Email" />
                                </div>

                                <div className="flex flex-col w-full gap-1 mb-2">
                                    <label htmlFor="o_password">Senha</label>
                                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                           type="password" name="o_password" id="o_password" placeholder="Senha" />
                                </div>

                                <div className="flex flex-col w-full gap-1 mb-2">
                                    <label htmlFor="n_password">Nova Senha</label>
                                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6A5FDF]
                                                         border border-slate-700 rounded-md text-[#D0D2D6]'
                                           type="password" name="n_password" id="n_password" placeholder="Nova Senha" />
                                </div>

                                <button className="bg-red-500 hover:shadow-red-500/40 hover:shadow-md
                                                        text-white rounded-md px-7 py-2 my-2 w-full"
                                        type="submit">
                                    Salvar Alterações
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile;
