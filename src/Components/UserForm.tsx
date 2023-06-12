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
// import { editContent } from '../Store/UserSlice';
import { withRouter } from './withRouter';
// import  editUser  from '../actions/actions';


interface FormState {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  status: string;
  // updatedData:string;
  // contentId:string;
}

interface UserFormProps {
  addUser: (userData: FormState) => void;
  navigate : any;
  editContent:(contentId: any, updatedData: any)=>void;
}

class UserForm extends Component<UserFormProps, FormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      status: '',
      // contentId:'',
      // updatedData:''
    };
  }
  
  handleEditContent = (contentId: any, updatedData: any) => {
    // Dispatch the editContent action with the contentId and updatedData
    this.props.editContent(contentId, updatedData);
  };


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
    // const { contentId, updatedData } = this.props;
    const { firstName, lastName, number, email, status } = this.state;

    this.props.addUser({firstName, lastName, number, email, status});
    // this.props.editContent(contentId, updatedData);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      status: '',
    })
    this.props.navigate('/')
  };


  render() {
    // const { users,contents } = this.state;

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
            />
          </div>
          <div className='form-fields'>
            <label htmlFor='lname' >Last Name</label>
            <TextField
              label="Last Name"
              name="lastName"
              value={this.state.lastName}
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
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
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

// const mapStateToProps = (state: { userReducer: { users: any; }; reducer: { contents: any; }; }) => ({
//   users: state.userReducer.users,
//   // contents: state.reducer.users
// });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUser: (newData: FormState) => dispatch(userActions.addUser(newData)),
  editContent: (contentId: any, updatedData: any) => dispatch(editContent(contentId))
})

// // const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)(withRouter(UserForm));

function editContent(contentId: any): any {
  throw new Error('Function not implemented.');
}
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserForm));



// const mapDispatchToProps = {
//   editContent
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserForm);