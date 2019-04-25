import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import SliderBar from 'components/Hirer/slidebar';
import Recruitment from 'components/Hirer/recruitment';
import ChooseHelper from 'components/Hirer/chooseHelper';

import Profile from 'components/profile';
import ChangePassword from 'components/ChangePassword';
import Schedule from 'components/schedule';

require('styles/App.css');

export default class HelperPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    const {drizzle, drizzleState} = this.props;
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
                  path ="/users1"
                  render = {(props) =>
                  <Profile {...props}
                  header={SliderBar}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />
                <Route
                  path="/users1/reset_password"
                  component={ChangePassword}
                  header={SliderBar}
                />
                <Route
                  path ="/users1/schedule"
                  render = {(props) =>
                  <Schedule {...props}
                  header={SliderBar}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />
                <Route
                  path ="/users1/recruitment"
                  render = {(props) =>
                  <Recruitment {...props}
                  header={SliderBar}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />

                <Route
                  path="/users1/chooseHelper"
                  component={ChooseHelper}
                  header={SliderBar}
                />
              </Switch>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}
