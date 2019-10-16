import React, { Component } from "react";
import axios from "axios";
import Footer from "./footer";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

class ChatView extends Component {
  state = {
    chat: []
  };

  componentDidMount = () => {

    this.readData();
  };

  readData = (res = "any") => {
    //console.log("here", res);
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(res => this.setState({ chat: res.data }))
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    const headers = {
      Authorization: "Bearer APIKEY"
    };

    axios
      .get(
        `https://api.dialogflow.com/v1/query?v=20150910&contexts=smalltalk&lang=en&query=${query}&sessionId=12345&timezone=America/New_York`,
        { headers: headers }
      )
      .then(response =>
        axios
          .post("http://127.0.0.1:8000/api/create/", {
            query: query,
            reply: response.data.result.fulfillment.speech
          })
          .then(res => this.readData(res))
          .catch(err => console.log(err))
      );
    event.target.elements.query.value = "";
  };

  render() {
    const { chat } = this.state;
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
    }
    return (
      <React.Fragment>
        <div
          className="container"
          style={{ width: "35%", margin: "25px auto" }}
        >
          <h1>Mr. GoogleHead </h1>
          <div className="card">
            <div className="card-body">
              {chat.map(msg => (
                <React.Fragment key={msg.id}>
                  <p
                    className="card-text"
                    style={{
                      backgroundColor: "lightgrey",
                      borderRadius: "5px",
                      marginRight: "90px"
                    }}
                  >
                    {msg.query}
                  </p>
                  <p
                    style={{
                      marginLeft: "90px",
                      backgroundColor: "skyblue",
                      borderRadius: "5px"
                    }}
                  >
                    {msg.reply}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="query"
                className="form-control"
                placeholder="Type message"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-lg btn-primary btn-block">
                Send!
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(ChatView);
