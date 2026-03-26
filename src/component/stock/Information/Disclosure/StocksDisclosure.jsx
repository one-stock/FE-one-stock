import React, { useState } from 'react';
import StocksDisclosureItem from './StocksDisclosureItem';

const StocksDisclosure = () => {
    const [itemCount, setItemCount] = useState (3);
        const handleMoreClick = () => {
            setItemCount(prevCount => prevCount * 2);
        };
    return (
        <div className='flex flex-col gap-2 items-center w-full'>
            <div className='flex flex-col gap-2 w-full'>
                {Array.from({ length: itemCount }).map((_, index) => (
                    <StocksDisclosureItem key={index} />
                ))}
            </div>
            <div className='bg-main-color rounded-xl p-2 min-w-20 flex justify-center'>
                <button className='w-full' onClick={handleMoreClick}>더보기</button>
            </div>
        </div>
    );
};

export default StocksDisclosure;