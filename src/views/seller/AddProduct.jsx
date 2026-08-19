import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IoMdCloseCircle, IoMdImages} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {get_category} from "../../store/Reducers/categoryReducer";
import {add_product, categories, messageClear} from "../../store/Reducers/productReducer";
import toast from "react-hot-toast";
import {PropagateLoader} from "react-spinners";
import {overrideStyle} from "../../utils/utils";

const AddProduct = () => {
    const dispatch = useDispatch()
    const { categories = [] } = useSelector(state => state.category ?? {});
    const { loader, successMessage, errorMessage, products = []  } = useSelector((state) => state.product ?? {})

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
    });

    const [show, setShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([]);

    const imageHandle = (e) => {
        const files = e.target.files
        const length = files.length
        if (length > 0) {
            setImages([...images, ...files])
        }
        let imageUrl = []
        for (let i = 0; i < length; i++) {
            imageUrl.push({ url: URL.createObjectURL(files[i]) })
        }
        setImageShow([...imageShow, ...imageUrl])
    }

    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow
            let tempImages = images

            tempImages[index] = img
            tempUrl[index] = {url: URL.createObjectURL(img)}
            setImageShow([...tempUrl])
            setImages([...tempImages])
        }
    }

    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i);
        const filterImageUrl = imageShow.filter((img, index) => index !== i);

        setImages(filterImage)
        setImageShow(filterImageUrl)
    }

    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
            setAllCategory(srcValue)
        } else {
            setAllCategory(categories);
        }
    }

    const addProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', state.name);
        formData.append('description', state.description);
        formData.append('price', state.price);
        formData.append('stock', state.stock);
        formData.append('discount', state.discount);
        formData.append('brand', state.brand);
        formData.append('shopName', 'Cris Laços');
        formData.append('category', category);

        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        dispatch(add_product(formData))
    }

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            perPage: '',
            page: '',
        }))
    }, []);

    useEffect(() => {
        setAllCategory(categories);
    }, [categories]);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: '',
                description: '',
                discount: '',
                price: '',
                brand: '',
                stock: '',
            })
            setImageShow([])
            setImages([])
            setCategory('')
        }

        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage, dispatch]);


    return (
        <div className="px-2 md-px-7 py-5">
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <div className="flex items-center justify-between pb-4">
                    <h1 className="text-[#D0D2D6] font-semibold text-xl">Adicionar Produto</h1>
                    <Link to={"/seller/dashboard/products"}
                          className='bg-blue-500 shadow-lg hover:shadow-blue-500/50 hover:shadow-lg px-7 py-2 my-2
                                   text-white rounded-sm'
                    >Todos os Produtos</Link>
                </div>
                <div>
                    <form onSubmit={addProduct}>
                        <div className="flex flex-col md:flex-row w-full gap-4 mb-3 text-[#D0D2D6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name"> Nome do Produto</label>
                                <input onChange={inputHandle} value={state.name}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="text" id='name' name='name' placeholder="Nome do Produto" />
                            </div>

                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand"> Marca do Produto</label>
                                <input onChange={inputHandle} value={state.brand}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="text" id='brand' name='brand' placeholder="Marca do Produto" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full gap-4 mb-3 text-[#D0D2D6]">
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category"> Categoria do Produto</label>
                                <input readOnly value={category} onClick={() => setShow(!show)}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="text" id='category' name='category' placeholder="---Selecione a Categoria do Produto---" />

                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                                    show ? 'scale-100' : 'scale-0'
                                }`}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input onChange={categorySearch} value={searchValue}
                                               className="px-3 py-1 w-full focus:border-indigo-500 overflow-hidden
                              outline-none bg-transparent border border-slate-700 rounded-md text-[#D0D2D6]"
                                               type="text"  placeholder="Pesquisar..." />
                                    </div>
                                    <div className="pt-14"></div>
                                    <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                                        {
                                            allCategory.map((c,i) =>
                                                <span className={`px-4 py-2 hover:bg-indigo-500 hover:text-white
                                             hover:shadow-lg w-full cursor-pointer ${
                                                    category === c.name && 'bg-indigo-500'
                                                }`}
                                                      onClick={() => {
                                                          setShow(false)
                                                          setCategory(c.name)
                                                          setSearchValue('')
                                                          setAllCategory(categories)
                                                      }}>{c.name}</span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="stock"> Estoque do Produto</label>
                                <input onChange={inputHandle} value={state.stock}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="text" id='stock' name='stock' placeholder="Estoque do Produto" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full gap-4 mb-3 text-[#D0D2D6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="price"> Preço do Produto</label>
                                <input onChange={inputHandle} value={state.price}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="number" id='price' name='price' placeholder="Preço do Produto" />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="discount"> Desconto do Produto</label>
                                <input onChange={inputHandle} value={state.discount}
                                       className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                       type="number" id='discount' name='discount' placeholder="Desconto do Produto" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-1 mb-5">
                            <label htmlFor="description"> Descição do Produto</label>
                            <textarea onChange={inputHandle} value={state.description}
                                      className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"
                                      cols="10" rows="4" id='description' name='description' placeholder="Descrição do Produto" />
                        </div>

                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3
                                w-full text-[#D0D2D6] mb-4">
                            {
                                imageShow.map((img, i) =>
                                        <div className='h-[180px] relative'>
                                            <label htmlFor={i}>
                                                <img className='w-full h-full rounded-sm' src={img.url} alt="" />
                                            </label>
                                            <input
                                                onChange={(e) => changeImage(e.target.files[0],i)}
                                                type="file" id={i} className='hidden' />
                                            <span onClick={() => removeImage(i)}
                                                  className='p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg
                                                  hover:shadow-slate-400/50 text-white absolute top-1
                                                  right-1 rounded-full'
                                            >
                                    <IoMdCloseCircle />
                                </span>
                                        </div>
                                )
                            }
                            <label htmlFor="image"
                                   className="flex justify-center items-center flex-col h-[180px] cursor-pointer border
                                   border-dashed hover:border-red-500 w-full text-[#D0D2D6]"
                            >
                                <span><IoMdImages /></span>
                                <span>Selecione as Imagens</span>
                            </label>
                            <input className="hidden" onChange={imageHandle} multiple type="file" id="image" />
                        </div>

                        <div className="flex">
                            <button className="bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white
                                       rounded-md px-7 py-2 my-2 w-full"
                                    type="submit" disabled={!!loader}>
                                {
                                    loader ? <PropagateLoader color="#FFFFFF" cssOverride={overrideStyle} /> : 'Adicionar Produto'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddProduct
