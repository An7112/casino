import React, { useState } from 'react'
import '../../tab-page/account-profile.css'
import './deposit.css'
import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

function Deposit() {
  const [trsSelected, setTrsSelected] = useState(false);
  const dateFormat = 'YYYY/MM/DD';
  return (
    <div className='tab-main'>
      <div className='tab-container'>
        <h3 className='tab-title-page'>DEPOSIT / WITHDRAWAL</h3>
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
        </div>
        <div className='history-grid'>
          <div className='grid-item'>
            <div className='input-area'>
              <div className='input-lable grid' >
                Transaction Type:
              </div>
              <div className='input-wrapper'>
                <Select
                  defaultValue="all"
                  suffixIcon={''}
                  onDropdownVisibleChange={(visible) => setTrsSelected(visible)}
                  options={[
                    { value: 'all', label: 'All' },
                    { value: 'deposit', label: 'Deposit' },
                    { value: 'withdrawal', label: 'Withdrawal' },
                  ]}
                />
                {trsSelected
                  ? <BsChevronUp className="icon icon-right icon-lock" />
                  : <BsChevronDown className="icon icon-right icon-lock" />
                }
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div className='input-area'>
              <div className='input-lable grid' >
                Status:
              </div>
              <div className='input-wrapper'>
                <Select
                  defaultValue="all"
                  suffixIcon={''}
                  onDropdownVisibleChange={(visible) => setTrsSelected(visible)}
                  options={[
                    { value: 'all', label: 'All' },
                    { value: 'successful', label: 'Successful' },
                    { value: 'declined', label: 'Declined' },
                    { value: 'pending', label: 'Pending' },
                    { value: 'cancelled', label: 'Cancelled' },
                  ]}
                />
                {trsSelected
                  ? <BsChevronUp className="icon icon-right icon-lock" />
                  : <BsChevronDown className="icon icon-right icon-lock" />
                }
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

export default Deposit