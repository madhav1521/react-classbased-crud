import React, { Component, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Typography, InputLabel, FormControl } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
// import { useNavigate, } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import { addUser } from '../actions/actions';
import { Dispatch } from '@reduxjs/toolkit';
import { editUser, userActions } from '../Store/UserSlice';
// import { editContent } from '../Store/UserSlice';
import { withRouter } from './withRouter';
// import  editUser  from '../actions/actions';
import { Navigate } from 'react-router-dom';


interface UserFormProps {
  addUser: (userData: FormState) => void;
  navigate: any;
  editUser: (userEdit: any) => void;
}

interface FormState {
  id:string | number;
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  status: string;
  // users?: string;
  // userId?: string;
}
type UserValues = keyof FormState;
const initialValues: FormState = {
  id:'',
  firstName: '',
  lastName: '',
  number: '',
  email: '',
  status: 'Inactive',
};
class UserForm extends Component<UserFormProps, FormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {
      id:Math.random().toFixed(2),
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      status: '',
      // userId: '',
      // users: ''
    };
  }

  handleEditContent = (contentId: any, updatedData: any) => {
    // Dispatch the editContent action with the contentId and updatedData
    this.props.editUser(contentId);
  };


  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
  };
  handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    this.setState({ [name as string]: value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = () => {
    // const { dispatch }: any = this.props;
    // const { contentId, updatedData } = this.props;
    const { firstName, lastName, number, email, status,id } = this.state;
    const newUser = {
      id,
      firstName,
      lastName,
      number,
      email,
      status,
    };
    console.log('id', id)

    this.setState({
      id:0,
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      status: '',
    })
    this.props.addUser(newUser);
    // this.props.editContent(contentId, updatedData);

    this.props.navigate('/')
  };
  handleCancel = () => {
    this.props.navigate('/')
  }

  render() {

    const { firstName, lastName, number, email, status } = this.state;
    // const { userId, users } = this.props;
    // const user = users.find((user: { id: any; }) => user.id === userId);
    return (
      <div className='user-form'>
        <form onSubmit={this.handleSubmit} className='form'>
          <h2>Add new user</h2>
          <div className='form-fields'>
            <label htmlFor='fname' >First Name</label>
            <TextField
              label="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            // defaultValue={user.firstName}
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='lname' >Last Name</label>
            <TextField
              label="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            // defaultValue={user.lastName}
            />
          </div>
          <div className='form-fields number-field'>
            <label htmlFor='contact' >Contact Number</label>
            <div className='number-with-code'>
              <Typography component='span' className='in-number' >+91</Typography>
              <TextField
                className='input-number'
                type='number'
                label="Number"
                name="number"
                // defaultValue={user.number}
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-fields'>
            <label htmlFor='email' >E-mail</label>
            <TextField
              label="Email"
              name="email"
              // defaultValue={user.email}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='status' >Status</label>
            <FormControl fullWidth className='form-fields'>
              <InputLabel id="status-id">Status</InputLabel>
              <Select
                labelId="status-id"
                id="demo-simple-select"
                label="Status"
                name="status"
                // defaultValue={user.status}
                value={this.state.status}
                onChange={this.handleSelectChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='form-fields-button'>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button type="button" variant="contained" color="error" onClick={this.handleCancel}>
            Cancel
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state: { userReducer: { users: any; }; reducer: { contents: any; }; }) => ({
//   users: state.userReducer.users,
//   // contents: state.reducer.users
// });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUser: (newData: FormState) => dispatch(userActions.addUser(newData)),
  editUser: (contentId: any, updatedData: any) => dispatch(editUser(contentId))
})

// // const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)(withRouter(UserForm));


// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserForm));



// const mapDispatchToProps = {
//   editContent
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserForm);