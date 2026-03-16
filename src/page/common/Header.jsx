import React from 'react';
import Logo from '../../component/common/Logo';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='p-2 w-full flex justify-between items-center'>
            <button type='button' onClick={() => navigate("/")} >
                <Logo/>
            </button>
            <div>
                햄버거메뉴
            </div>
        </div>
    );
};

export default Header;