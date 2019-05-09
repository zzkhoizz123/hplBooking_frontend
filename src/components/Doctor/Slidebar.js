import React from 'react';
import { Menu } from 'element-react';
import {NavLink} from 'react-router-dom'

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
        defaultActive="1"
        className="el-menu-vertical-demo"
        theme="dark"
        style={{height: 1000}}
      >

        <NavLink to="/doctor">
          <Menu.Item index="1">
            <i className="el-icon-date" />
            Thông tin cá nhân
          </Menu.Item>
        </NavLink>

        <NavLink to="/doctor/reset_password">
          <Menu.Item index="2">
            <i className="el-icon-menu" />
            Thay đổi mật khẩu
          </Menu.Item>
        </NavLink>

        <NavLink to="/doctor/schedule">
          <Menu.Item index="3">
            <i className="el-icon-time" />
            Xem lịch khám
          </Menu.Item>
        </NavLink>

        {/* <NavLink to="/doctor/recruitment">
          <Menu.Item index="4">
            <i className="el-icon-document" />
            Đặt lịch
          </Menu.Item>
        </NavLink> */}
      </Menu>
    );
  }
}
