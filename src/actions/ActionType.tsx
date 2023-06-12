import React from 'react';

export class AddUser extends React.Component {
  static MAKE_REQUEST = "MAKE_REQUEST";
}



export class DeleteUser extends React.Component {
  static FAIL_REQUEST = "FAIL_REQUEST";
}


export class EditUser extends React.Component {
  static GET_USER_LIST = "GET_USER_LIST";
}
