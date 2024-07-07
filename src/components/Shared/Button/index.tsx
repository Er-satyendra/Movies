import React from 'react';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ label, disabled, width='100%', type, btnType='primary', onClick = () => {} }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} style={{width: width}} className={btnType === 'primary' ? 'primary-btn' : 'secondary-btn'}>
      {label}
    </button>
  );
};

export default Button;
