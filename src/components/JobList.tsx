import React, { useContext } from 'react';
import JobItem from './JobItem';

import List from '../styles/JobList.styled';

import { JobContext } from '../contexts/JobContext';
import FilterTable from './FilterTable';

const JobList = () => {
  const { jobs, isLoading } = useContext(JobContext);

  const { isFiltered, filteredList } = useContext(JobContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isFiltered && <FilterTable list={filteredList} />}
      <List>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </List>
    </>
  );
};

export default JobList;
