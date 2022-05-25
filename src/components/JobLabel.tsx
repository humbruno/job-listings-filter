/* eslint-disable arrow-body-style */

import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
import Label from '../styles/JobLabel.styled';

const JobLabel: React.FC<{ label: string }> = ({ label }) => {
  const { addFilter } = useContext(JobContext);

  return <Label onClick={() => addFilter(label)}>{label}</Label>;
};

export default JobLabel;
