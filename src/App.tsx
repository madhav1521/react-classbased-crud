import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './Components/UserForm';
import { ThemeProvider } from '@mui/material';
import { crudTheme } from './app.theme';
// import UserTable from './Components/Home';
import { connect, useSelector } from 'react-redux';
import UserList from './Components/UserList';

class App extends Component {
  render() {
    const showTable = this.props;
    return (
      <React.Fragment>
        <ThemeProvider theme={crudTheme}>
          <Router>
              <div className='app-root'>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='/user-list' element={<UserList />} />
                <Route path='/user-form' element={<UserForm />} />
            </Routes>
              </div>
          </Router>

          {/* <div>
            <h1>User Management</h1>
            <UserForm />
            <UserList />
          </div> */}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state: { user: { initialState: any; }; }) => ({
//   showTable: state.user.initialState, // Assuming `initialState` is the desired state from the Redux store
// });

export default (App);
