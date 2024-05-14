import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import React from 'react'
import Header from '../../components/Header'

const PrivateLayout = ({ title, children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Header title={title} />
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout