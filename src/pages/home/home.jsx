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
        </>
    )
}

export default Home