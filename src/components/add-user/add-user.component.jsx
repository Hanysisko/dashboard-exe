import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx'; 

import { addUser } from '../../redux/user/user.actions.js';

import './add-user.styles.scss';

// import FormInput from '../form-input/form-input.component.jsx';

class AddUserForm extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      email: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    addUser([...this.state.props]);
    this.setState({ name: '', email: ''});

    // try {
    //   await addUser( name, email );
    //   
    // } catch(err){
    //   console.log(err);
    // }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  };

  render(){
    

    return(
      <div className='add-user-box'>

        <form onSubmit={this.handleSubmit}>
          
          <FormInput 
            name='name' 
            type='name' 
            label='name'
            value={this.state.name} 
            handleChange={this.handleChange}

          />
          
          <FormInput 
            name='email' 
            type='email'
            label='email'
            value={this.state.email} 
            handleChange={this.handleChange}

          />



          <div className='user-list-footer'>
            <CustomButton 
              deleteButton 
              onClick={() => {
                this.props.history.push('dashboard-exe/')
              }}
            >
              Cancel
            </CustomButton>

            <CustomButton type="submit" editButton>
              Add user
            </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addUser: () => dispatch(addUser(ownProps)),
}); 

export default connect(null, mapDispatchToProps)(AddUserForm);