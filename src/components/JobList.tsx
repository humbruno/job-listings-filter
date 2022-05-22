import React from 'react';
import JobItem from './JobItem';

import List from './styles/JobList.styled';

const JobList: React.FC = () => (
  <List>
    <JobItem />
  </List>
);

export default JobList;
