import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Bottom from './Bottom';

const Layout = () => {
    return (
        <div className='min-h-dvh w-screen flex justify-center'>
            <div className="w-full bg-main flex flex-col min-h-dvh max-w-120">
                <header className="fixed max-w-120 top-0 left-1/2 -translate-x-1/2 w-full  h-16 border-b flex items-center bg-main-color z-50">
                    <Header/>
                </header>
                <main className="flex grow pt-16 pb-20 h-full w-full bg-main">
                    <Outlet/>                
                </main>
                <footer className="fixed max-w-120 bottom-0 w-full left-1/2 -translate-x-1/2 h-20 border-t flex justify-around items-center bg-bottom-color z-50">
                    <Bottom/>
                </footer>   
            </div>
        </div>
    );
}

export default Layout;
