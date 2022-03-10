import React from 'react';

import CustomButton from '../custom-button/custom-button.component.jsx';

import './user-position.styles.scss';

const UserPosition = ({ user: { id, name, username, email, address } }) => (
  <div className='user-position-box'>
    
      <div className='user-list-footer-element'>{id}</div>
      <div className='user-list-footer-element'>{name}</div>
      <div className='user-list-footer-element'>{username}</div>
      <div className='user-list-footer-element'>{email}</div>
      <div className='user-list-footer-element'>{address.city}</div>
      
      <div className='user-list-footer-element'>
        <CustomButton editButton>Edit</CustomButton>
      </div>
      <div className='user-list-footer-element'>
        <CustomButton deleteButton>Delete</CustomButton>
      </div>

  </div>
);

export default UserPosition;