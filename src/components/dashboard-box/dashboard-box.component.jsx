import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserList from '../user-list/user-list.component.jsx'
import AddUserForm from '../add-user/add-user.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import DeletePopup from '../delete-popup/delete-popup.component.jsx';

import './dashboard-box.styles.scss';

const DashboardBox = ({ userList, title, history, hiddenDelete }) => (
  <div className='dashboard-box'>
      <div className='title'>
        <div className='title-text'>{title}</div>
        
        {
          userList ? 
          (
            <CustomButton 
              addNewButton 
              onClick={() => {
              history.push('dashboard-exe/add-user')
            }}
            >
              Add new
            </CustomButton> 
          ) : (
            <span></span>
          )
        }

      </div>
      
      <div className='border-bottom'/>

        {
          userList ? 
          (
            <UserList/>
          ) : (
            <AddUserForm/>
          )
        }

      {
        hiddenDelete ?
        (null)
        :
        (<DeletePopup/>)
      }

  </div>
);

const mapStateToProps = state => ({
  hiddenDelete: state.users.hiddenDelete
});


export default withRouter(connect(mapStateToProps)(DashboardBox));