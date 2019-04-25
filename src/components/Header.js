import React from 'react';


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
      loginbar = (<li><a href="/signin">Sign In/Up</a></li>);
      profilebar = (<a></a>); 
    }
    else if(this.state.role == 0){
      profilebar = (<li><a href="/patient">{this.state.username}</a></li>);
      loginbar = (<li><a href="/home" onClick={this.handleSignout}>Sign Out</a></li>);    
    }
    else{
      profilebar = (<li><a href="/doctor">{this.state.username}</a></li>);
      loginbar = (<li><a href="/home" onClick={this.handleSignout}>Sign Out</a></li>);     
    }
    
    return (
      <div className="container-fluid">
      <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
        {/* logo */}
        <div id="logo">
          <h1><a href="/home"><span className="fa fa-linode mr-2" />Startup</a></h1>
        </div>
        {/* //logo */}
        {/* nav */}
        <div className="nav_w3ls">
          <nav>
            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li><a href="/home" className="active">Home</a></li>
              <li><a href="/about">About Us</a></li>
              {/* <li><a href="/signin">Sign In/Up</a></li> */}
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/price">Price</a></li>
              {profilebar}
              {loginbar}
              
              <li>
                {/* First Tier Drop Down */}
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
              </li>
              
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
