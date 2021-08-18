/**
 * @author ClearLuvMoki
 * @filename Other.js
 * @date 2021-07-17 星期六
 * @description 头部的切换语言购物车等icon
 * @todo 
 */
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
// import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';
import { GlobalOutlined, ShoppingCartOutlined, HeartOutlined  } from '@ant-design/icons';
import CartOverlay from './CartOverlay'

const OtherMenus = ({ className }) => {
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        {/* <Link > */}
            <GlobalOutlined />
        {/* </Link> */}
      </Menu.Item>
      <Menu.Item key="1">
        {/* <Link > */}
            <ShoppingCartOutlined  onClick={() => console.log(222)}/>
        {/* </Link> */}
      </Menu.Item>
      <Menu.Item key="2">
        {/* <Link > */}
            <HeartOutlined />
        {/* </Link> */}
      </Menu.Item>
      
    </Menu>
  );
};

// {/* 购物车 */}
// <CartOverlay
//   activeStatus={offCanvasCartActive}
//   getActiveStatus={setOffCanvasCartActive}
// />

export default OtherMenus;
