import React, { Component, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { userActions } from '../Store/UserSlice';
import { useNavigate, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { addUser } from '../actions/actions';

// const history = createBrowserHistory();
// const dispatch = useDispatch();
// const { dispatch }:any = this.props;                


interface FormState {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  status: string;
}

interface UserFormProps {
  addUser: (userData: FormState) => void;
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
    const { firstname, lastname, number, email, status } = this.state;

    addUser({ firstname, lastname, number, email, status });
    // dispatch(userActions.addUser)
    
    this.setState({
      firstname: '',
      lastname: '',
      number: '',
      email: '',
      status: '',
    })
    console.log('state: ',this.state);
    // console.log('setState:',this.setState.bind(this.state));
    
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

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (userData: FormState) => dispatch(addUser(userData)),
});

// const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)((UserForm));

