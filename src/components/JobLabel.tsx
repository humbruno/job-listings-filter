/* eslint-disable arrow-body-style */

import React from 'react';
import Label from './styles/JobLabel.styled';

const JobLabel: React.FC<{ label: string }> = ({ label }) => {
  return <Label>{label}</Label>;
};

export default JobLabel;
