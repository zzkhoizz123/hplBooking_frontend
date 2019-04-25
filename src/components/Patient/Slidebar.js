import React from 'react';
import { Menu } from 'element-react';

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
        defaultActive="3"
        className="el-menu-vertical-demo"
        theme="dark"
        style={{ height: 850 }}
      >
        <a href="/patient">
          <Menu.Item index="1">
            <i className="el-icon-date" />
            Profile
          </Menu.Item>
        </a>
        <a href="/patient/reset_password ">
          <Menu.Item index="2">
            <i className="el-icon-menu" />
            Change password
          </Menu.Item>
        </a>

        <a href="/patient/schedule ">
          <Menu.Item index="3">
            <i className="el-icon-time" />
            Schedule
          </Menu.Item>
        </a>
        
        <a href="/patient/recruitment ">
          <Menu.Item index="4">
            <i className="el-icon-document" />
            Booking
          </Menu.Item>
        </a>
      </Menu>
    );
  }
}
