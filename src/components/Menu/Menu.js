import React from 'react';
import { PieChartOutlined, DollarOutlined } from '@ant-design/icons';
import { Menu as AntMenu } from 'antd';
import { useRouter } from 'next/router'
import PropTypes from "prop-types";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    
  };
}
const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Bitcoin', '2', <DollarOutlined />),
];

const Menu = ({active}) => {
  const router = useRouter()
  
  const onClick = (e) => {
    console.log('click ', e);
    if(e?.key === "1") {
      router.push('/')
    } else {
      router.push('/bitcoin')
    }
  };
  return (
    <AntMenu
      onClick={onClick}
      style={{
        width: 256,
        height: "100%",
        background: "#f4f3f3"
      }}
      defaultSelectedKeys={[active]}
      mode="inline"
      items={items}
    />
  );
};

Menu.propTypes = {
  active: PropTypes.string,
};

export default Menu;