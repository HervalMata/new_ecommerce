import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {admin_login, messageClear} from "../../store/Reducers/authReducer";
import {PropagateLoader} from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const  { loader, errorMessage, successMessage } = useSelector(state => state.auth || {})

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
    }

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    }, [dispatch, errorMessage, navigate, successMessage])

    return (
        <div className="min-w-screen min-h-screen bg-[#CDCAE9] flex items-center justify-center">
            <div className="w-[350px] text-[#FFFFFF] p-2">
                <div className="bg-[#6F68D1] p-4 rounded-md">
                    <div className="h-[100px] flex items-center justify-center">
                        <div className="w-[180px] h-[120px]">
                            <img className="w-full h-full" src="http://localhost:3000/images/logo.png" alt="imagem" />
                        </div>
                    </div>
                    <form onSubmit={submit}>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle} value={state.email} type="email" name="email" id="email"
                                   className="py-2 px-3 outline-none border border-slate-400 bg-transparent rounded-md"
                                   placeholder="Digite seu email" required/>
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Senha</label>
                            <input onChange={inputHandle} value={state.password} type="password" name="password" id="password"
                                   className="py-2 px-3 outline-none border border-slate-400 bg-transparent rounded-md"
                                   placeholder="Digite sua senha" required/>
                        </div>
                        <button disabled={!!loader} type="submit"
                                className="bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md py-7 px-2 mb-3">
                            { loader ? <PropagateLoader color="#FFFFFF" cssOverride={overrideStyle} /> : 'Entrar' }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
