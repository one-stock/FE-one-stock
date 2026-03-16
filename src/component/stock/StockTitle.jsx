import React from 'react';

const StockTitle = () => {
    return (
          <div className='flex flex-col w-full bg-sub-color rounded-lg p-4 gap-2'>
                <div className='flex w-full justify-end'>
                    <div className='flex w-full gap-2 items-center'>
                        <span className='text-2xl'>{"삼성전자"}</span>
                        <span className='text-xl'>{"005930"}</span>
                    </div>
                    <div className='grid w-full justify-items-end items-center'>
                        <span>{"하트"}</span>
                    </div>
                </div>
                <div className='text-red-500'>
                    <span className='text-xl'>{"128,500"}({"+8,600"} | {"7.17%"})</span>
                </div>
            </div>  
    );
};

export default StockTitle;