import {forwardRef} from "react";
import { FixedSizeList as List} from "react-window";

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const PaymentRequest = () => {
    const array = [1,2,3,4,5,6,7,8,9,10]

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
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <h2 className="text-xl font-medium pb-5 text-[#D0D2D6]">Requisições de Pagamento</h2>
                <div className="w-full">
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
    )
}

export default PaymentRequest
