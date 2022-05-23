import React from 'react';
import JobItem from './JobItem';

import List from './styles/JobList.styled';

import Job from '../types/Job';

const JobList: React.FC<{ jobs: Job[] }> = ({ jobs }) => (
  <List>
    {jobs.map((job) => (
      <JobItem key={job.id} job={job} />
    ))}
  </List>
);

export default JobList;
