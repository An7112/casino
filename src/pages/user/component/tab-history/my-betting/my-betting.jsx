import React, { useState } from 'react'
import '../../tab-page/account-profile.css'
import '../deposit/deposit.css'
import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

function MyBetting() {
  const [trsSelected, setTrsSelected] = useState(false);
  const dateFormat = 'YYYY/MM/DD';
  return (
    <div className='tab-main'>
      <div className='tab-container'>
        <h3 className='tab-title-page'>MY BETTING</h3>
        <div className='history-grid'>
          <div className='grid-item'>
            <div className='input-area'>
              <div className='input-lable grid' >
                Select Date From:
              </div>
              <div className='input-wrapper'>
                <DatePicker className='tabPanel' defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div className='input-area'>
              <div className='input-lable grid'>
                To:
              </div>
              <div className='input-wrapper'>
                <DatePicker className='tabPanel' defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
              </div>
            </div>
          </div>
          <button className='button-tab-submmit update grid'>
            SUBMIT
          </button>
        </div>
        </div>
    </div>
  )
}

export default MyBetting