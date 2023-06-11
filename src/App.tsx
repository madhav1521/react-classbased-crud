// import React, { Component, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserForm from './Components/UserForm';
// import { ThemeProvider } from '@mui/material';
// import { crudTheme } from './app.theme';
// import UserTable from './Components/Home';
// import { connect, useSelector } from 'react-redux';
// // import { addUser } from './actions/actions';

// interface FormState {
//   firstname: string;
//   lastname: string;
//   number: string;
//   email: string;
//   status: string;
// }

// interface AppState {
//   userData: FormState[];
// }
// class App extends Component {
//   // addUser: any;
//   state:AppState = {
//     userData: [] ,
//   };

//   addUser = (userData: FormState) => {
//     this.setState((prevState) => ({
//       userData: [...prevState.userData, userData],
//     }));
//   };
//   render() {
//     const { userData } = this.state;
//     return (
//       <React.Fragment>
//         <ThemeProvider theme={crudTheme}>
//           {/* <Router>
//               <div className='app-root'>
//             <Routes>
//                 <Route path='/' element={<UserTable />} />
//                 <Route path='/user-form' element={<UserForm />} />
//             </Routes>
//               </div>
//           </Router> */}

//           <div>
//             <UserForm addUser={this.addUser} />
//             <UserTable data={userData} />
//           </div>
//         </ThemeProvider>
//       </React.Fragment>
//     );
//   }
// }z

// const mapStateToProps = (state: { user: { initialState: any; }; }) => ({
//   showTable: state.user.initialState,
// });

// export default connect(mapStateToProps)(App);


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './Components/UserForm';
import UserTable from './Components/Home';

interface FormState {
  firstname: string;
  lastname: string;
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

