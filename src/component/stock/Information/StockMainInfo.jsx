import React from 'react';
import StockNews from './news/StockNews';

const StockMainInfo = () => {
    return (
            <div className='flex flex-col mt-10'>
                    <div className='flex justify-around bg-bottom-color rounded-t-xl p-1 gap-2'>
                        <div>
                            <button type='button'>뉴스</button>
                        </div>
                        <div>
                            <button type='button'>공시 </button>
                        </div>
                    </div>
                    <div className='bg-sub-color p-2 rounded-b-xl'>
                    <StockNews/>
                    </div>
            </div>
    );
};

export default StockMainInfo;