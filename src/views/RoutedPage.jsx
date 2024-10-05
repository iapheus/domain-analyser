import React from 'react'
import Main from '../views/Main';
import QualityAndInfo from '../views/QualityAndInfo';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Security from './Security';
import Client from './Client';
import Server from './Server';


function RoutedPage() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quality" element={<QualityAndInfo />} />
        <Route path="/server" element={<Server />} />
        <Route path="/security" element={<Security />} />
        <Route path="/client" element={<Client />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutedPage