import React, { Component, useCallback } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Box, TextField, FormControl, InputLabel, MenuItem, Select, ListItemIcon, Menu, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../Store/UserSlice';
import { SelectChangeEvent } from '@mui/material';
import { addUser } from '../actions/actions';
// import {MoreVertIcon} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
// import debounce from 'lodash.debounce';
// import _ from 'lodash';
import { DebounceInput } from 'react-debounce-input';
import PaginationTable from './PaginationTable';

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

interface UserTableProps {
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

interface UserTableState {
    selectedRows: number[];
    selectAll: boolean;
    searchQuery: string;
    sortField: string;
    sortOrder: SortOrder;
    filterStatus: string | null;
    anchorEl: HTMLElement | null;
}
class UserTable extends Component<UserTableProps, UserTableState> {
    constructor(props: UserTableProps) {
        super(props);
        this.state = {
            selectedRows: [],
            selectAll: false,
            searchQuery: '',
            sortField: 'firstname',
            sortOrder: 'asc',
            filterStatus: null,
            anchorEl: null,
        };
    }
    

    handleSelectAll = () => {
        const { selectAll } = this.state;
        const { data } = this.props;

        if (selectAll) {
            this.setState({ selectedRows: [], selectAll: false });
        } else {
            const selectedIds = data.map((row) => row.id);
            this.setState({ selectedRows: selectedIds, selectAll: true });
            console.log('data', data);
            console.log('selectedIds', selectedIds);
        }
    };

    handleRowSelect = (rowId: number) => {
        const { selectedRows } = this.state;

        if (selectedRows.includes(rowId)) {
            const updatedSelection = selectedRows.filter((id) => id !== rowId);
            this.setState({ selectedRows: updatedSelection });
        } else {
            this.setState((prevState) => ({
                selectedRows: [...prevState.selectedRows, rowId],
            }));
        }
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



    render() {

        const { selectedRows, selectAll, searchQuery, sortField, sortOrder, filterStatus, anchorEl } = this.state;
        const dummyData = [
            {
                id: 1,
                firstName: "David",
                lastName: "Wilson",
                email: "david.wilson@example.com",
                number: "1234567890",
                status: "Active"
            },
            {
                id: 2,
                firstName: "Sophia",
                lastName: "Miller",
                email: "sophia.miller@example.com",
                number: "9876543210",
                status: "Active"
            },
            {
                id: 3,
                firstName: "Daniel",
                lastName: "Johnson",
                email: "daniel.johnson@example.com",
                number: "5555555555",
                status: "Active"
            },
            {
                id: 4,
                firstName: "Olivia",
                lastName: "Anderson",
                email: "olivia.anderson@example.com",
                number: "1111111111",
                status: "Active"
            },
            {
                id: 5,
                firstName: "James",
                lastName: "Thompson",
                email: "james.thompson@example.com",
                number: "9999999999",
                status: "Inactive"
            },
            {
                id: 6,
                firstName: "Mia",
                lastName: "Davis",
                email: "mia.davis@example.com",
                number: "7777777777",
                status: "Inactive"
            },
            {
                id: 7,
                firstName: "William",
                lastName: "Wilson",
                email: "william.wilson@example.com",
                number: "8888888888",
                status: "Inactive"
            },
            {
                id: 8,
                firstName: "Charlotte",
                lastName: "Harris",
                email: "charlotte.harris@example.com",
                number: "4444444444",
                status: "Active"
            },
            {
                id: 9,
                firstName: "Alexander",
                lastName: "Clark",
                email: "alexander.clark@example.com",
                number: "2222222222",
                status: "Active"
            },
            {
                id: 10,
                firstName: "Ava",
                lastName: "Lewis",
                email: "ava.lewis@example.com",
                number: "6666666666",
                status: "Inactive"
            },
            {
                id: 11,
                firstName: "Michael",
                lastName: "Moore",
                email: "michael.moore@example.com",
                number: "3333333333",
                status: "Active"
            },
            {
                id: 12,
                firstName: "Emily",
                lastName: "Garcia",
                email: "emily.garcia@example.com",
                number: "7777777777",
                status: "Active"
            },
            {
                id: 13,
                firstName: "Benjamin",
                lastName: "Young",
                email: "benjamin.young@example.com",
                number: "1111111111",
                status: "Inactive"
            },
            {
                id: 14,
                firstName: "Sofia",
                lastName: "Thomas",
                email: "sofia.thomas@example.com",
                number: "9999999999",
                status: "Inactive"
            },
            {
                id: 15,
                firstName: "Henry",
                lastName: "Lopez",
                email: "henry.lopez@example.com",
                number: "5555555555",
                status: "Active"
            },
            {
                id: 16,
                firstName: "Ella",
                lastName: "Allen",
                email: "ella.allen@example.com",
                number: "2222222222",
                status: "Active"
            },
            {
                id: 17,
                firstName: "Joseph",
                lastName: "Rodriguez",
                email: "joseph.rodriguez@example.com",
                number: "8888888888",
                status: "Inactive"
            },
            {
                id: 18,
                firstName: "Chloe",
                lastName: "Turner",
                email: "chloe.turner@example.com",
                number: "6666666666",
                status: "Active"
            },
            {
                id: 19,
                firstName: "Samuel",
                lastName: "Scott",
                email: "samuel.scott@example.com",
                number: "4444444444",
                status: "Active"
            },
            {
                id: 20,
                firstName: "Grace",
                lastName: "Murphy",
                email: "grace.murphy@example.com",
                number: "3333333333",
                status: "Inactive"
            },
            {
                id: 21,
                firstName: "Andrew",
                lastName: "Cook",
                email: "andrew.cook@example.com",
                number: "7777777777",
                status: "Active"
            },
            {
                id: 22,
                firstName: "Lily",
                lastName: "Baker",
                email: "lily.baker@example.com",
                number: "1111111111",
                status: "Active"
            }
        ];


        const data = [...dummyData, ...this.props.data];
        console.log(data);

        // const filterFields = ["firstName", "lastName", "email", "number"];

        const filteredData = data.filter((row) => {
            const fullName = `${row.firstName} ${row.lastName}`;
            const lowercaseQuery = searchQuery.toLowerCase();
            return (
                fullName.toLowerCase().includes(lowercaseQuery) ||
                row.email.toLowerCase().includes(lowercaseQuery) ||
                row.number.includes(searchQuery)
            );
        });

        const sortedData = filteredData.sort((a, b) => {
            const fieldA: any = a[sortField];
            const fieldB: any = b[sortField];

            if (sortField === 'status') {
                const statusA = a.status === 'Active' ? 1 : 0;
                const statusB = b.status === 'Active' ? 1 : 0;

                if (sortOrder === 'asc') {
                    return statusA - statusB;
                } else {
                    return statusB - statusA;
                }
            }

            if (sortOrder === 'asc') {
                if (fieldA < fieldB) return -1;
                if (fieldA > fieldB) return 1;
                return 0;
            } else {
                if (fieldA > fieldB) return -1;
                if (fieldA < fieldB) return 1;
                return 0;
            }
        });
        const filteredByStatusData = filterStatus
            ? sortedData.filter((user) => {
                return (
                    (filterStatus === 'active' && user.status === 'Active') ||
                    (filterStatus === 'inactive' && user.status === 'Inactive')
                );
            })
            : sortedData;

        // let currentPage: number;
        // let listItems = data;
        // let paginationLimit = 5;
        // let pageCount = Math.ceil(listItems.length / paginationLimit);
        // const paginationNumbers = document.getElementById("paginationNumbers");
        // const prevButton = document.getElementById("prevButton");
        // const nextButton = document.getElementById("nextButton");

        // const appendPageNumber = (index:any) => {
        //   const pageNumber = document.createElement("button");
        //   pageNumber.className = "pagination-number";
        //   pageNumber.innerHTML = index;
        //   pageNumber.setAttribute("page-index", index);
        //   pageNumber.setAttribute("aria-label", "Page " + index);
        //   paginationNumbers.appendChild(pageNumber);
        // };

        // const getPaginationNumbers = () => {
        //   for (let i = 1; i <= pageCount; i++) {
        //     appendPageNumber(i);
        //   }
        // };

        // const setCurrentPage = (pageNum: number) => {
        //   currentPage = pageNum;

        //   handleActivePageNumber();
        //   const prevRange = (pageNum - 1) * paginationLimit;
        //   const currRange = pageNum * paginationLimit;
        //   listItems.forEach((item, index) => {
        //     item.classList.add("hidden");
        //     if (index >= prevRange && index < currRange) {
        //       item.classList.remove("hidden");
        //     }
        //   });

        //   handlePageButtonsStatus();
        // };

        // const disableButton = (button: HTMLElement ) => {
        //   button.classList.add("disabled");
        //   button.setAttribute("disabled", true);
        // };

        // const enableButton = (button: HTMLElement ) => {
        //   button.classList.remove("disabled");
        //   button.removeAttribute("disabled");
        // };

        // const handlePageButtonsStatus = () => {
        //   if (currentPage === 1) {
        //     disableButton(prevButton);
        //   } else {
        //     enableButton(prevButton);
        //   }
        //   if (pageCount === currentPage) {
        //     disableButton(nextButton);
        //   } else {
        //     enableButton(nextButton);
        //   }
        // };

        // window.addEventListener("load", () => {
        //   getPaginationNumbers();
        //   setCurrentPage(1);
        //   prevButton.addEventListener("click", () => {
        //     setCurrentPage(currentPage - 1);
        //   });
        //   nextButton.addEventListener("click", () => {
        //     setCurrentPage(currentPage + 1);
        //   });
        //   document.querySelectorAll(".pagination-number").forEach((button) => {
        //     const pageIndex = Number(button.getAttribute("page-index"));
        //     if (pageIndex) {
        //       button.addEventListener("click", () => {
        //         setCurrentPage(pageIndex);
        //       });
        //     }
        //   });
        // });

        // const handleActivePageNumber = () => {
        //   document.querySelectorAll(".pagination-number").forEach((button) => {
        //     button.classList.remove("active");

        //     const pageIndex = Number(button.getAttribute("page-index"));
        //     if (pageIndex === currentPage) {
        //       button.classList.add("active");
        //     }
        //   });
        // };


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
                                onChange={this.handleSortFieldChange}
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
                            <MenuItem onClick={() => this.handleFilterStatusChange('active')}>
                                <ListItemIcon>
                                    <Checkbox checked={filterStatus === 'active'} />
                                </ListItemIcon>
                                <ListItemText primary='Active' />
                            </MenuItem>
                            <MenuItem onClick={() => this.handleFilterStatusChange('inactive')}>
                                <ListItemIcon>
                                    <Checkbox checked={filterStatus === 'inactive'} />
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
                                            checked={selectAll}
                                            onChange={this.handleSelectAll}
                                        />
                                    </TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredByStatusData.length > 0 ?
                                    filteredByStatusData.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedRows.includes(user.id)}
                                                    onChange={() => this.handleRowSelect(user.id)}
                                                />
                                            </TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.number}</TableCell>
                                            <TableCell>{user.status}</TableCell>
                                            <TableCell>
                                                <Link to={`/${user.id}`}>Edit</Link>
                                                <Link to={`/${user.id}`}>Delete</Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    :
                                    <p style={{ textAlign: 'center' }}>data not found</p>}

                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box className="pagination-container">
                        <Button className="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page">
                            &lt;
                        </Button>

                        <div id="pagination-numbers">
                        </div>

                        <Button className="pagination-button" id="next-button" title="Next page" aria-label="Next page">
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

export default UserTable;


