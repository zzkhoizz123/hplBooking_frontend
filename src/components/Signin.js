import React from 'react'
import api from './api';

require('../css/SignIn.css');

const moment = require("moment");

class Signin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      alert("password incorrect!");
      return;
    }

    api
      .signup(name, username, password, email,  role, SSN, phoneNumber, DoB, sex, department1, room1)
      .then(status => {
        alert("Sign up success! Let go to Sign in");
        this.props.history.go("/signin");
        this.forceUpdate();
      })
      .catch(err => {
        alert("Input is false. Check again!");
        //alert(err);
      });

  }

  onSubmitSignin(e) {
    e.preventDefault();

    const {username, password} = this.state.formSignin;

    //console.log("username " + username);
   // console.log("pass " + password);
  
    api
      .signin(username, password)
      .then(data => {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('jwt', data.token);
        sessionStorage.setItem('id', data.id);
        this.props.history.go(-1);
        this.forceUpdate();
      })
      .catch(err => {
        alert("Input is false. Check again!");
        //alert(err);
      });

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
          <label htmlFor="dep" className="label">Department</label>
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
          <label htmlFor="room" className="label">Room</label>
          <input type="text" className="input" 
            value={this.state.formSignup["room"]}
            onChange={this.handleChangeSignup.bind(this, 'room')}
          />
        </div>
      );
    }

    return (
      <div>
        <section className={this.state.tab == "tab-2" ? "signup-wrap" : "login-wrap"  }>
          <div className="main_w3agile">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked onClick= {this.onTab}/>
            <label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" onClick= {this.onTab}/>
            <label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
              {/* signin form */}
              <div className="signin_wthree">
                <form 
                 model={this.state.formSignin}
                 onSubmit={this.onSubmitSignin.bind(this)}>  
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input id="user" type="text" className="input" 
                    value={this.state.formSignin["username"]}
                    onChange={this.handleChangeSignin.bind(this, 'username')}
                    required />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password" 
                    value={this.state.formSignin["password"]}
                    onChange={this.handleChangeSignin.bind(this, 'password')}
                    required />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check">
                      <span className="icon" /> Keep me Signed in</label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" defaultValue="Sign In" />
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <h2><a href="#">Forgot Password?</a></h2>
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
                    <label htmlFor="user1" className="label">Name</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["name"]}
                      onChange={this.handleChangeSignup.bind(this, 'name')}
                    required />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="user1" className="label">Username</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["username"]}
                      onChange={this.handleChangeSignup.bind(this, 'username')}
                    required />
                  </div>

                  <div className="group">
                    <label htmlFor="password1" className="label">Password</label>
                    <input id="password1" type="password" className="input" data-type="password"      
                      value={this.state.formSignup.password}
                      onChange={this.handleChangeSignup.bind(this, 'password')}           
                    required />
                  </div>

                  <div className="group">
                    <label htmlFor="password2" className="label">Re-Enter Password</label>
                    <input id="password2" type="password" className="input" data-type="password"
                    
                    value={this.state.formSignup.rePass}
                    onChange={this.handleChangeSignup.bind(this, 'rePass')}  
                    
                    required />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="label">Email Address</label>
                    <input id="email" type="email" className="input"
                       value={this.state.formSignup.email}
                      onChange={this.handleChangeSignup.bind(this, 'email')}              
                    required />
                  </div>

                  <div className="group">
                    <label htmlFor="user1" className="label">SSN</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["SSN"]}
                      onChange={this.handleChangeSignup.bind(this, 'SSN')}
                      />
                  </div>

                  <div className="group">
                    <label htmlFor="user1" className="label">Phone Number</label>
                    <input type="text" className="input" 
                      value={this.state.formSignup["phoneNumber"]}
                      onChange={this.handleChangeSignup.bind(this, 'phoneNumber')}
                      />
                  </div>

                   <div className="group">
                    <label htmlFor="date" className="label">Birth Date</label>
                    <input id="DoB" type="date" className="input"
                       value={this.state.formSignup.DoB}
                      onChange={this.handleChangeSignup.bind(this, 'DoB')}              
                    required />
                  </div>

                  <div className="group">
                    <label htmlFor="sex" className="label">Sex</label>
                    Male: <input id="sex" type="radio" 
                      value="male"
                      checked={this.state.formSignup.sex === 'male'}
                      onChange={this.handleChangeSignup.bind(this, 'sex')}              
                      /> <br />
                    Female: <input id="sex" type="radio" 
                      value="female"
                      checked={this.state.formSignup.sex === 'female'}
                      onChange={this.handleChangeSignup.bind(this, 'sex')}              
                      /> 
                  </div>

                  <div className="group">
                    <label htmlFor="role" className="label">Role</label>
                      Patient: <input id="role" type="radio" onClick= {this.onPatientField}
                        value = "patient"
                        checked={this.state.formSignup.role === 'patient'}
                        onChange={this.handleChangeSignup.bind(this, 'role')}              
                        /> <br />
                      Doctor: <input id="role" type="radio" onClick= {this.onDoctorField} 
                        value="doctor"
                        checked={this.state.formSignup.role === 'doctor'}
                        onChange={this.handleChangeSignup.bind(this, 'role')}              
                        />
                    
                  </div>
                  {departmentbar}
                  {roombar}

                  <div className="group">
                    <input type="submit" className="button" defaultValue="Sign Up" />
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <label htmlFor="tab-1">Already Member? </label>
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

