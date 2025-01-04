import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, removeUser } from './redux/slices/login-slice'


const Login = () => {

    const dispatch = useDispatch()

  const [formValue, setFormValue] = useState({
    username:'',
    password:'',
  })

  const handelInput = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormValue({
      ...formValue,
      [inputName]: inputValue
    })
  }

  const login = (e) => {
    e.preventDefault()
    console.log(formValue);
  }

  const rememberMe = (e) => {
    const input = e.target
    if(input.checked){
      dispatch(setUser(formValue))
    }else{
      dispatch(removeUser())
    }
  }
  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
        <div className="p-5 bg-white rounded-lg w-5/12">
          <form onSubmit={login}>
            <div className='flex flex-col gap-1'>
              <label>Username</label>
              <input type="text" name='username' value={formValue.username} onChange={handelInput} className='border border-gray-300 rounded p-3'/>
            </div>
            <div className='flex flex-col gap-1 mt-3'>
              <label>Password</label>
              <input type="password" name='password' value={formValue.password} onChange={handelInput} className='border border-gray-300 rounded p-3'/>
            </div>
            <div className='flex items-center gap-1 mt-3'>
              <input type="checkbox" name='rememberMe' onChange={rememberMe} className='border border-gray-300 rounded p-3'/>
              <label>Remember Me</label>
            </div>

            <button className='bg-[dodgerblue] text-white px-3 py-2 mt-3 rounded'>Login</button>
          </form>
        </div>
      </div>
  )
}

export default Login
