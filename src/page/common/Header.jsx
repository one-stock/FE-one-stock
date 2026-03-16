import React from 'react';
import Logo from '../../component/common/Logo';

const Header = () => {
    return (
        <div className='p-2 w-full flex justify-between items-center'>
            <div>
                <Logo/>
            </div>
            <div>
                햄버거메뉴
            </div>
        </div>
    );
};

export default Header;