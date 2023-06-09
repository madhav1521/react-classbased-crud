// import React, { Component } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Box, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { userActions } from '../Store/UserSlice';
// import { SelectChangeEvent } from '@mui/material';
// import { addUser } from '../actions/actions';

// // enum SortOrder {
// //     ASCENDING = 'ascending',
// //     DESCENDING = 'descending',
// // }
// type SortOrder = 'asc' | 'desc';

// interface UserTableProps {
//     data: Array<{
//         id: number;
//         firstName: string;
//         lastName: string;
//         email: string;
//         number: string;
//         status: string;
//         [key: string]: any;
//     }>;
// }

// interface UserTableState {
//     selectedRows: number[];
//     selectAll: boolean;
//     searchQuery: string;
//     sortField: any;
//     sortOrder: SortOrder;
// }
// class UserTable extends Component<UserTableProps, UserTableState> {
//     constructor(props: UserTableProps) {
//         super(props);
//         this.state = {
//             selectedRows: [],
//             selectAll: false,
//             searchQuery: '',
//             sortField: 'firstName',
//             sortOrder: 'asc',
//         };
//     }

//     handleSelectAll = () => {
//         const { selectAll } = this.state;
//         const { data } = this.props;

//         if (selectAll) {
//             this.setState({ selectedRows: [], selectAll: false });
//         } else {
//             const selectedIds = data.map((row) => row.id);
//             this.setState({ selectedRows: selectedIds, selectAll: true });
//             console.log('data', data);
//         }
//     };

//     handleRowSelect = (rowId: number) => {
//         const { selectedRows } = this.state;

//         if (selectedRows.includes(rowId)) {
//             const updatedSelection = selectedRows.filter((id) => id !== rowId);
//             this.setState({ selectedRows: updatedSelection });
//         } else {
//             this.setState((prevState) => ({
//                 selectedRows: [...prevState.selectedRows, rowId],
//             }));
//         }
//     };

//     handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const searchQuery = event.target.value;
//         this.setState({ searchQuery });
//     };

//     handleSortFieldChange = (event: SelectChangeEvent<any>) => {
//         const sortField = event.target.value as string;
//         this.setState({ sortField });
//       };
      
//       handleSortOrderChange = (event: SelectChangeEvent<any>) => {
//         const sortOrder = event.target.value as SortOrder;
//         this.setState({ sortOrder });
//       };



//     render() {
//         const { data } = this.props;
//         console.log(data);
//         const { selectedRows, selectAll, searchQuery, sortField, sortOrder } = this.state;

//         const filteredData = data.filter((row) => {
//             const fullName = `${row.firstName} ${row.lastName}`;
//             const lowercaseQuery = searchQuery.toLowerCase();
//             return (
//                 fullName.toLowerCase().includes(lowercaseQuery) ||
//                 row.email.toLowerCase().includes(lowercaseQuery) ||
//                 row.number.includes(searchQuery)
//             );
//         });

//         const sortedData = filteredData.sort((a, b) => {
//             const fieldA = a[sortField];
//             const fieldB = b[sortField];
        
//             if (sortOrder === 'asc') {
//                 if (fieldA < fieldB) return -1;
//                 if (fieldA > fieldB) return 1;
//                 return 0;
//             } else {
//                 if (fieldA > fieldB) return -1;
//                 if (fieldA < fieldB) return 1;
//                 return 0;
//             }
//         });   
        

//         return (
//             <React.Fragment>
//                 <div className='user-table'>
//                     <Box className='button-component'>
//                         <TextField
//                             label='Search'
//                             value={searchQuery}
//                             onChange={this.handleSearchChange}
//                             style={{ marginBottom: '1rem', marginRight: '1rem' }}
//                         />
//                         <Select
//                             value={sortField}
//                             onChange={this.handleSortFieldChange}
//                             style={{ marginBottom: '1rem', marginRight: '1rem' }}
//                         >
//                             <MenuItem value="">Sort Field</MenuItem>
//                             <MenuItem value="firstName">First Name</MenuItem>
//                             <MenuItem value="lastName">Last Name</MenuItem>
//                             <MenuItem value="email">Email</MenuItem>
//                             <MenuItem value="number">Number</MenuItem>
//                         </Select>
//                         <Select
//                             value={sortOrder}
//                             onChange={this.handleSortOrderChange}
//                             style={{ marginBottom: '1rem' }}
//                         >
//                             <MenuItem value="asc">Ascending</MenuItem>
//                             <MenuItem value="desc">Descending</MenuItem>
//                         </Select>
//                         <Button component={Link} to="/user-form" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
//                             + Create New User
//                         </Button>
//                     </Box>
//                     <TableContainer component={Paper}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>
//                                         <Checkbox
//                                             checked={selectAll}
//                                             onChange={this.handleSelectAll}
//                                         />
//                                     </TableCell>
//                                     <TableCell>First Name</TableCell>
//                                     <TableCell>Last Name</TableCell>
//                                     <TableCell>Email</TableCell>
//                                     <TableCell>Number</TableCell>
//                                     <TableCell>Status</TableCell>
//                                     <TableCell>Action</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {sortedData.map((user) => (
//                                     <TableRow key={user.id}>
//                                         <TableCell>
//                                             <Checkbox
//                                                 checked={selectedRows.includes(user.id)}
//                                                 onChange={() => this.handleRowSelect(user.id)}
//                                             />
//                                         </TableCell>
//                                         <TableCell>{user.firstName}</TableCell>
//                                         <TableCell>{user.lastName}</TableCell>
//                                         <TableCell>{user.email}</TableCell>
//                                         <TableCell>{user.number}</TableCell>
//                                         <TableCell>{user.status}</TableCell>
//                                         <TableCell>
//                                             <Link to={`/edit/${user.id}`}>Edit</Link>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                                 <TableRow>
//                                     <TableCell>
//                                         <Checkbox
//                                         />
//                                     </TableCell>
//                                     <TableCell>Madhav</TableCell>
//                                     <TableCell>Jajal</TableCell>
//                                     <TableCell>madhav@gmail.com</TableCell>
//                                     <TableCell>9408866398</TableCell>
//                                     <TableCell>Active</TableCell>
//                                     <TableCell>
//                                         <Link to={`/edit/1`}>Edit</Link>
//                                     </TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell>
//                                         <Checkbox
//                                         />
//                                     </TableCell>
//                                     <TableCell>uttam</TableCell>
//                                     <TableCell>galoriya</TableCell>
//                                     <TableCell>uttam@gmail.com</TableCell>
//                                     <TableCell>9445487798</TableCell>
//                                     <TableCell>Active</TableCell>
//                                     <TableCell>
//                                         <Link to={`/edit/2`}>Edit</Link>
//                                     </TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell>
//                                         <Checkbox
//                                         />
//                                     </TableCell>
//                                     <TableCell>Yash</TableCell>
//                                     <TableCell>Donda</TableCell>
//                                     <TableCell>Yash@gmail.com</TableCell>
//                                     <TableCell>9423154678</TableCell>
//                                     <TableCell>InActive</TableCell>
//                                     <TableCell>
//                                         <Link to={`/edit/3`}>Edit</Link>
//                                     </TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// const mapStateToProps = (state: { user: { users: any; }; }) => ({
//     data: state.user.users, // Assuming the user data is stored in the `users` field of the `user` slice
// });

// const mapDispatchToProps = (dispatch: any) => ({
//     addUser: (user: any) => dispatch(addUser(user)),
// });



// // export default connect(mapStateToProps)(UserTable);
// export default connect(mapStateToProps, mapDispatchToProps)(UserTable);


import React from 'react'

function Home() {
  return (
    <div>
      
    </div>
  )
}

export default Home
