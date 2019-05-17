import React from 'react';
import { Table, Button, Notification, Loading, MessageBox, Popover } from 'element-react';
import * as moment from 'moment';
import Simplert from 'react-simplert'

// import Web3 from 'web3';

import api from './../api';
// import Work from '../contracts/Work.json';

export default class AcceptDoctor extends React.Component {
  constructor(props) {
    super(props);
    let role = sessionStorage.getItem('role');
    this.state = {
    
      showAlert: false,
      titleAlert: '',
      messageAlert: '',
      typeAlert: '',

      columns: [
        {
          label: 'Tên',
          prop: 'username',
          sortable: true
        },
        {
          label: 'Khoa',
          prop: 'department',
          sortable: false,
        },
        {
          label: 'Phòng',
          prop: 'room',
          sortable: false,
        },
        {
          label: 'Phê duyệt',
          prop: '',
          sortable: false,
          render: (row, column, index) =>
            (
              <div>
                <button type="button" className="btn btn-outline-success" style={{ margin: 4 }} onClick={this.acceptDoctor.bind(this, index)}>Chấp nhận</button>
                <button type="button" className="btn btn-outline-danger" style={{ margin: 4 }} onClick={this.deteteUser.bind(this, index)}>Xóa bỏ</button>
              </div>
            )

        },
      ],
      data: [],
    };

  }

  deteteUser(index) {
    const idUser = this.state.data[index]._id;
    //dddd
    api
      .deleteUser(idUser)
      .then(data => {
        if (data) {
          this.componentWillMount();
          
          this.setState({
            showAlert: true,
            titleAlert: 'Thành công',
            messageAlert: 'Bạn đã hủy bỏ bác sĩ thành công',
            typeAlert: 'success'
          })

        }
        else alert("Con khỉ khô")
      })
      .catch(err => {
        alert("Error occur");
      })
  }

  acceptDoctor(index) {
    const idUser = this.state.data[index]._id;
    //dddd
    api
      .acceptDoctor(idUser)
      .then(data => {
        if (data) {
          this.componentWillMount();

          this.setState({
            showAlert: true,
            titleAlert: 'Thành công',
            messageAlert: 'Bạn đã chấp nhận bác sĩ thành công',
            typeAlert: 'success'
          })
        }
        else alert("Con khỉ khô")
      })
      .catch(err => {
        alert("Error occur");
      })
  }

  componentWillMount() {
    api
      .getAllDoctorsNotApprove()
      .then(data => {

        // alert(JSON.stringify(data));
        data.map(d => {
          d.username = d.username
          d.department = d.department;
          d.room = d.room;
        });

        this.setState({ data });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    
    return (
      <div>
        <Simplert
            showSimplert={this.state.showAlert}
            type={this.state.typeAlert}
            title={this.state.titleAlert}
            message={this.state.messageAlert}
        />

        <Table
          columns={this.state.columns}
          data={this.state.data}
        />

      </div>
    );
  }
}
