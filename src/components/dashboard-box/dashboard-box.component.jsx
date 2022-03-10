import React from 'react';
import { withRouter } from 'react-router-dom';
import UserList from '../user-list/user-list.component.jsx'

import CustomButton from '../custom-button/custom-button.component.jsx';

import './dashboard-box.styles.scss';

const DashboardBox = ({ userList, title, history }) => (
  <div className='dashboard-box'>
      <div className='title'>
        <div className='title-text'>{title}</div>
        
        {
          userList ? 
          (
            <CustomButton 
              addNewButton 
              onClick={() => {
              history.push('/add-user')
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

      <UserList/>

  </div>
);


export default withRouter(DashboardBox);