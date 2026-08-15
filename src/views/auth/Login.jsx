import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {FaFacebook, FaGoogle} from "react-icons/fa";

const Login = () => {
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
    console.log(state)
  }

  return (
      <div className="min-w-screen min-h-screen bg-[#CDCAE9] flex items-center justify-center">
        <div className="w-[350px] text-[#FFFFFF] p-2">
          <div className="bg-[#6F68D1] p-4 rounded-md">
            <h2 className="text-xl mb-3 font-bold">Bemvindo à Cris Laços</h2>
            <p className="text-sm mb-3 font-medium">Efetue login para Entrar</p>
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
              <div className="flex items-center mb-3 gap-3 justify-center">
                <p>Não tem uma conta? <Link classname="font-bold" to="/register">Cadastre-se</Link></p>
              </div>
              <div className="w-full flex items-center mb-3 justify-center">
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                <div className="w-[10%] flex items-center justify-center">
                  <span className="pb-1">Ou</span>
                </div>
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div
                    className="w-[135%] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span><FaGoogle/></span>
                </div>
                <div
                    className="w-[135%] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span><FaFacebook/></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login
