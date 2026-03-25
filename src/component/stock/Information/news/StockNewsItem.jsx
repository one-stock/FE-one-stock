import React from 'react';
import { Link} from 'react-router';

const StockNewsItem = () => {

    return (
        <Link className='bg-main-color rounded-xl p-3 flex flex-col gap-2' to="https://n.news.naver.com/article/011/0004603389">
            <div>국내 <b>주식</b>형펀드서 사흘째 자금 순유출</div>
            <div><hr/></div>
            <div> 국내 <b>주식</b>형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 <b>주식</b>형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드...</div>
        </Link>
    );
};

export default StockNewsItem;