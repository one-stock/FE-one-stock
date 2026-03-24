import React, { useState } from 'react';
import StockNews from './news/StockNews';
import StocksDisclosure from './Disclosure/StocksDisclosure';

const StockMainInfo = () => {
    const [flag, setFlag] = useState("NEWS");

    const handleFlag = (flag) => {
        setFlag(flag)
    }



    return (
            <div className='flex flex-col mt-10'>
                    <div className='flex justify-around bg-bottom-color rounded-t-xl p-1 gap-2'>
                        <div>
                            <button type='button' onClick={() => handleFlag("NEWS")}>뉴스</button>
                        </div>
                        <div>
                            <button type='button' onClick={() => handleFlag("DISCLOSURE")}>공시 </button>
                        </div>
                    </div>
                    <div className='bg-sub-color p-2 rounded-b-xl'>
                    {flag === "NEWS" && <StockNews/>}
                    {flag === "DISCLOSURE" && <StocksDisclosure/>}
                    
                    </div>
            </div>
    );
};

export default StockMainInfo;