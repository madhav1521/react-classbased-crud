import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './Components/UserForm';
import { ThemeProvider } from '@mui/material';
import { crudTheme } from './app.theme';
import UserTable from './Components/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={crudTheme}>
          <Router>
              <div className='app-root'>
            <Routes>
                <Route path='/' element={<UserTable />} />
                <Route path='/user-form' element={<UserForm />} />
            </Routes>
              </div>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
