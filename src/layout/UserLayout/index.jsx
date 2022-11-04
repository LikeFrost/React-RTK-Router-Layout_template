import React, { useState } from 'react';
import { Layout } from 'antd';

function UserLayout({ children }) {
  return (
    <Layout style={{minHeight:'100vh'}}>
      {children}
    </Layout>
  );
}

export default UserLayout;
