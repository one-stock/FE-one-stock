import React from 'react';
import { Link } from 'react-router';

const StocksDisclosureItem = () => {
    return (
        <Link className='bg-main-color w-full rounded-xl p-2 text-center flex justify-around' to='https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20200117000375'>
            <div>임원ㆍ주요주주특정증권등소유상황보고서</div>
            <div>2020-01-17</div>
        </Link>
    );
};

export default StocksDisclosureItem;