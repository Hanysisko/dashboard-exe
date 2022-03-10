import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ 
  children, 
  addNewButton, 
  editButton,
  deleteButton, 
  ...otherButtonProps 
}) => (
  <button 
    className={`
      ${addNewButton ? 'add-new': ''}
      ${editButton ? 'edit': ''}
      ${deleteButton ? 'delete': ''}
      custom-button
    `} 
    {...otherButtonProps}>
    {children}
  </button>
);

export default CustomButton;