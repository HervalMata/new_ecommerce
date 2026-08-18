import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaEdit, FaImage, FaTrash} from "react-icons/fa";
import Pagination from "../Pagination";
import {IoMdCloseCircle} from "react-icons/io";
import {PropagateLoader} from "react-spinners";
import {overrideStyle} from "../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {categoryAdd, get_category} from "../../store/Reducers/categoryReducer";
import toast from "react-hot-toast";
import {messageClear} from "../../store/Reducers/authReducer";
import Search from "../Search";

const Category = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { loader, successMessage, errorMessage, categories  } = useSelector((state) => state.auth || {})
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);
    const [imageShow, setImageShow] = useState('')
    const [state, setState] = useState({
        name: '',
        image: ''
    });

    const imageHandle = (e) => {
        let files = e.target.files
        if (files.length > 0) {
            setImageShow(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    const add_category = (e) => {
        e.preventDefault()
        dispatch(categoryAdd(state))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: '',
                image: ''
            })
            setImageShow('')
            navigate('/')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage, dispatch, navigate]);


    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue,
        }
        dispatch(get_category(obj))
    }, [searchValue, dispatch, currentPage, perPage]);


    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="flex items-center justify-between lg:hidden mb-5 p-4 bg-[#6A5FDF] rounded-md">
                <h1 className="text-[#D0D2D6] font-semibold text-lg">Categorias</h1>
                <button onClick={() => setShow(true)}
                        className='bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer
                        text-white rounded-sm text-sm'
                >
                    Adicionar Categoria
                </button>
            </div>
            <div className="flex flex-wrap w-full">
                <div className="w-full lg:w-7/12">
                    <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                        <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                        <div className="relative mt-5 overflow-x-auto">
                            <table className="w-full text-sm text-left text-[#D0D2D6]">
                                <thead className="text-sm text-[#D0D2D6] uppercase  border border-slate-700">
                                <tr>
                                    <th scope='col' className="py-3 px-4">Nº</th>
                                    <th scope='col' className="py-3 px-4">Imagem</th>
                                    <th scope='col' className="py-3 px-4">Nome</th>
                                    <th scope='col' className="py-3 px-4">Ação</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    categories.map((d,i) =>
                                    <tr key={i}>
                                        <td className='py-3 px-4 font-medium whitespace-nowrap'>{d}</td>
                                        <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <img className='w-[45px] h-[45px]'
                                                src={d.image} alt="" />
                                        </td>
                                        <td className='py-3 px-4 font-medium whitespace-nowrap'>{d.image}</td>
                                        <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <div className="flex items-center justify-start gap-4">
                                                <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg
                                                hover:shadow-yellow-500/50">
                                                    <FaEdit />
                                                </Link>
                                                <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg
                                                hover:shadow-yellow-500/50">
                                                    <FaTrash />
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
                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed 
                                ${show ? 'right-0' : '-right-[340px]'} z-[9999] top-0 transition-all duration-200`}>
                    <div className="w-full pl-5 ">
                        <div className="bg-[#6A5FDF] lg:rounded-md h-screen lg:h-auto px-3 py-2 text-[#D0D2D6]">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-[#6A5FDF] font-semibold text-xl mb-4 w-full text-center">
                                    Adicionar Categoria
                                </h1>
                                <div onClick={() => setShow(false)} className="block lg:hidden">
                                    <IoMdCloseCircle />
                                </div>
                            </div>

                            <form onSubmit={add_category}>
                                <div className="flex flex-col w-full gap-1 mb-3">
                                    <label htmlFor="name"> Nome da Categoria</label>
                                    <input value={state.name}
                                           onChange={(e) => setState({...state, name: e.target.value})}
                                           className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6A5FDF]
                                                        border border-slate-700 rounded-md text-[#D0D2D6]"
                                        type="text" id='name' name='category_name' placeholder="Nome da Categoria" />
                                </div>
                                <div>
                                    <label className='flex justify-center items-center flex-col h-[238px]
                                             cursor-pointer border border-dashed hover:border-red-500 w-full
                                             border-[#D0D2D6]'
                                           htmlFor="image">
                                        { imageShow ?
                                            <img className='w-full h-full' src={imageShow} alt="" /> :
                                            <>
                                                <span><FaImage /></span>
                                                <span>Selecione a Imagem</span>
                                            </>
                                        }
                                    </label>
                                    <input onChange={imageHandle} className="hidden" type="file" name="image" id='image' />
                                    <div className='mt-4'>
                                        <button disabled={!!loader}
                                            className='bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md
                                                      text-white rounded-md px-7 py-2 my-2'
                                        >
                                            {
                                                loader ?
                                                    <PropagateLoader color='#FFFFFF' cssOverride={overrideStyle} /> :
                                                    'Adicionar a categoria'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
