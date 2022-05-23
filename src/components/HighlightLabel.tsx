/* eslint-disable arrow-body-style */

import React from 'react';
import Highlighted from './styles/HighlightLabel.styled';

const HighlightLabel: React.FC<{ isNew: boolean }> = ({ isNew }) => {
  if (isNew) {
    return <Highlighted bg="new">New!</Highlighted>;
  }
  return <Highlighted>Featured</Highlighted>;
};

export default HighlightLabel;
