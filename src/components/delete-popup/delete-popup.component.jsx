import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { toggleDeleteHidden, removeUser } from '../../redux/user/user.actions.js';

import './delete-popup.styles.scss';

const DeletePopup = ({ toggleDeleteHidden, removeUser, userToDeleteData }) => (

      <div className='delete-popup'>
        <div 
          className='delete-popup-background'
        />

        <div className='content'>
          <div><h1 className='title'>DELETE</h1></div>
          <div className='subtitle'>Are you sure you want to delete user {userToDeleteData.username} ?</div>
          
          <div className='button-box'>
            <CustomButton 
              cancelButton
              onClick={() => {
                toggleDeleteHidden();
              }}
            >
              Cancel
            </CustomButton>

            <CustomButton 
              deleteButton
              onClick={() => {
                removeUser(userToDeleteData);
                toggleDeleteHidden();
              }}
            >
              Delete
            </CustomButton>
          </div>

        </div>
      </div>

);

const mapStateToProps = state => ({
  userToDeleteData: state.users.userToDeleteData
});

const mapDispatchToProps = (dispatch) => ({
  toggleDeleteHidden: () => dispatch(toggleDeleteHidden()),
  removeUser: (item) => dispatch(removeUser(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePopup);