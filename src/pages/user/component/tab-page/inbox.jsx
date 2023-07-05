import React from 'react'
import './account-profile.css'
import { AiFillEye } from 'react-icons/ai'
import { BiRefresh, BiTrashAlt } from 'react-icons/bi'

function Inbox() {
    return (
        <div className='tab-main'>
            <div className='tab-container'>
                <div className='inbox-header'>
                    <div className='select-all'>
                        <input className='checkbox' type='checkbox' />
                        <span>Select All</span>
                    </div>
                    <div className='table-action-list'>
                        <span>MARK AS READ <AiFillEye /></span>
                        <span><BiRefresh /> REFRESH</span>
                        <span><BiTrashAlt /> MARK AS READ</span>
                    </div>
                </div>
                <div className='table-container'>
                    <div className='table-header'>
                        <div className='table-header__item left'>
                            <p>Select</p>
                        </div>
                        <div className='table-header__item center'>
                            <p>Subject</p>
                        </div>
                        <div className='table-header__item right'>
                            <p>Date/Time</p>
                        </div>
                    </div>
                    <div className='no-data'>
                        <span>No data</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox