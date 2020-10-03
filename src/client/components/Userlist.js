import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

export class Userlist extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props);
  }

  renderUser() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <p>Here is the list of users</p>
        <ul>{this.renderUser}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, { fetchUsers })(Userlist);
