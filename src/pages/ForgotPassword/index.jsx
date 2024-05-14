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
import { ChevronLeft } from 'lucide-react'
import { forgetAuth } from '../../api/actions/auth.action'

const defaultValue = {
  email: ""
}

const ForgotPassword = () => {
  const formSchema = z.object({email:loginSchema.email})
  const { control, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onSubmit", defaultValues: defaultValue, resolver: zodResolver(formSchema) })
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const onForgetSubmit = (state) => {
    dispatch(forgetAuth(state))
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
              <h2 className='text-3xl text-primary-color font-bold'>Forgot Password</h2>
            </div>
            <p className='pt-5 pb-7 text-base text-[#73788b]'>Enter the email address associated with your account and we will send you the link to reset password.</p>
          </div>
          <form onSubmit={handleSubmit(onForgetSubmit)} onReset={reset}>
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
            <div className='mb-4'>
              <Button className="bg-primary-color w-full text-inherit text-[#fff]">Login</Button>
            </div>
            <div className="text-primary-color text-base font-semibold cursor-pointer">
              <span className='flex' onClick={()=>navigation('/')}><ChevronLeft /> Go back to login</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword