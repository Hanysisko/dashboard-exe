import React from 'react';
import { connect } from 'react-redux';

import './user-list.styles.scss';

const UserList = ({}) => (
  <div>
    
  </div>
);

const mapStateToProps = state => ({
  users: state.users.usersData
});

export default connect(mapStateToProps)(UserList);