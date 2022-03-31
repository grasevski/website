import React from 'react';
import Icon from '../Icon';

function ChevronRight(props) {
  return (
    <Icon {...props}>
      <path
        d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"
        transform="rotate(-90 16 16)"
      />
    </Icon>
  );
}

export default ChevronRight;
