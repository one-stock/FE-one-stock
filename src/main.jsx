import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Layout from './page/common/Layout.jsx';
import StockPage from './page/StockPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element= {<Layout />} >
          <Route path='/' element= {<App />}/>
          <Route path='/stocks' element= {<StockPage />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
