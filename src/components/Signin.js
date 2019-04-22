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
        department: 0,
        room: 0
      },
      formSignin:{
        username:'',
        password:''
      },
      tab : 'tab-1',
      err: false,
    };
  }

  onTab = e =>{
    this.setState({
      tab: e.target.id
    })
  }


  onSubmitSignup(e) {
    e.preventDefault();

    // let name = this.state.form['name'];
    // let username = this.state.form['username'];
    // let password = this.state.form['password'];
    // let rePass = this.state.form['rePAss'];
    // let email = this.state.form['email'];
    // let address = this.state.form['address'];
    // let role = this.state.form['role'];
    // let SSN = this.state.form['SSN'];
    // let phoneNumber = this.state.form['phoneNumber'];
    // let DoB = this.state.form['DoB']; 
    // let sex = this.state.form['sex'];

    const {name, username, password, rePass, email, role, SSN, 
          phoneNumber, DoB, sex, department, room} = this.state.formSignup;
    if(password !== rePass){
      alert("password incorrect!");
      return;
    }

    // console.log("name " + name);
    // console.log("username " + username);
    // console.log("password " + password);
    // console.log("rePass " + rePass);
    // console.log("email " + email);
    // console.log("SSN " + SSN);
    // console.log("phoneNumber " + phoneNumber);
    // console.log("DoB " + DoB);
    // console.log("sex " + sex);
    // console.log("role " + role);
    // console.log("department " + department);
    // console.log("room " + room);

    api
      .signup(name, username, password, email,  role, SSN, phoneNumber, DoB, sex, department, room)
      .then(status => {
        //alert("Sign up success! Let go to Sign in");
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

    console.log("username " + username);
    console.log("pass " + password);
  
    api
      .signin(username, password)
      .then(data => {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('jwt', data.token);
        sessionStorage.setItem('id', data.id);
        this.props.history.replace('/home');
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
                    Patient: <input id="role" type="radio" 
                      value = "patient"
                      checked={this.state.formSignup.role === 'patient'}
                      onChange={this.handleChangeSignup.bind(this, 'role')}              
                      /> <br />
                    Doctor: <input id="role" type="radio" 
                      value="doctor"
                      checked={this.state.formSignup.role === 'doctor'}
                      onChange={this.handleChangeSignup.bind(this, 'role')}              
                      /> 
                  </div>

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

