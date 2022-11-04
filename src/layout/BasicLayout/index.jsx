import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from './components/SiderMenu';
import Logo from './components/Logo';

const {
  Header, Content, Footer, Sider,
} = Layout;

function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{minHeight:'100vh'}}>
      <Header style={{ minHeight:'10vh',padding:0}}>
        <Logo text="TSN系统" />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SiderMenu />
        </Sider>
        <Layout style={{padding:'16px'}}>
          <Content>
            {children}
          </Content>
          <Footer style={{textAlign:'center'}}>
            Lab @2022 Created by LikeFrost
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
