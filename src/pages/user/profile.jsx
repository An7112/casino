import React from 'react'
import './user.css'
import TabsComponent from './component/tabs'
import Navbar from './component/nav/navbar'

function Profile() {
    return (
        <div className='page-main'>
            <div className='page-container-user'>
                <Navbar/>
                <div className='page__table'>
                    <TabsComponent />
                </div>
            </div>
        </div>
    )
}

export default Profile