import React, { useState } from 'react'
import { bRoundIcon, closeEyeIcon, openEyeIcon, rightDot, sRoundIcon } from '../../utils/images'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Controller, useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '../../utils/schema'
import Validation from '../../components/FormError'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth } from '../../api/actions/auth.action'

const defaultValue = {
  email: "",
  password: ""
}

const Login = () => {
  const formSchema = z.object(loginSchema)
  const { control, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onSubmit", defaultValues: defaultValue, resolver: zodResolver(formSchema) })
  const [viewpassword, setViewpassword] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const onLoginSubmit = (state) => {
    dispatch(getAuth(state)).then(res=>{
      if (res.payload.statusCode === 200) {
        navigation('/dashboard')
      }
    })
  }
  
  return (
    <div className="w-full h-full flex justify-center flex-col relative">
      <div>
        <img className="top-0 right-0 absolute" src={sRoundIcon} alt="right-S-round" />
        <img className="top-0 right-0 absolute" src={bRoundIcon} alt="right-B-round" />
        <img className="bottom-0 left-0 rotate-180 absolute" src={bRoundIcon} alt="right-B-round" />
        <img className="bottom-0 left-0 rotate-180 absolute" src={sRoundIcon} alt="right-S-round" />
        <img className="top-0 left-0 absolute" src={rightDot} alt="right-dot-top" />
        <img className="bottom-0 right-0 absolute" src={rightDot} alt="right-dot-bottom" />
      </div>
      <div className="flex flex-auto flex-col justify-center items-center">
        <div className="max-w-[500px] w-full">
          <div>
            <div className="relative pb-2.5 after:absolute after:w-6 after:h-1 after:bg-[#ffa700] after:rounded-[20px] after:m-auto after:-bottom-1">
              <h2 className='text-3xl text-primary-color font-bold'>Login to Admin</h2>
            </div>
            <p className='pt-5 pb-7 text-base text-[#73788b]'>Thank you for get back to Superworks, let’s access our the best recommendation for you.</p>
          </div>
          <form onSubmit={handleSubmit(onLoginSubmit)} onReset={reset}>
            <div className="mb-4">
              <label>Email address <span>*</span></label>
              <Controller
                name='email'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input type="text" placeholder="Email" className="mt-1 border-input-color focus:border-primary-color" onChange={onChange} value={value} />
                )}
              />
              <Validation
                errors={errors.email}
                message={errors?.email?.message}
              />
            </div>
            <div className="relative mb-5">
              <label>Password <span>*</span></label>
              <Controller
                name='password'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input type={viewpassword ? "text" : "password"} placeholder="Password" className="mt-1 border-input-color focus:border-primary-color" onChange={onChange} value={value} />
                )}
              />
              <Validation
                errors={errors.password}
                message={errors?.password?.message}
              />
              <div className="flex absolute right-[10px] top-[58%] cursor-pointer" onClick={() => setViewpassword(!viewpassword)}>
                <span aria-describedby="popup-1"><img src={viewpassword ? openEyeIcon : closeEyeIcon} /></span>
              </div>
            </div>
            <div className="text-primary-color text-base font-semibold cursor-pointer mb-4">
              <span onClick={()=>navigation('/forgot-password')} >Forgot password?</span>
            </div>
            <div>
              <Button className="bg-primary-color w-full text-inherit text-[#fff]">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login