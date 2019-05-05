import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import SliderBar from './Slidebar';
//import Recruitment from 'components/Hirer/recruitment';
//import ChooseHelper from 'components/Hirer/chooseHelper';

import Profile from './../Profile';
import ChangePassword from './../ChangePassword';
import Schedule from './../Schedule';
import Booking from './../Booking';

require('./../../css/App.css');

export default class HelperPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div>
        <Layout.Row className="tac">
          <Layout.Col span={4}>
            <SliderBar />
          </Layout.Col>
          <Layout.Col span={20}>
            <div className="grid-content bg-purple-light">
            <Switch>
              <Route exact
                  path ="/patient"
                  component = {Profile}
                //   render = {(props) =>
                //     <Profile {...props}
                //     header={SliderBar}

                //   render = {(props) =>
                //   <Profile {...props}
                  //header={SliderBar}
                  />}
                />
                <Route
                  path="/patient/reset_password"
                  component={ChangePassword}
                  header={SliderBar}
                />
                <Route
                  path ="/patient/schedule"
                  component={Schedule}
                //   render = {(props) =>
                //   <Schedule {...props}
                  header={SliderBar}
                  />}
                />


                <Route
                  path ="/patient/recruitment"
                  component={Booking}
                //   render = {(props) =>
                //   <Recruitment {...props}
                  header={SliderBar}
                  />}
                />

                {/* <Route
                  path="/users1/chooseHelper"
                  component={ChooseHelper}
                  header={SliderBar}
                /> */}
              </Switch>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}