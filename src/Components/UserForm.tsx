import React, { Component, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
// import { userActions } from '../Store/UserSlice';
// import { useNavigate, } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import { addUser } from '../actions/actions';
import { Dispatch } from '@reduxjs/toolkit';
// const history = createBrowserHistory();
// const { dispatch }:any = this.props;
import { userActions } from '../Store/UserSlice';
import { withRouter } from './withRouter';


interface FormState {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  status: string;
}

interface UserFormProps {
  addUser: (userData: FormState) => void;
  navigate : any
}

class UserForm extends Component<UserFormProps, FormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      number: '',
      email: '',
      status: ''
    };
  }


  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
  };
  handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    this.setState({ [name as string]: value } as Pick<FormState, keyof FormState>);
  };


  handleSubmit = (event: FormEvent) => {

    event.preventDefault();
    const { dispatch }: any = this.props;
    const { firstname, lastname, number, email, status } = this.state;

    this.props.addUser({ firstname, lastname, number, email, status });
    // dispatch(userActions.addUser({
    // '123', firstname, lastname, number, email, status
    // }))\: 
    // dispatch(userActions.addUser({ id: 'qwe', firstName: firstname, lastName: lastname, email: email, status: status }))
    // dispatchAddUser({ id: 'qwe', firstName: firstname, lastName: lastname, email, status });

    this.setState({
      firstname: '',
      lastname: '',
      number: '',
      email: '',
      status: '',
    })
    // console.log('state: ', this.state);
    // console.log('setState:',this.setState.bind(this.state));
    this.props.navigate('/')
    // const navigate = useNavigate();
    // navigate('/');
    // history.push('/')
  };


  render() {
    // const { firstname, lastname, number, email, status } = this.state;

    return (
      <div className='user-form'>
        <form onSubmit={this.handleSubmit} className='form'>
          <h2>Add new user</h2>
          <div className='form-fields'>
            <label htmlFor='fname' >First Name</label>
            <TextField
              label="First Name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='lname' >Last Name</label>
            <TextField
              label="Last Name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-fields number-field'>
            <label htmlFor='contact' >Contact Number</label>
            <Typography component='span' className='in-number' >+91</Typography>
            <TextField
              className='input-number'
              type='number'
              label="Number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='email' >E-mail</label>
            <TextField
              label="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='status' >Status</label>
            <Select
              label="Status"
              name="status"
              value={this.state.status}
              onChange={this.handleSelectChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch: any) => ({
//   addUser: (userData: FormState) => dispatch(addUser(userData)),
// });

// const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => {
//   return {
//     dispatchAddUser: (user: any) => dispatch(addUser(user)),
//   };
// };

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUser: (newData: FormState) => dispatch(userActions.addUser(newData))
})

// // const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)(withRouter(UserForm));

// export default UserForm;

