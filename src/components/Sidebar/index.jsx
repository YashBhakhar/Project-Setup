import React, { useState } from 'react'
import { mainLogo } from '../../utils/images'
import { SIDEBAR } from '../../utils/side'
import { ChevronDown } from 'lucide-react'

const Sidebar = () => {
    const [activeLi, setActiveLi] = useState(null)

    const onChnageMenu = (i, path) => {
        if (activeLi === i || activeLi?.toString().includes(path)) {
            setActiveLi(null)   
        } else {
            setActiveLi(i)
        }
    }
    console.log(activeLi);
    return (
        <aside className='w-[260px] h-screen bg-[#fff]'>
            <div className='flex items-center h-[70px] justify-center'>
                <img src={mainLogo} alt="mainLogo" />
            </div>
            <div>
                <ul>
                    {SIDEBAR.map((data, i) => {
                        return data.sub ? (
                            <li className='min-h-10 '>
                                <div className={'flex pl-6 items-center min-h-10 m-1 w-full hover:bg-[#f0f8ff] rounded-lg cursor-pointer ' + (activeLi?.toString().includes(data.path) ? 'text-[#438eff]' : 'text-[#919da9]')} onClick={()=>onChnageMenu(i, data.path)}>
                                    <img src={activeLi?.toString().includes(data.path) ? data.activeIcon : data.icon} className='h-4' /> 
                                    <span className='ml-2.5  flex-[1]'>{data.title}</span>
                                    <ChevronDown className={' mr-2.5 h-[22px] transition duration-500 ease-in-out ' + (activeLi === i || activeLi?.toString().includes(data.path) ? 'rotate-180 transition ' : '')} />
                                </div>
                                <ul className={(activeLi === i || activeLi?.toString().includes(data.path) ? 'block' : 'hidden')}>
                                    {data.children.map(child => (
                                        <li className={'h-10 flex pl-6 items-center m-1 w-full hover:bg-[#f0f8ff] hover:text-[#438eff] rounded-lg cursor-pointer ' + (activeLi === child.path ? 'bg-[#f0f8ff] text-[#438eff]' : 'text-[#919da9]')} onClick={()=>onChnageMenu(child.path)}>
                                            <span className='ml-[1.6rem] '>{child.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                            : (
                                <li className='h-10'>
                                    <div className={'flex items-center pl-6 h-10 m-1 w-full hover:bg-[#f0f8ff] rounded-lg cursor-pointer ' + (activeLi === data.path ? 'bg-[#f0f8ff] text-[#438eff]' : 'text-[#919da9]')} onClick={()=>onChnageMenu(data.path)}>
                                        <img src={activeLi === data.path ? data.activeIcon : data.icon} className='h-4' /> 
                                        <span className='ml-2.5 '>{data.title}</span>
                                    </div>
                                </li>
                            )
                    })}

                </ul>
            </div>
        </aside>
    )
}

export default Sidebar