// UserForm.tsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User, addUser, updateUser } from '../actions/actions';
import { Link, Navigate } from 'react-router-dom';

interface UserFormProps {
  addUser: typeof addUser;
  updateUser: typeof updateUser;
}

interface UserFormState {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  status: string;
}

class UserForm extends Component<UserFormProps, UserFormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      number: 0,
      status: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<UserFormState, keyof UserFormState>);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, firstName, lastName, email, number, status } = this.state;
    const user = { id, firstName, lastName, email, number, status };

    if (id === 0) {
      this.props.addUser(user);
    } else {
      this.props.updateUser(user);
    }

    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      number: 0,
      status: '',
    });


    const newUser: User = {
      id: Date.now(),
      firstName:'',
      lastName:'',
      email:'',
      number:0,
      status:'',
    };
    this.props.addUser(newUser);
    this.setState({
      firstName: 'ssssss',
      lastName: 'gdfg',
      email: 'fdgfd',
      number: 0,
      status: 'fgdf',
    });
    console.log('add list ', addUser)
    console.log('new list ', newUser)
    // Navigate({ to: '/' })
  };

  render() {
    const { firstName, lastName, email, number, status } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name" required />
        <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
        <input type="number" name="number" value={number} onChange={this.handleChange} placeholder="Number" required />
        <select name="status" value={status} onChange={this.handleChange} required>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <Link to='/' >
          <button type="submit">Save</button>
        </Link>
      </form>
    );
  }
}

export default connect(null, { addUser, updateUser })(UserForm);
