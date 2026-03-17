import React from 'react';
import StockOverview from './StockOverview';
import StockMainInfo from './StockMainInfo';

const StockInfo = () => {
    return (
        <div className='flex flex-col' >
            <StockOverview/>
            <StockMainInfo/>
        </div>
        
    );
};

export default StockInfo;