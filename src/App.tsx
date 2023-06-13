
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './Components/UserForm';
import UserTable from './Components/Home';
import { ThemeProvider } from '@mui/material';
import { crudTheme } from './app.theme';

interface FormState {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  status: string;
}

interface AppState {
  userData: FormState[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    userData: [],
  };

  addUser = (userData: FormState) => {
    this.setState((prevState) => ({
      userData: [...prevState.userData, userData],
    }));
  };

  render() {
    const { userData } = this.state;

    return (
      <ThemeProvider theme={crudTheme}>
        <Router>
          {/* <div> */}
            <Routes >
              <Route
                path="/"
                element={<UserTable data={[]} />}
              />
              <Route
                path="/add-user"
                element={<UserForm />}
              />
              <Route
                path="/edit-user/:id"
                element={<UserForm />}
              />
            </Routes>
          {/* </div> */}
        </Router >
      </ThemeProvider>
    );
  }
}

export default App;

