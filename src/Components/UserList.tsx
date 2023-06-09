// UserList.tsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User, deleteUser } from '../actions/actions';
import { UserState } from '../reducers/userReducer';

interface UserListProps {
  users: User[];
  deleteUser: typeof deleteUser;
}

class UserList extends Component<UserListProps> {
  handleDelete = (id: number) => {
    this.props.deleteUser(id);
  };

  render() {
    const { users } = this.props;

    return (
      <ul>
        <h3>list of users</h3>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email} - {user.number} - {user.status}
            <button onClick={() => this.handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: UserState) => ({
  users: state.users,
});

export default connect(mapStateToProps, { deleteUser })(UserList);
