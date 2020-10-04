import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";
import Users from "./users";

export class Userlist extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        Here is the list of users
        <Users users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(Userlist);
