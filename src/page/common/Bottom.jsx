import React from 'react';

const Bottom = () => {
    return (
        <div className='flex'>
            <button className="flex flex-col items-center text-blue-500">
                <span className="text-xs font-medium">홈</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
                <span className="text-xs font-medium">관심</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
                <span className="text-xs font-medium">검색</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
                <span className="text-xs font-medium">알림</span>
            </button>
        </div>
    );
};
export default Bottom;