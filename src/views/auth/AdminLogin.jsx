import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {admin_login} from "../../store/Reducers/authReducer";

const AdminLogin = () => {
    const dispatch = useDispatch()

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
                        <button type="submit"
                                className="bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md py-7 px-2 mb-3">Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
