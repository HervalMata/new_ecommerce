import {MdCurrencyExchange} from "react-icons/md";
import {forwardRef} from "react";
import {FixedSizeList as List} from "react-window";

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const Payments = () => {
    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex text-sm text-white font-medium'>
                <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
                <div className="w-[25%] p-2 whitespace-nowrap">#34343</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <span  className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
                        Pendente
                    </span>
                </div>
                <div className="w-[25%] p-2 whitespace-nowrap"> 25 Dez 2025</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <button className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3
                             py-[2px cursor-pointer text-white rounded-sm text-sm]'>
                        Confirmar
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
                <div className="flex justify-between items-center p-5 bg-[#FAE8E8] rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-2xl font-bold">#3434</h2>
                        <span className="text-sm font-bold">Vendas Totais</span>
                    </div>
                    <div className="w-[40px] h-[47px] rounded-full bg-[#FA0305] flex justify-center items-center text-xl">
                        <MdCurrencyExchange className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between items-center p-5 bg-[#FAE8E8] rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-2xl font-bold">R$ 150,00</h2>
                        <span className="text-sm font-bold">Total Disponivel</span>
                    </div>
                    <div className="w-[40px] h-[47px] rounded-full bg-[#FA0305] flex justify-center items-center text-xl">
                        <MdCurrencyExchange className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between items-center p-5 bg-[#FAE8E8] rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-2xl font-bold">R$ 100,00</h2>
                        <span className="text-sm font-bold">Total Depositado</span>
                    </div>
                    <div className="w-[40px] h-[47px] rounded-full bg-[#FA0305] flex justify-center items-center text-xl">
                        <MdCurrencyExchange className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between items-center p-5 bg-[#FAE8E8] rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-2xl font-bold">R$ 0,00</h2>
                        <span className="text-sm font-bold">Total Pendente</span>
                    </div>
                    <div className="w-[40px] h-[47px] rounded-full bg-[#FA0305] flex justify-center items-center text-xl">
                        <MdCurrencyExchange className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
                <div className="text-lg text-[#D0D2D6] rounded-md p-5">
                    <h2 className="text-lg font-bold text-[#6A5FDF]">Requisições Enviadas</h2>
                    <div className="pt-5 mb-5">
                        <form>
                            <div className="flex flex-wrap gap-3">
                                <input className="px-3 py-2 md:w-[75%] focus:border-indigo-200 outline-none
                                                  bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                    type="number" min='0' name="amount" />
                                <button className='bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white
                                                  rounded-md px-7 py-2'
                                    type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-lg  font-bold text-[#6A5FDF] pb-4">Requisições Pendentes</h2>
                        <div className="w-full overflow-x-auto">
                            <div className="flex text-xs bg-[#A7A3DE] uppercase font-bold min-w-[340px] rounded-md">
                                <div className="p-2 w-[25%]">Nº</div>
                                <div className="p-2 w-[25%]">Total</div>
                                <div className="p-2 w-[25%]">Status de Pagamento</div>
                                <div className="p-2 w-[25%]">Data</div>
                                <div className="p-2 w-[25%]">Ação</div>
                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px' }}
                                    className='List'
                                    height={350}
                                    itemCount={100}
                                    itemSize={35}
                                    outerElementType={outerElementType}>
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>

                <div className="bg-[#6A5FDF] text-[#D0D2D6] rounded-md p-5">
                    <div>
                        <h2 className="text-lg  font-bold  pb-4">Depositos Realizados com Sucesso</h2>
                        <div className="w-full overflow-x-auto">
                            <div className="flex text-xs bg-[#A7A3DE] uppercase font-bold min-w-[340px] rounded-md">
                                <div className="p-2 w-[25%]">Nº</div>
                                <div className="p-2 w-[25%]">Total</div>
                                <div className="p-2 w-[25%]">Status de Pagamento</div>
                                <div className="p-2 w-[25%]">Data</div>
                                <div className="p-2 w-[25%]">Ação</div>
                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px' }}
                                    className='List'
                                    height={350}
                                    itemCount={100}
                                    itemSize={35}
                                    outerElementType={outerElementType}>
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;
