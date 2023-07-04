import React, { useEffect, useState } from 'react'
import './home.css'
import SliderComponent from '../../component/slider/slider'
import { useSelector } from 'react-redux';
import AllGame from './all-game/all-game';

function Home() {
    const { internalRouter } = useSelector((state) => state);
    const [component, setComponent] = useState(null);

    useEffect(() => {
        switch (internalRouter) {
            case 'ALL LIVE CASINO PRODUCTS':
                setComponent(<AllGame />);
                break;
            case 'View':
                setComponent(<AllGame />);
                break;
            default:
                setComponent(<AllGame />);
                break;
        }
    }, [internalRouter]);

    return (
        <>
            <div className='page-main'>
                <SliderComponent />
                <div className='page__table'>
                    <h1 className='page__title bd'>{internalRouter}</h1>
                    {component}
                </div>
            </div>
            <div className='page-main after'>
                <div className='page__table after'>
                    <h1 className='page__title'>A PROUD PARTNER OF</h1>
                    <div className='footer-content'>
                        <div className='footer-content__item col-3'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-laliga.svg'/>
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item col-3'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-bwf.svg'/>
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>

                        <div className='footer-content__item'>
                            <img src='	https://www.m88hl.com/~/static/images/footer/partnerships/partnership-acmilan.svg'/>
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-mp.svg'/>
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-mariaozawa.svg'/>
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home