import React, { ChangeEvent, Component, MouseEventHandler, useCallback } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Box, TextField, FormControl, InputLabel, MenuItem, Select, ListItemIcon, Menu, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { ConnectedProps, connect } from 'react-redux';
import { userActions } from '../Store/UserSlice';
import { SelectChangeEvent } from '@mui/material';
// import { addUser } from '../actions/actions';
// import {MoreVertIcon} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
// import debounce from 'lodash.debounce';
// import _ from 'lodash';
import { DebounceInput } from 'react-debounce-input';
import PaginationTable from './PaginationTable';
import { RootState } from '../Store/Store';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type SortOrder = 'asc' | 'desc';

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

interface UserTableProps extends PropsFromRedux {
    data: {
        [key: string]: any;
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        number: string;
        status: string;
    }[];
}
interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    status: string;
}

type SortField = keyof User

interface UserTableState {
    selectedRows: number[];
    selectAll: boolean;
    searchQuery: string;
    sortField: string;
    sortOrder: SortOrder;
    filterStatus: string | null;
    anchorEl: HTMLElement | null;
    data: any;
    currentPage: number;
    perPage: number;
    checkedItems: any;
}
class UserTable extends Component<UserTableProps, UserTableState> {
    constructor(props: UserTableProps) {
        super(props);
        this.state = {
            selectedRows: [] as number[],
            selectAll: false,
            searchQuery: '',
            sortField: 'firstName',
            sortOrder: 'asc',
            filterStatus: null,
            anchorEl: null,
            data: [] as any,
            currentPage: 1,
            perPage: 5,
            checkedItems: {},
        };
        const data = [...this.props.userData];

        // this.handleSelectAll = this.handleSelectAll.bind(this);
        // this.handleRowSelect = this.handleRowSelect.bind(this);


    }


    // handleSelectAll = () => {
    //     const { selectAll } = this.state;
    //     const data = [...this.props.userData];
    //     // const { data } = this.props;

    //     if (selectAll) {
    //         this.setState({ selectedRows: [], selectAll: false });
    //     } else {
    //         const selectedIds = data.map((row) => row.id);
    //         this.setState({ selectedRows: selectedIds, selectAll: true });
    //         console.log('data', data);
    //         console.log('selectedIds', selectedIds);
    //     }
    // };

    // handleRowSelect = (rowId: number) => {
    //     const { selectedRows } = this.state;

    //     if (selectedRows.includes(rowId)) {
    //         const updatedSelection = selectedRows.filter((id) => id !== rowId);
    //         this.setState({ selectedRows: updatedSelection });
    //     } else {
    //         this.setState((prevState) => ({
    //             selectedRows: [...prevState.selectedRows, rowId],
    //         }));
    //     }
    // };

    // handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { checked } = event.target;
    //     this.setState({
    //       selectAll: checked,
    //       selectedRows: checked ? this.state.data.map((user: { id: any; }) => Number(user.id)) : []
    //     });
    //   };

    //   handleRowSelect = (event:ChangeEvent<HTMLInputElement>, id: number) => {
    //     const { checked } = event.target;
    //     this.setState((prevState) => {
    //       let selectedRows = [...prevState.selectedRows];
    //       if (checked) {
    //         selectedRows.push(id);
    //       } else {
    //         selectedRows = selectedRows.filter(rowId => rowId !== id);
    //       }
    //       return {
    //         selectAll: selectedRows.length === prevState.data.length,
    //         selectedRows
    //       };
    //     });
    //   };

    handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        const selectedRows = checked ? this.props.userData.map((user: { id: any; }) => Number(user.id)) : [];
        this.setState({
            selectAll: checked,
            selectedRows: selectedRows,
        });
    };

    handleRowSelect = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        const { checked } = event.target;
        this.setState((prevState) => {
            let selectedRows = [...prevState.selectedRows];
            if (checked) {
                selectedRows.push(id);
            } else {
                selectedRows = selectedRows.filter(rowId => rowId !== id);
            }
            return {
                selectAll: selectedRows.length === this.props.userData.length,
                selectedRows
            };
        });
    };



    handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery });

    };

    handleSortFieldChange = (event: SelectChangeEvent<any>) => {
        const sortField = event.target.value as string;
        this.setState({ sortField });
    };

    handleSortOrderChange = (event: SelectChangeEvent<any>) => {
        const sortOrder = event.target.value as SortOrder;
        this.setState({ sortOrder });
    };

    handleFilterStatusChange = (status: string | null) => {
        this.setState({ filterStatus: status, anchorEl: null });
    };

    handleClickMenuButton = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleCloseMenu = () => {
        this.setState({ anchorEl: null });
    };

    // handleDelete = (index: any) => {
    //     const rows = [...this.props.userData];
    //     const updatedData = rows.filter((index, item: any) => item.id !== index);
    //     rows.splice(index, 1);
    //     alert(`are you sure want to delete the user? `)
    //     this.setState({ data: updatedData });
    //     console.log('delete:', updatedData)
    //     console.log('deleteData:', rows)
    // };
    // handleDelete = (id: any) => {
    //     const { deleteUser } = this.props;
    //     alert('Are you sure you want to delete the user?');
    //     deleteUser(id);
    //   };
      handleDelete = (id: number) => {
        const { deleteUser } = this.props;
        const confirmDelete = window.confirm('Are you sure you want to delete the user?');
        
        if (confirmDelete) {
          deleteUser(id);
        }
      };
    handlePageChange = (page: number) => {
        this.setState({ currentPage: page });
    };
    handlePerPageChange = (event: { target: { value: string; }; }) => {
        const perPage = parseInt(event.target.value);
        this.setState({ perPage });
    };

    handleToggleAll = (event: { target: { checked: any; }; }) => {
        const { checked } = event.target;
        const { data } = this.props; // Assuming you have an array of data for the table
        const checkedItems = [{}];
    
        if (!checked) {
          // Set all checkboxes to checked state
          data.forEach((item) => {
            checkedItems[item.id] = true;
          });
        }
    
        this.setState({ checkedItems });
      };
    
      handleToggleItem = (event: any, itemId: string | number) => {
        const { checkedItems } = this.state;
    
        this.setState((prevState) => ({
          checkedItems: {
            ...prevState.checkedItems,
            [itemId]: !checkedItems[itemId],
          },
        }));
      };
    render() {
        const { userData } = this.props;
        console.log("userData");
        console.log(userData);

        const { selectedRows, selectAll, searchQuery, sortField, sortOrder, filterStatus, anchorEl, currentPage, perPage, checkedItems } = this.state;

        const data = [...this.props.userData];
        console.log('actual data coming', data);

        // const filterFields = ["firstName", "lastName", "email", "number"];
        const filteredData = data.filter((row: any) => {
            const fullName = `${row.firstName} ${row.lastName}`;
            const lowercaseQuery = searchQuery.toLowerCase();
            return (
                fullName.toLowerCase().includes(lowercaseQuery) ||
                row.email.toLowerCase().includes(lowercaseQuery) ||
                row.number.includes(lowercaseQuery) ||
                row.status.toLowerCase().includes(lowercaseQuery)
            );
        });

        // Sort filtered data
        const sortedData = filteredData.sort((a, b) => {
            
            const fieldA: any = a[sortField as SortField].toLowerCase();
            const fieldB: any = b[sortField as SortField].toLowerCase();

            if (fieldA < fieldB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (fieldA > fieldB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });

        // Filter sorted data by status
        const filteredByStatusData = filterStatus
            ? sortedData.filter((user: { status: string }) => {
                return (
                    (filterStatus === 'Active' && user.status === 'Active') ||
                    (filterStatus === 'Inactive' && user.status === 'Inactive')
                );
            })
            : sortedData;

        const totalPages = Math.ceil(filteredByStatusData.length / perPage);
        const adjustedCurrentPage = currentPage > totalPages ? totalPages : currentPage;
        const startIndex = (adjustedCurrentPage - 1) * perPage;
        const endIndex = startIndex + perPage;

        const paginationRange = `${startIndex + 1} - ${Math.min(endIndex, filteredByStatusData.length)} of ${filteredByStatusData.length}`;

        // Get paginated data
        const filteredAndPaginatedData = filteredByStatusData.slice(startIndex, endIndex);


        return (
            <React.Fragment>
                <div className='user-table'>
                    <Box className='button-component'>
                        {/* <TextField
                            label='Search'
                            value={searchQuery}
                            onChange={this.handleSearchChange}
                            placeholder='Search users...'
                        /> */}
                        <DebounceInput
                            minLength={1}
                            value={searchQuery}
                            className="search"
                            placeholder="Search users here..."
                            debounceTimeout={1000}
                            onChange={this.handleSearchChange}
                        />
                        <FormControl className='filter-select'>
                            <InputLabel id="filter-select">Select heading</InputLabel>
                            <Select
                                labelId="filter-select"
                                id="demo-simple-select"
                                value={sortField}
                                placeholder="Select Heading"
                                label="Select heading"
                                onChange={this.handleSortFieldChange}
                            >
                                <MenuItem value="Sort Field">Sort Field</MenuItem>
                                <MenuItem value="firstName">First Name</MenuItem>
                                <MenuItem value="lastName">Last Name</MenuItem>
                                <MenuItem value="email">Email</MenuItem>
                                <MenuItem value="number">Number</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className='sort-select'>
                            <InputLabel id="asc-desc">Sort by..</InputLabel>
                            <Select
                                labelId="asc-desc"
                                id="demo-simple-select"
                                value={sortOrder}
                                label="Sort by.."
                                onChange={this.handleSortOrderChange}
                            >
                                <MenuItem value="asc">Ascending</MenuItem>
                                <MenuItem value="desc">Descending</MenuItem>
                            </Select>
                        </FormControl>

                        <IconButton
                            color='primary'
                            aria-controls='filter-menu'
                            aria-haspopup='true'
                            onClick={this.handleClickMenuButton}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <Menu
                            id='filter-menu'
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={this.handleCloseMenu}
                        >
                            <MenuItem onClick={() => this.handleFilterStatusChange(null)}>
                                <ListItemIcon>
                                    <Checkbox checked={filterStatus === null} />
                                </ListItemIcon>
                                <ListItemText primary='All' />
                            </MenuItem>
                            <MenuItem onClick={() => this.handleFilterStatusChange('Active')}>
                                <ListItemIcon>
                                    <Checkbox checked={filterStatus === 'Active'} />
                                </ListItemIcon>
                                <ListItemText primary='Active' />
                            </MenuItem>
                            <MenuItem onClick={() => this.handleFilterStatusChange('Inactive')}>
                                <ListItemIcon>
                                    <Checkbox checked={filterStatus === 'Inactive'} />
                                </ListItemIcon>
                                <ListItemText primary='Inactive' />
                            </MenuItem>
                        </Menu>
                        <Button component={Link} to="/user-form" className='newuser-btn ' variant="contained" color="primary">
                            + Create New User
                        </Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox
                                            onChange={this.handleToggleAll}
                                            checked={Object.values(checkedItems).every((value) => value)}
                                          
                                        />
                                    </TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell style={{textAlign:"center"}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAndPaginatedData.length > 0 ? (
                                    filteredAndPaginatedData.map((user: any,index) => (
                                        <TableRow key={index} >
                                            <TableCell>
                                                <Checkbox
                                                    onChange={(event) => this.handleToggleItem(event, user.id)}
                                                    checked={checkedItems[user.id] || false}
                                                    />
                                            </TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.number}</TableCell>
                                            <TableCell><div className={`user-row ${user.status === 'Active' ? 'active' : 'inactive'}`}>
                                                {user.status}
                                            </div></TableCell>
                                            <TableCell style={{textAlign:"center"}}>
                                                <Button className='action-button edit'><EditIcon color='success' /></Button>
                                                <Button className='action-button delete' onClick={() => this.handleDelete(user.id)}><DeleteIcon color='error' /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} style={{ textAlign: 'center' }}>
                                            Data not found
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box className="pagination-container">
                        <p>Rows per page: </p>
                        <select value={perPage} className='rows-per-page' onChange={this.handlePerPageChange}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <div className='pagination-range'>{paginationRange}</div>
                        <Button
                            className="pagination-button"
                            id="prev-button"
                            title="Previous page"
                            aria-label="Previous page"
                            disabled={currentPage === 1}
                            onClick={() => this.handlePageChange(currentPage - 1)}
                        >
                            &lt;
                        </Button>

                        <div id="pagination-numbers" className='pagination-numbers'>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Button
                                    key={page}
                                    className={`pagination-button ${page === currentPage ? 'active pagination-active' : ''}`}
                                    onClick={() => this.handlePageChange(page)}
                                >
                                    {page}
                                </Button>
                            ))}
                        </div>

                        <Button
                            className="pagination-button"
                            id="next-button"
                            title="Next page"
                            aria-label="Next page"
                            disabled={currentPage === totalPages}
                            onClick={() => this.handlePageChange(currentPage + 1)}
                        >
                            &gt;
                        </Button>
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps = (state: { user: { users: any; }; }) => ({
//     data: state.user.users, // Assuming the user data is stored in the `users` field of the `user` slice
// });

// const mapDispatchToProps = (dispatch: any) => ({
//     addUser: (user: any) => dispatch(addUser(user)),
// });



// // export default connect(mapStateToProps)(UserTable);
// export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
const mapStateToProps = (state: RootState) => ({
    userData: state.user.users,
    deleteUser: userActions.deleteUser
})
const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;
const ConnectedComponent = connector(UserTable);

export default ConnectedComponent;
// type PropsFromRedux = ReturnType<typeof mapStateToProps>;
// export default connect(mapStateToProps)(UserTable);


