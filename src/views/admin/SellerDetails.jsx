import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_seller, seller_status_update} from "../../store/Reducers/sellerReducer";
import toast from "react-hot-toast";

const SellerDetails = () => {
    const dispatch = useDispatch()
    const { seller, totalSeller, loader, successMessage } = useSelector(state => state.seller || {});
    const { sellerId } = useParams();

    const [status, setStatus] = useState('');

    const submit = (e) => {
        e.preventDefault();
        dispatch(seller_status_update({
            sellerId,
            status,
        }))
    }

    useEffect(() => {
        dispatch(get_seller(sellerId))
    }, [sellerId, dispatch])

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(successMessage)
        }
    }, [successMessage, dispatch])

    useEffect(() => {
        if (seller) {
            setStatus(seller.status);
        }
    }, [seller])

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3"> Detalhes dos Vendedores</h1>
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <div className="w-full flex flex-wrap text-[#D0D2D6]">
                    <div className="w-3/12 flex justify-center items-center py-3">
                        <div>
                            {
                                seller?.image ?
                                    <img className="w-full h-[230px]" src="http://localhost:3000/images/demo.jpg" alt=""/>
                                    : <span>Imagem não disponivel</span>
                            }
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
                                    <span>{seller?.name}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Email: </span>
                                    <span>{seller?.email}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Função: </span>
                                    <span>{seller?.role}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Status: </span>
                                    <span>{seller?.status}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Status de Pagamento: </span>
                                    <span>{seller?.payment}</span>
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
                                    <span>{seller?.shopInfo?.shopName}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Departamento: </span>
                                    <span>{seller?.shopInfo?.division}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Distrito: </span>
                                    <span>{seller?.shopInfo?.district}</span>
                                </div>
                                <div className="flex font-bold gap-2 text-[#000000]">
                                    <span>Estado: </span>
                                    <span>{seller?.shopInfo?.sub_district}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={submit}>
                        <div className="flex gap-4 py-3">
                            <select
                                name="" id="" required value={status} onChange={(e) => setStatus(e.target.value)}
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
