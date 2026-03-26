import React from 'react';
import { Outlet, useNavigate } from 'react-router';

const StockTab = () => {
    const navigate = useNavigate();
    const isChart = location.pathname === "/stocks/chart";
	const isInfo = location.pathname === "/stocks/info";
    const isFinance = location.pathname === "/stocks/finance";
    const isInvest = location.pathname === "/stocks/invest";
    const isCommunity = location.pathname === "/stocks/community";
    
    return (
        <div className='flex flex-col'>
            <div className='flex justify-around bg-bottom-color rounded-t-xl p-1'>
                <div className={`${isChart ? "text-white" : "text-black"}`}>
                    <button type='button' onClick={() => navigate("/stocks/chart")}>차트 보기</button>
                </div>
                <div className={`${isInfo ? "text-white" : "text-black"}`}>
                    <button type='button' onClick={() => navigate("/stocks/info")}>종목 정보</button>
                </div>
                <div className={`${isFinance ? "text-white" : "text-black"}`}>
                    <button type='button' onClick={() => navigate("/stocks/finance")}>재무 정보</button>
                </div>
                <div className={`${isInvest ? "text-white" : "text-black"}`}>
                    <button type='button' onClick={() => navigate("/stocks/invest")}>투자 정보</button>
                </div>
                <div className={`${isCommunity ? "text-white" : "text-black"}`}>
                    <button type='button' onClick={() => navigate("/stocks/community")}>커뮤니티</button>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default StockTab;