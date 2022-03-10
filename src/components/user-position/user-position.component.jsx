import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.jsx';

import { removeUser, toggleDeleteHidden } from '../../redux/user/user.actions.js';

import './user-position.styles.scss';

const UserPosition = ({ user, removeUser, toggleDeleteHidden }) => {
  
  const { id, name, username, email, address } = user;
  
  return(    
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
          <CustomButton 
            deleteButton
            onClick={() => {
              toggleDeleteHidden();
            }}
            user={user}
          >
            Delete
          </CustomButton>
        </div>

    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removeUser: user => dispatch(removeUser(user)),
  toggleDeleteHidden: () => dispatch(toggleDeleteHidden())
}); 

export default connect(null, mapDispatchToProps)(UserPosition);