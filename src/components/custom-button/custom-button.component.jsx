import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ 
  children, 
  addNewButton, 
  editButton,
  deleteButton,
  cancelButton, 
  ...otherButtonProps 
}) => (
  <button 
    className={`
      ${addNewButton ? 'add-new': ''}
      ${editButton ? 'edit': ''}
      ${deleteButton ? 'delete': ''}
      ${cancelButton ? 'cancel': ''}
      custom-button
    `} 
    {...otherButtonProps}>
    {children}
  </button>
);

export default CustomButton;