import React from 'react'
import { getCookie, handleLogOut, nameProfile, removeCookie } from '../../utils'
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { useNavigate } from 'react-router-dom'

const Header = ({ title }) => {
    const userDetails = getCookie('userDetails')
    const profileLatter = nameProfile(userDetails?.firstName, userDetails?.lastName)
    const navigate = useNavigate()
    console.log(userDetails);
    return (
        <div className='flex flex-row justify-between h-[70px] items-center border-l border-b border-background-color-main px-5'>
            <div className='text-xl font-medium'>{title}</div>
            <div>
                <Popover>
                    <PopoverTrigger>
                        <div className='w-9 h-9 bg-primary-color rounded-full flex justify-center items-center text-[#fff] font-bold cursor-pointer'>
                            {profileLatter.toUpperCase()}
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align='end' className='shadow-[#000] h-10 w-28'>
                        <PopoverArrow className='popoverArrow'/>
                        <div className='shadow bg-[#fff] rounded-md py-2 hover:bg-background-color-main' onClick={()=>handleLogOut('userDetails',navigate)}>
                            <button className='w-full'>Log Out</button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default Header