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
        <p>Here is the list of users</p>
        <Users users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(Userlist);
