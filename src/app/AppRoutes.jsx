import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout><Page1/></BasicLayout>} />
      <Route path='page2' element={<BasicLayout><Page2/></BasicLayout>}/>
    </Routes>
  );
}

export default AppRoutes;
