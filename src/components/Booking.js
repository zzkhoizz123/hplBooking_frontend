import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Layout,
  Form,
  Input,
  DatePicker,
  Select,
  TimePicker,
  Checkbox,
  Alert,
  Notification,
} from 'element-react';
import 'element-theme-default';
import * as moment from 'moment';
import * as api from './api';
import Simplert from 'react-simplert'

export default class Recruitment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      titleAlert: '',
      messageAlert: '',
      typeAlert: '',

      success: false,
      form: {
        date: moment(Date.now()).format("YYYY-MM-DD"),
        shift: '',
        department: ''
        //doctor?
      },
      shift_options: [
        { label: '7h - 8h', value: 1 },
        { label: '8h - 9h', value: 2 },
        { label: '9h - 10h', value: 3 },
        { label: '10h - 11h', value: 4 },
        { label: '13h - 14h', value: 5 },
        { label: '14h - 15h', value: 6 },
        { label: '15h - 16h', value: 7 },
        { label: '16h - 17h', value: 8 }
      ],
      department_options: [
        { label: 'XXX', value: 1 },
        { label: 'Nha Khoa', value: 2 },
        { label: 'Tim mạch', value: 3 },
        { label: 'Tai mũi họng', value: 4 }
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    let id = sessionStorage.getItem('id');
    // const description = this.state.desc;
    // const typeWork = this.state.type;
    const date = moment(this.state.date).format("YYYY-MM-DD");
    console.log(date);
    // const strDate = (date.getFullYear() + '-' + (date.getMonth() +  1) + '-' + date.getDate()).toString();
    // console.log(strDate);

    // const worktime = this.state.worktime;
    // const location = this.state.address;
    const shift = this.state.shift;
    const department = this.state.department;
    // const department = this.state.department_options[this.state.department.label].value;

    if (date === null) {
      return;
    }

    // current UI:
    //    select date
    //    select hour-minutes
    //    turns into unix time
    // const time_to_work = moment(date).add({
    //   hours: moment(worktime).hours(),
    //   minutes: moment(worktime).minutes(),
    // });

    // work duration, not yet in UI, default to 3hours
    // let timespan = this.state.timespan;
    // timespan = 3 * 60 * 60 * 1000;
    api
      .booking(
        date,
        shift,
        department
      )
      .then(data => {
        this.setState({
          success: true,
        });

        Notification.success({
          title: "Bạn đã đăng kí lịch khám thành công",
        });

        
      })
      .catch(err => {
        Notification.error({
          title: err,
        });
  
      });
  }

  handleChange = name => value => {
    console.log("Bạn thay đổi " + name + " thành " + value)
    this.setState({ [name]: value });
  };

  render() {
    // if (this.state.success) return <Redirect to="/users1/schedule" />;
    // if (this.state.success) alert("OK");


    return (
      <div>
        <Simplert
          showSimplert={this.state.showAlert}
          type={this.state.typeAlert}
          title={this.state.titleAlert}
          message={this.state.messageAlert}
        />

        <div style={{ width: 800, marginTop: 100, marginLeft: 100 }}>
          <Form
            className="en-US"
            model={this.state}
            labelWidth="120"
            onSubmit={this.onSubmit.bind(this)}
          >
            {/* <Form.Item label="Address">
            <Input
              value={this.state.address}
              onChange={this.handleChange('address')}
              style={{ marginLeft: 30 }}
            />
          </Form.Item> */}

            <Form.Item label="Ngày khám">
              <Layout.Col span="11">
                <Form.Item
                  prop="date"
                  labelWidth="0px"
                  style={{ marginLeft: 30 }}
                >
                  <DatePicker
                    value={this.state.date}
                    placeholder="Pick a date"
                    onChange={this.handleChange('date')}
                  />
                </Form.Item>
              </Layout.Col>
              <Layout.Col className="line" span="2">
                -
            </Layout.Col>
              {/* <Layout.Col span="11">
              <Form.Item prop="time" labelWidth="0px">
                <TimePicker
                  value={this.state.worktime}
                  selectableRange="00:00:00 - 23:59:59"
                  placeholder="Pick a time"
                  onChange={this.handleChange('worktime')}
                />
              </Form.Item>
            </Layout.Col> */}
            </Form.Item>

            <Form.Item label="Khung giờ">
              <Select
                onChange={this.handleChange('shift')}
                value={this.state.shift}
                style={{ marginLeft: 30 }}
                placeholder="Vui lòng chọn khung giờ khám"
              >
                {this.state.shift_options.map(el => {
                  return (
                    <Select.Option
                      key={el.label}
                      label={el.label}
                      value={el.value}
                    />
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item label="Chuyên Khoa">
              <Select
                onChange={this.handleChange('department')}
                value={this.state.department}
                style={{ marginLeft: 30 }}
                placeholder="Vui lòng chọn chuyên khoa"
              >
                {this.state.department_options.map(el => {
                  return (
                    <Select.Option
                      key={el.label}
                      label={el.label}
                      value={el.value}
                    />
                  );
                })}
              </Select>
            </Form.Item>
            {/* 

          <Form.Item label="Activity type">
            <Checkbox.Group
              value={this.state.type}
              onChange={this.handleChange('type')}
            >
              <Checkbox
                label="Cham soc tre"
                name="type"
                style={{ marginRight: 250, marginLeft: 30 }}
              />
              <Checkbox
                label="Cham soc nguoi gia"
                name="type"
                style={{ marginLeft: 0 }}
              />
              <br />
              <Checkbox
                label="Quet don nha cua"
                name="type"
                style={{ marginRight: 250, marginLeft: 30 }}
              />
              <Checkbox
                label="Sua chua cac thiet bi"
                name="type"
                style={{ marginLeft: '-33px' }}
              />
            </Checkbox.Group>
          </Form.Item>

          <Form.Item label="Description">
            <Input
              type="textarea"
              value={this.state.desc}
              style={{ marginLeft: 30, width: 550 }}
              onChange={this.handleChange('desc')}
            />
          </Form.Item> */}
            <Form.Item>
              <Button
                type="primary"
                nativeType="submit"
                style={{ marginLeft: 200, marginRight: 100, marginTop: 50 }}
              >
                Create
            </Button>
              <Button>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
