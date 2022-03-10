import React from 'react';
import { connect } from 'react-redux';

import './user-list.styles.scss';

import UserPosition from '../user-position/user-position.component.jsx'

const UserList = ({ users }) => (
  <div className='user-list-box'>
    <div className='user-list-footer'>
      <div className='user-list-footer-element'>ID</div>
      <div className='user-list-footer-element'>Name</div>
      <div className='user-list-footer-element'>Username</div>
      <div className='user-list-footer-element'>Email</div>
      <div className='user-list-footer-element'>City</div>
      <div className='user-list-footer-element'>Edit</div>
      <div className='user-list-footer-element'>Delete</div>
    </div>
    {
      users.length ? 
      (
        <div className=''>
          {users.map((user) => (
            <UserPosition key={user.id} user={user}/>
          ))}
        </div>
      )
      :
      ( <div className='no-users-message'>
          <span className='no-users-message-title'>NO USERS</span>
        </div> )
    }
  </div>
);

const mapStateToProps = state => ({
  users: state.users.usersData
});

export default connect(mapStateToProps)(UserList);