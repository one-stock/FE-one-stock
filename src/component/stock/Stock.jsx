import React from 'react';
import StockTitle from './StockTitle';
import StockTab from './StockTab';

const Stock = () => {
    return (
        <div className='w-full h-full p-2 overflow-auto'>
            <div className='flex flex-col gap-5'>         
            <StockTitle/>
            <StockTab/>
            </div>
        </div>
    );
};

export default Stock;