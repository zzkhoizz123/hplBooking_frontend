import React from 'react';
import {
  Button,
  Layout,
  Form,
  Input,
  Radio,
  DatePicker,
  Slider
} from 'element-react';
import 'element-theme-default';

import api from "./api";
import { stringify } from 'querystring';
const moment = require("moment");

export default class Profile extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        name: '',
        email: '',
        role: 'patient',
        SSN: '',
        phoneNumber: '',
        sex: 'male',
        DoB: moment(Date.now()).format("YYYY-MM-DD"),
        department: "",
        room: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.state['name'];
    let username = this.state['username'];
    let password = this.state['password'];
    let email = this.state['gmail'];
    let id = this.state['id'];
    
  }

  componentDidMount(){
    //let id = sessionStorage.getItem('id');
    api.getuser()
      .then(data => {     
        this.setState({
          username: data.username,
          name: data.name,
          email: data.email,
          role: data.role === 0 ? 'patient' : 'doctor',
          SSN: data.SSN,
          phoneNumber: data.phoneNumber,
          sex: data.sex,
          DoB: moment(data.DoB).format("YYYY-MM-DD"),
          department: data.department,
          room: data.room
        });
      })
      .catch(err => {
        alert(err);
      })
    }

  handleChange = name => value => {
    this.setState({[name]: value});
  }


  render() {
    return (

    <Layout.Row>
      <Layout.Col span="7">
        <div className="grid-content bg-purple">
          <img src="/people.jpg" alt="logo"/>
        </div>
      </Layout.Col>


      <Layout.Col span="17">
        <div className="grid-content bg-purple-light">
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Name</h5>
              <Input className = "col-lg-10" name="username" value={this.state.name} onChange={this.handleChange('name')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User Name</h5>
              <Input className = "col-lg-10" style={{width: 700}} value={this.state.username} onChange={this.handleChange('username')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Email</h5>
              <Input className = "col-lg-10" value={this.state.email} onChange={this.handleChange('email')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">SSN</h5>
              <Input className = "col-lg-10" value={this.state.SSN} onChange={this.handleChange('SSN')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Phone Number</h5>
              <Input className = "col-lg-10" value={this.state.phoneNumber} onChange={this.handleChange('phoneNumber')}></Input>
            </Form.Item>

                <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                  <h5 className = "col-lg-4" style={{marginRight: "-137px"}}>Date of birth</h5>
                  {/* <Form.Item prop="date1" labelWidth="0px" className = "col-lg-8">
                    <DatePicker
                    value={this.state.DoB}
                    placeholder="Pick a date"
                    onChange={this.handleChange('DoB')}
                    />
                  </Form.Item> */}
                  <input id="DoB" type="date" className="input"
                        value={this.state.DoB}
                        onChange={this.handleChange.bind(this, 'DoB')}              
                        required />
                </Form.Item>

              {/* <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                <h5 className = "col-lg-3">Experience</h5>
                <div style = {{marginLeft: 140, width: "450px"}}>
                  <Slider value={this.state.experience} onChange={this.handleChange('experience')}/>
                </div>
            </Form.Item> */}

              <Form.Item style={{marginLeft: "-160px"}}>
                <h5 className = "col-lg-2" style={{marginRight: 15}}>Sex</h5>
                <Radio value="female" checked={this.state.sex === 'female'} onChange={this.handleChange('sex')}>Female</Radio>
                <Radio value="male" checked={this.state.sex === 'male'} onChange={this.handleChange('sex')}>Male</Radio>
              </Form.Item>

            <Form.Item style={{marginLeft: "-160px"}}>
              <h5 className = "col-lg-2" style={{marginRight: 15}}>Role</h5>
              
              <Radio value="patient" checked={this.state.role === 'patient'} onChange={this.handleChange('role')}>Patient</Radio>

              <Radio value="doctor" checked={this.state.position === 'doctor'} onChange={this.handleChange('role')}>Doctor</Radio>
            </Form.Item>

             {/* <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Description</h5>
              <Input className = "col-lg-10" type="textarea" style={{width: 558, marginTop: 40}} value={this.state.description} onChange={this.handleChange('description')}></Input>
              </Form.Item> */}

            <Form.Item style={{marginTop: 30}}>
              <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Save</Button>
              <Button style={{marginLeft: 140}}>Cancel</Button>
            </Form.Item>

          </Form>
        </div>
      </Layout.Col>
    </Layout.Row>
    )
  }
}
