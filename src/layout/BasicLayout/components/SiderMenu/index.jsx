import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const getMenu = (label, key, icon, children, type) => ({
  label, key, icon, children, type,
});
const menu = [
  getMenu(<Link to="/">page1</Link>, '1', <MailOutlined />),
  getMenu(<Link to="/page2">page2</Link>, '2', <MailOutlined />),
  getMenu('menu3', '3', <MailOutlined />),
  getMenu('menu4', '4', <MailOutlined />),
];

function SiderMenu() {
  const [current, setCurrent] = useState('1');
  return (
    <Menu theme="dark" items={menu} selectedKeys={[current]} onClick={(e) => setCurrent(e.key)} />
  );
}

export default SiderMenu;
