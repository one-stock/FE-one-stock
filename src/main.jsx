import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Layout from './page/common/Layout.jsx';
import StockPage from './page/StockPage.jsx';
import StockInfo from './component/stock/Infomation/StockInfo.jsx';
import StockChart from './component/stock/chart/StockChart.jsx';
import StockFinance from './component/stock/finance/StockFinance.jsx';
import StockInv from './component/stock/invest/StockInv.jsx';
import StockCommunity from './component/stock/community/StockCommunity.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element= {<Layout />} >
          <Route path='/' element= {<App />}/> {/* 추후 main 으로 바꾸기*/}
          <Route path='/stocks' element= {<StockPage />}>            
            <Route path='chart' element= {<StockChart/>}/>
            <Route path='info' element= {<StockInfo/>}/>           
            <Route path='finance' element= {<StockFinance/>}/>
            <Route path='invest' element= {<StockInv/>}/>
            <Route path='community' element= {<StockCommunity/>}/>
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
