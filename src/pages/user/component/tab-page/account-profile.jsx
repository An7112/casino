import React, { useState } from 'react'
import './account-profile.css'
import { DatePicker, Select } from 'antd';
import { FiLock } from 'react-icons/fi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import dayjs from 'dayjs';

function AccountProfile() {
    const [showOldPass, setShowOldPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [msSelected, setMsSelected] = useState(false);
    const [sabaSelected, setSabaSelected] = useState(false);
    const [langSelected, setLangSelected] = useState(false);
    const dateFormat = 'YYYY/MM/DD';

    return (
        <div className='tab-main'>
            <div className='tab-container'>
                <h3 className='tab-title-page'>Personal details</h3>
                <div className='input-area'>
                    <div className='input-lable' >
                        Nickname
                    </div>
                    <div className='input-wrapper'>
                        <div className='input disable'>
                            <input readOnly type="text" placeholder="Nickname" id="FirstName" name="FirstName" value="An" />
                            <FiLock className="icon icon-right icon-lock" />
                        </div>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        Date of Birth
                    </div>
                    <div className='input-wrapper'>
                        <DatePicker className='tabPanel' defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        Username
                    </div>
                    <div className='input-wrapper'>
                        <div className='input disable'>
                            <input readOnly type="text" placeholder="Username" id="Username" name="Username" value="thanhan7112" />
                            <FiLock className="icon icon-right icon-lock" />
                        </div>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        E-Mail
                    </div>
                    <div className='input-wrapper'>
                        <div className='input disable'>
                            <input readOnly type="text" placeholder="E-Mail" id="E-Mail" name="E-Mail" value="thanhan7112@gmail.com" />
                            <FiLock className="icon icon-right icon-lock" />
                        </div>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        Mobile Number
                    </div>
                    <div className='input-wrapper'>
                        <div className='input disable'>
                            <input readOnly type="text" placeholder="Mobile Number" id="MobileNumber" name="MobileNumber" value="+8*****4144" />
                            <FiLock className="icon icon-right icon-lock" />
                        </div>
                    </div>
                </div>
                <h3 className='tab-title-page'>CHANGE MY PASSWORD</h3>
                <div className='input-area'>
                    <div className='input-lable' >
                        Old password
                    </div>
                    <div className='input-wrapper'>
                        <div className='input'>
                            <input type={showOldPass === true ? "text" : "password"} placeholder="Enter your old password" id="OldPass" name="OldPass" />
                            {showOldPass
                                ? <AiFillEyeInvisible className="icon icon-right icon-lock" style={{ fontSize: '22px' }} onClick={() => setShowOldPass(false)} />
                                : <AiFillEye className="icon icon-right icon-lock" style={{ fontSize: '22px' }} onClick={() => setShowOldPass(true)} />
                            }
                        </div>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        New password
                    </div>
                    <div className='input-wrapper'>
                        <div className='input'>
                            <input type={showNewPass === true ? "text" : "password"} placeholder="Enter your new password" id="NewPass" name="NewPass" />
                            {showNewPass
                                ? <AiFillEyeInvisible className="icon icon-right icon-lock" style={{ fontSize: '22px' }} onClick={() => setShowNewPass(false)} />
                                : <AiFillEye className="icon icon-right icon-lock" style={{ fontSize: '22px' }} onClick={() => setShowNewPass(true)} />
                            }
                        </div>
                    </div>
                </div>
                <h3 className='tab-title-page'>MY PREFERENCES</h3>
                <div className='input-area'>
                    <div className='input-lable' >
                        Preferred Currency
                    </div>
                    <div className='input-wrapper'>
                        <div className='input disable'>
                            <input readOnly type="text" placeholder="Preferred Currency" id="PC" name="PC" value="VND" />
                            <FiLock className="icon icon-right icon-lock" />
                        </div>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        MSports Preferred Odds
                    </div>
                    <div className='input-wrapper'>
                        <Select
                            defaultValue="hk"
                            suffixIcon={''}
                            onDropdownVisibleChange={(visible) => setMsSelected(visible)}
                            options={[
                                { value: 'hk', label: 'HK' },
                                { value: 'ind', label: 'IND' },
                                { value: 'my', label: 'MY' },
                                { value: 'DEC', label: 'DEC' },
                            ]}
                        />
                        {msSelected
                            ? <BsChevronUp className="icon icon-right icon-lock" />
                            : <BsChevronDown className="icon icon-right icon-lock" />
                        }
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                        SABA Sports Preferred Odds
                    </div>
                    <div className='input-wrapper'>
                        <Select
                            defaultValue="dec"
                            suffixIcon={''}
                            onDropdownVisibleChange={(visible) => setSabaSelected(visible)}
                            options={[
                                { value: 'dec', label: 'DEC' },
                                { value: 'cd', label: 'CN' },
                                { value: 'ind', label: 'IND' },
                                { value: 'us', label: 'US' },
                                { value: 'my', label: 'MY' },
                            ]}
                        />
                        {sabaSelected
                            ? <BsChevronUp className="icon icon-right icon-lock" />
                            : <BsChevronDown className="icon icon-right icon-lock" />
                        }
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-lable' >
                    Preferred Language for Communication
                    </div>
                    <div className='input-wrapper'>
                        <Select
                            defaultValue="en"
                            suffixIcon={''}
                            onDropdownVisibleChange={(visible) => setLangSelected(visible)}
                            options={[
                                { value: 'en', label: 'English' },
                                { value: 'in', label: 'Indonesia' },
                                { value: 'vn', label: 'Viet Nam' },
                            ]}
                        />
                        {langSelected
                            ? <BsChevronUp className="icon icon-right icon-lock" />
                            : <BsChevronDown className="icon icon-right icon-lock" />
                        }
                    </div>
                </div>
                <button className='button-tab-submmit'>
                    SAVE CHANGES
                </button>
            </div>
        </div>
    )
}

export default AccountProfile