import React, { Component } from "react";
import "./header.css";

const API = "https://randomuser.me/api/";
// const DEFAULT_QUERY = "redux";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      users: []
    };
  }
  Onclick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  componentDidMount() {
    fetch(API, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
      .catch(err => console.log("my err is ", err));
  }
  onRefresh = () => {
    window.location.reload();
  };
  forceUpdateState = () => {
    this.forceUpdate();
  };

  render() {
    const userslist = this.state.users.map(user => (
      <div className="card" key={user.id}>
        <div className="row no-gutters">
          <div className="photo">
            <img src={user.picture.large} className="image" alt="icon" />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <i className="fa fa-user" />
                  Firstname
                </th>
                <th>
                  <i className="fa fa-user" />
                  Lastname
                </th>
                <th>
                  <i className="fa fa-envelope" />
                  Email
                </th>
                <th>
                  <i className="fa fa-heartbeat" aria-hidden="true" />
                  Date of Birth
                </th>
                <th>
                  <i className="fa fa-address-card-o" />
                  Address
                </th>
                <th>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.dob.date}</td>
                <td>{user.location.city}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ));
    return (
      <div className="main">
        <h1>RANDOM USER GENERATOR</h1>
        <div>{userslist}</div>
        <button onClick={this.onRefresh}>Update Users</button>
        <a href="/register">Register</a>
        <div style={{ color: "white" }}>
          <h2>Example to genarate random number</h2>
          <h3>Random Number:{Math.random()}</h3>
          <button onClick={this.forceUpdateState}>Force Update</button>
        </div>
      </div>
    );
  }
}
