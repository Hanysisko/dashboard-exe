import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { toggleDeleteHidden } from '../../redux/user/user.actions';

import './delete-popup.styles.scss';

const DeletePopup = ({ toggleDeleteHidden }) => (

      <div className='delete-popup'>
        <div 
          className='delete-popup-background'
        />

        <div className='content'>
          <h1 className='title'>DELETE</h1>
          <span className='subtitle'>Are you sure you want to delete user ... ?</span>
          

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
              toggleDeleteHidden();
            }}
          >
            Delete
          </CustomButton>
          

        </div>
      </div>

);

const mapDispatchToProps = (dispatch) => ({
  toggleDeleteHidden: () => dispatch(toggleDeleteHidden())
});

export default connect(null, mapDispatchToProps)(DeletePopup);