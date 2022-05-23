/* eslint-disable arrow-body-style */

import React from 'react';
import Highlighted from './styles/HighlightLabel.styled';

interface LabelProps {
  isNew?: boolean;
}

const HighlightLabel: React.FC<LabelProps> = ({ isNew }) => {
  if (isNew) {
    return <Highlighted isNew>New!</Highlighted>;
  }
  return <Highlighted isNew={false}>Featured</Highlighted>;
};

HighlightLabel.defaultProps = {
  isNew: false,
};

export default HighlightLabel;
