import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ChatView from "./components/chatView";
import NavBar from "./components/navbar";
import * as actions from "./store/actions/auth";
import Login from "./components/login";
import Signup from "./components/signup";
import Landing from "./components/landing";

class App extends Component {
  componentDidMount = () => {
    this.props.onTryAutoSignup();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar {...this.props} />
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route
            path="/chat"
            render={props => (
              <ChatView {...props} isAuth={this.props.isAuthenticated} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect from="/" exact to="/landing" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
