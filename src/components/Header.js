import React from 'react';
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
  
  constructor() {
    super();
    this.state = {
      username: null,
      role: null,
    };
    this.state.username = sessionStorage.getItem('username');
    this.state.role = sessionStorage.getItem('role');
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(){
    sessionStorage.setItem('username', null);
    sessionStorage.setItem('role', null);
    this.setState({
      username: null,
      role: null
    })
  }

  render() {
    let profilebar, loginbar;

    if(this.state.username == null || this.state.username == "null"){
      
      loginbar = (<li><NavLink to="/signin" activeClassName="active">Đăng nhập/Đăng ký</NavLink></li>);
      // loginbar = (<li><a href="/signin">Đăng nhập/Đăng ký</a></li>);
      profilebar = (<a></a>); 
    }
    else if(this.state.role == 0){
      // profilebar = (<li><NavLink to="/patient" activeClassName="active">{this.state.username}</NavLink></li>);
      // loginbar = (<li><NavLink to="/" activeClassName="active" onClick={this.handleSignout}>Đăng xuất</NavLink></li>);   
      profilebar = (<li><a href="/patient">{this.state.username}</a></li>);
      loginbar = (<li><a href="/" onClick={this.handleSignout}>Đăng xuất</a></li>);    
    }
    else{
      // <NavLink to="/signin" activeClassName="active">Đăng nhập/Đăng ký</NavLink>
      profilebar = (<li><a href="/doctor">{this.state.username}</a></li>);
      loginbar = (<li><a href="/" onClick={this.handleSignout}>Đăng xuất</a></li>);     
    }
    
    return (
      <div className="container-fluid">
      <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
        {/* logo */}
        <div id="logo">
          <h1><a href="/"><span className="fa fa-linode mr-2" />HplBooking</a></h1>
        </div>
        {/* //logo */}
        {/* nav */}
        <div className="nav_w3ls">
          <nav>
            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li><NavLink exact to="/" activeClassName="active">Trang chủ</NavLink></li>
              {/* <li><a href="/" className="active">Trang chủ</a></li> */}
              <li><NavLink to="/about" activeClassName="active">Về chúng tôi</NavLink></li>
              {/* <li><a href="/about" >Về chúng tôi</a></li> */}
              {/* <li><a href="/signin">Sign In/Up</a></li> */}
              <li><NavLink to="/contact" activeClassName="active">Liên hệ</NavLink></li>
              {/* <li><a href="/contact">Liên hệ</a></li> */}
              <li><NavLink to="/price" activeClassName="active">Giá cả</NavLink></li>
              {/* <li><a href="/price">Giá cả</a></li> */}

           

              {profilebar}
              {loginbar}
              
              {/* <li>
                <label htmlFor="drop-2" className="toggle toogle-2">Dropdown <span className="fa fa-angle-down" aria-hidden="true" />
                </label>
                <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /></a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li><a href="#services" className="drop-text">Services</a></li>
                  <li><a href="faq.html" className="drop-text">Faq's</a></li>
                  <li><a href="404.html" className="drop-text">404</a></li>
                  <li><a href="#stats" className="drop-text">Statistics</a></li>
                  <li><a href="about.html" className="drop-text">Why Choose Us?</a></li>
                  <li><a href="about.html" className="drop-text">Our Team</a></li>
                  <li><a href="#partners" className="drop-text">Partners</a></li>
                </ul>
              </li> */}
              
            </ul>
          </nav>
        </div>
        {/* //nav */}
    
      </div>
    </div>
    );
  }

  onSelect() {}

}

export default Header;
