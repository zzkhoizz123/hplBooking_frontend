import React from 'react';
import { Menu } from 'element-react';
import {NavLink} from 'react-router-dom'
import Profile from './../Profile';

export default class SlideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <Menu
        // defaultActive="1"
        className="el-menu-vertical-demo"
        theme="dark"
        style={{height: 1000}}
      >

        <NavLink to="/patient">
          <Menu.Item index="1" active={true}>
            <i className="el-icon-date"/>
            Thông tin cá nhân
          </Menu.Item>
        </NavLink>


        <NavLink to="/patient/reset_password" >
          <Menu.Item index="2" active={true}>
            <i className="el-icon-menu" />
            Thay đổi mật khẩu
          </Menu.Item>
        </NavLink>

        <NavLink to="/patient/schedule" >
          <Menu.Item index="3">
            <i className="el-icon-time" />
            Xem lịch khám
          </Menu.Item>
        </NavLink>

        <NavLink to="/patient/recruitment">
          <Menu.Item index="4">
            <i className="el-icon-document" />
            Đặt lịch
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}
