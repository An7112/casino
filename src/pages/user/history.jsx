import React from 'react'
import './user.css'
import Navbar from './component/nav/navbar'
import TabsHistory from './component/tab-history'

function History() {
    return (
        <div className='page-main'>
            <div className='page-container-user'>
                <Navbar/>
                <div className='page__table'>
                    <TabsHistory />
                </div>
            </div>
        </div>
    )
}

export default History