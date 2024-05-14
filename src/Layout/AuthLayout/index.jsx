import React from 'react'
import {  chatIcon, hrmsIcon, pmsIcon, roundUbsIcon, trueDoubleIcon, ubsIcon } from '../../utils/images'

const AuthLayout = ({children}) => {
    return (
        <>
        <section className="max-w-[700px] w-full">
            <div className={`bg-login-bg bg-[#1e2538] p-5 h-screen text-[#fff]`}>
                <div className="flex-col flex h-full">
                    <div className="flex items-center flex-col gap-5">
                        <img className="w-10" src={ubsIcon} alt="Logo" />
                        <div className="items-center flex flex-col text-white">
                            <div className="pb-2.5">
                                <h2 className='text-[1.8rem] font-semibold'>Welcome to Superworks</h2>
                            </div>
                            <p className='before:absolute before:w-6 before:h-1 before:bg-[#ffa700] before:rounded-[20px] relative before:right-0 before:left-0 before:m-auto p-2.5 before:top-[-2px]'>
                                Connecting People. Optimizing Process. Enhancing Perfomance.</p>
                        </div>
                    </div>
                    <div className="justify-center flex flex-auto items-center">
                        <div className="relative w-[283px] h-[283px] flex justify-center items-center rounded-full border-2 border-[#73788b] border-dashed">
                            <div className="absolute animate-[rotate1_20s_linear_infinite] flex justify-center items-center w-[50px] h-[50px] rounded-full border-dashed border-2 bg-[#1e2538] border-[#73788b]">
                                <img src={hrmsIcon} />
                            </div>
                            <div className="absolute animate-[rotate2_20s_linear_infinite] flex justify-center items-center w-[50px] h-[50px] rounded-full border-dashed border-2 bg-[#1e2538] border-[#73788b]">
                                <img src={chatIcon} />
                            </div>
                            <div className="absolute animate-[rotate3_20s_linear_infinite] flex justify-center items-center w-[50px] h-[50px] rounded-full border-dashed border-2 bg-[#1e2538] border-[#73788b]">
                                <img src={pmsIcon} />
                            </div>
                            <div className="relative w-[100px] h-[100px] flex justify-center items-center border-[#73788b] rounded-full border-solid border-2">
                                <div>
                                    <img src={roundUbsIcon} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col gap-10">
                        <div className='after:absolute after:w-6 after:h-1 after:bg-[#ffa700] after:rounded-[20px] after:right-0 after:left-0 after:m-auto relative after:-bottom-[18px]'>
                            <h2 className='text-[1.8rem] font-semibold text-white'>Core Values</h2>
                        </div>
                        <ul className="columns-2">
                            <li className='flex items-center gap-1 text-white pb-2'>
                                <span>
                                    <img src={trueDoubleIcon} />
                                </span>Working Everyday Towards Perfection</li>
                            <li className='flex items-center gap-1 text-white pb-2'>
                                <span>
                                    <img src={trueDoubleIcon} />
                                </span>Inspiring Teams To Build The Best</li>
                            <li className='flex items-center gap-1 text-white pb-2'>
                                <span><img src={trueDoubleIcon} /></span>
                                Grow Consistently Every Day</li>
                            <li className='flex items-center gap-1 text-white pb-2'>
                                <span><img src={trueDoubleIcon} /></span>
                                Creating Value Adding Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {children}
        </>

    )
}

export default AuthLayout