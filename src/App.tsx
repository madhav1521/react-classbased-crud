
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './Components/UserForm';
import UserTable from './Components/Home';

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
      <Router>
        <div>
          <Routes >
            <Route
              path="/"
              element={<UserTable data={[]} />}
            />
            <Route
              path="/user-form"
              element={<UserForm />}
            />
          </Routes>
        </div>
      </Router >
    );
  }
}

export default App;

