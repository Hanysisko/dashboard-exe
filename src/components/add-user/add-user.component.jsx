import React from 'react';
import { connect } from 'react-redux';

import './add-user.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';

const AddUser = ({  }) => (
  <div className=''>
    <form>
      <FormInput
        name='email' 
        type='email'
        label='email'
        value='' // {this.state.email} 
        handleChange='' //{this.handleChange}
        required 
      />
    </form>

  </div>
);

export default AddUser;