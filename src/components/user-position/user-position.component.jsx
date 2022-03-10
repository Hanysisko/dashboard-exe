import React from 'react';

import './user-position.styles.scss';

const UserPosition = ({ user: { id, name, username, email, address } }) => (
  <div className='user-position-box'>
    
      <div className='user-list-footer-element'>{id}</div>
      <div className='user-list-footer-element'>{name}</div>
      <div className='user-list-footer-element'>{username}</div>
      <div className='user-list-footer-element'>{email}</div>
      <div className='user-list-footer-element'>{address.city}</div>
      <div className='user-list-footer-element'>X</div>
      <div className='user-list-footer-element'>Y</div>

  </div>
);

export default UserPosition;