import React, { useState } from 'react';
import StockNewsItem from './StockNewsItem';

const StockNews = () => {

    const [itemCount, setItemCount] = useState(3);
    const handleMoreClick = () => {
        setItemCount(prevCount => prevCount * 2);
    };

    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className='flex flex-col gap-2'>
                {Array.from({ length: itemCount }).map((_, index) => (
                    <StockNewsItem key={index} />
                ))}
            </div>
            <div className='bg-main-color rounded-xl p-2 min-w-20 flex justify-center'><button className='w-full' onClick={handleMoreClick}>더보기</button></div>
        </div>
    );
};

export default StockNews;