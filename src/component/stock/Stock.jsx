import React from 'react';

const Stock = () => {
    return (
        <div className='bg-main-color w-full h-full p-2'>
            <div className='flex-col w-full bg-sub-color rounded-lg'>
                <div className='flex w-full justify-end'>
                    <div className='w-full'>
                    삼성전자
                    </div>
                    <div className='w-full'>
                    하트
                    </div>
                </div>
                <div>
                    금액
                </div>
            </div>
        </div>
    );
};

export default Stock;