import React from 'react'
import api from './api';
import {Notification} from 'element-react';
import Simplert from 'react-simplert'

require('../css/SignIn.css');

const moment = require("moment");

class Signin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      titleAlert: '',
      messageAlert: '',
      typeAlert: '',

      formSignup: {
        username: '',
        password: '',
        rePass: '',
        name: '',
        email: '',
        role: 'patient',
        SSN: '',
        phoneNumber: '',
        sex: 'male',
        DoB: moment(Date.now()).format("YYYY-MM-DD"),
        department: "1",
        room: ""
      },
      formSignin:{
        username:'',
        password:''
      },
      tab : 'tab-1',
      field: '',
      err: false,
    };
  }

  onTab = e =>{
    this.setState({
      tab: e.target.id
    })
  }

  onDoctorField = e =>{
    this.setState({
      field: e.target.id
    })
  }

  onPatientField = e =>{
    this.setState({
      field: ''
    })
  }


  onSubmitSignup(e) {
    e.preventDefault();

    const {name, username, password, rePass, email, role, SSN, 
          phoneNumber, DoB, sex, department, room} = this.state.formSignup;

    const department1 = parseInt(department, 10);
    const room1 = parseInt(room, 10)
    if(password !== rePass){
      Notification.error({
        title: "Vui lòng nhập lại mật khẩu!"
      });
      return;
    }

    if (
      username.length < 6 ||
      password.length < 8 ||
      !this.validateEmail(email)
    ) {
      Notification.error({
        title: "Vui lòng kiểm tra lại!"
      });
      return;
    }

    api
      .signup(name, username, password, email,  role, SSN, phoneNumber, DoB, sex, department1, room1)
      .then(status => {
        this.setState({
          showAlert: true,
          titleAlert: 'Thành công',
          messageAlert: 'Bạn đã đăng ký thành công',
          typeAlert: 'success'
        })
        // this.props.history.go("/signin#");
        window.setTimeout(function(){
          // Move to a new location or you can do something else
          window.location.href = "/signin";
        }, 2000);

        this.forceUpdate();
      })
      .catch(err => {
        Notification.error({
          title: err
        });
      });

  }

  onSubmitSignin(e) {
    e.preventDefault();

    const {username, password} = this.state.formSignin;

    // console.log("username " + username);
    // console.log("pass " + password);
  
    api
      .signin(username, password)
      .then(data => {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('jwt', data.token);
        sessionStorage.setItem('id', data.id);

        if (data.role == 0){
          window.location.href = "/patient";
        }
        else if(data.role == 1){
          window.location.href = "/doctor";
        }
        else window.location.href = "/admin";
         
        // this.props.history.push("/");
        // window.location.reload();
 
      })
      .catch(err => {
        Notification.error({
          title: err
        });
        //alert(err);
      });

  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  handleChangeSignup = (key, event) => {
    this.setState({
      formSignup: Object.assign(this.state.formSignup, { [key]: event.target.value }),
    });
  };

  handleChangeSignin = (key, event) => {
    this.setState({
      formSignin: Object.assign(this.state.formSignin, { [key]: event.target.value }),
    });
  };

  render() {

    

   let departmentbar, roombar;
    if(this.state.field == ''){
      departmentbar = (<div></div>);
      roombar = (<div></div>);
    }
    else{
      departmentbar = (
        <div className="group">
          <label htmlFor="dep" className="label">Khoa</label>
          Đa Khoa: <input id="dep" type="radio" 
            value = "1"
            checked={this.state.formSignup.department === '1'}
            onChange={this.handleChangeSignup.bind(this, 'department')}              
            /> <br />
          Nha Khoa: <input id="dep" type="radio" 
            value="2"
            checked={this.state.formSignup.department === '2'}
            onChange={this.handleChangeSignup.bind(this, 'department')}              
            /> <br />
          Tim Mạch: <input id="dep" type="radio" 
            value="3"
            checked={this.state.formSignup.department === '3'}
            onChange={this.handleChangeSignup.bind(this, 'department')}              
            /> <br />
          Tai Mũi Họng: <input id="dep" type="radio" 
            value="4"
            checked={this.state.formSignup.department === '4'}
            onChange={this.handleChangeSignup.bind(this, 'department')}              
            />
        </div>
      );
      roombar = (
        <div className="group">
          <label htmlFor="room" className="label">Phòng</label>
          <input type="text" className="input" 
            value={this.state.formSignup["room"]}
            onChange={this.handleChangeSignup.bind(this, 'room')}
          />
        </div>
      );
    }

    return (
      <div>
        <Simplert
            showSimplert={this.state.showAlert}
            type={this.state.typeAlert}
            title={this.state.titleAlert}
            message={this.state.messageAlert}
        />

        <section className={this.state.tab == "tab-2" ? "signup-wrap" : "login-wrap"  }>
          <div className="main_w3agile">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked onClick= {this.onTab}/>
            <label htmlFor="tab-1" className="tab">Đăng nhập</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" onClick= {this.onTab}/>
            <label htmlFor="tab-2" className="tab">Đăng kí</label>
            <div className="login-form">
              {/* signin form */}
              <div className="signin_wthree">
                <form 
                 model={this.state.formSignin}
                 onSubmit={this.onSubmitSignin.bind(this)}>  
                  <div className="group">
                    <label htmlFor="user" className="label">Tên đăng nhập</label>
                    <input id="user" type="text" className="input" 
                    value={this.state.formSignin["username"]}
                    onChange={this.handleChangeSignin.bind(this, 'username')}
                    required />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Mật khẩu</label>
                    <input id="pass" type="password" className="input" data-type="password" 
                    value={this.state.formSignin["password"]}
                    onChange={this.handleChangeSignin.bind(this, 'password')}
                    required />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check">
                      <span className="icon" /> Ghi nhớ đăng nhập</label>
                  </div>
                  <div className="group">
                    {/* <input type="submit" className="button" Value="Đăng nhập" /> */}
                    <button type="submit" className="button"> Đăng nhập</button>
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <p><a href="#">Quên mật khẩu?</a></p>
                  </div>
                </form>
              </div>
              {/* //signin form */}
              {/* signup form */}
              <div className="signup_wthree">
                <form
                  model={this.state.formSignup}
                  onSubmit={this.onSubmitSignup.bind(this)} >
                  <div className="group">
                    <label htmlFor="user1" className="label">Tên</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["name"]}
                      onChange={this.handleChangeSignup.bind(this, 'name')}
                    required />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="user1" className="label">Tên đăng nhập</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["username"]}
                      onChange={this.handleChangeSignup.bind(this, 'username')}
                    required />
                    {this.state.formSignup.username.length < 6 &&
                    this.state.formSignup.username.length > 0 ? (
                      <h6 style={{ color: 'red', marginLeft: 140 }}>
                        User name có ít nhất 6 kí tự{' '}
                      </h6>
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="password1" className="label">Mật khẩu</label>
                    <input id="password1" type="password" className="input" data-type="password"      
                      value={this.state.formSignup.password}
                      onChange={this.handleChangeSignup.bind(this, 'password')}           
                    required />

                    {this.state.formSignup.password.length < 8 &&
                    this.state.formSignup.password.length > 0 ? (
                      <h6 style={{ color: 'red', marginLeft: 140 }}>
                        Mật khẩu có ít nhất 8 kí tự{' '}
                      </h6>
                    ) : (
                      ''
                    )}

                  </div>

                  <div className="group">
                    <label htmlFor="password2" className="label">Nhập lại mật khẩu</label>
                    <input id="password2" type="password" className="input" data-type="password"
                    
                    value={this.state.formSignup.rePass}
                    onChange={this.handleChangeSignup.bind(this, 'rePass')}  
                    
                    required />

                    {this.state.formSignup.rePass.length < 8 &&
                    this.state.formSignup.rePass.length > 0 && 
                    this.state.formSignup.password != this.state.formSignup.rePass? (
                      <h6 style={{ color: 'red', marginLeft: 140 }}>
                        Mật khẩu nhập lại phải trùng nhau{' '}
                      </h6>
                    ) : (
                      ''
                    )}
                    
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="label">Địa chỉ e-mail</label>
                    <input id="email" type="email" className="input"
                       value={this.state.formSignup.email}
                      onChange={this.handleChangeSignup.bind(this, 'email')}              
                    required />
                    {this.state.formSignup.email === '' ? (
                      ''
                    ) : this.validateEmail(this.state.formSignup.email) ? (
                      ''
                    ) : (
                      <h6 style={{ color: 'red', marginLeft: 140 }}>
                        Vui lòng nhập đúng e-mail{' '}
                      </h6>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="user1" className="label">SSN</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["SSN"]}
                      onChange={this.handleChangeSignup.bind(this, 'SSN')}
                      />
                  </div>

                  <div className="group">
                    <label htmlFor="user1" className="label">Số điện thoại</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["phoneNumber"]}
                      onChange={this.handleChangeSignup.bind(this, 'phoneNumber')}
                      />
                  </div>

                   <div className="group">
                    <label htmlFor="date" className="label">Ngày sinh</label>
                    <input id="DoB" type="date" className="input"
                       value={this.state.formSignup.DoB}
                      onChange={this.handleChangeSignup.bind(this, 'DoB')}              
                    required />
                  </div>
                
                  <div className="group">
                    <label htmlFor="sex" className="label">Giới tính</label>
                    Nam: <input id="sex" type="radio" 
                      value="male"
                      checked={this.state.formSignup.sex === 'male'}
                      onChange={this.handleChangeSignup.bind(this, 'sex')}              
                      /> <br />
                    Nữ: <input id="sex" type="radio" 
                      value="female"
                      checked={this.state.formSignup.sex === 'female'}
                      onChange={this.handleChangeSignup.bind(this, 'sex')}              
                      /> 
                  </div>

                  <div className="group">
                    <label htmlFor="role" className="label">Vai trò</label>
                      Bệnh nhân: <input id="role" type="radio"  onClick= {this.onPatientField}
                        value = "patient"
                        checked={this.state.formSignup.role === 'patient'}
                        onChange={this.handleChangeSignup.bind(this, 'role')}              
                        /> <br />
                      Bác sĩ: <input id="role" type="radio" onClick= {this.onDoctorField} 
                        value="doctor"
                        checked={this.state.formSignup.role === 'doctor'}
                        onChange={this.handleChangeSignup.bind(this, 'role')}              
                        />
                    
                  </div>
                  {departmentbar}
                  {roombar}

                  <div className="group">
                    {/* <input type="submit" className="button" Value="Đăng ký" /> */}
                    <button type="submit" className="button"> Đăng ký</button>
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <label htmlFor="tab-1">Đã có tài khoản? </label>
                  </div>

                </form>
              </div>
              {/* //signup form */}
            </div>
          </div>
        </section>
      </div>

    )
  }

}

export default Signin

