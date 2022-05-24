import React, { useContext, useState } from 'react';
import JobItem from './JobItem';

import List from './styles/JobList.styled';

import { JobContext } from '../context/JobContext';
import FilterTable from './FilterTable';

const JobList = () => {
  const { jobs, isLoading } = useContext(JobContext);

  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<string[]>([
    'JavaScript',
    'React',
    'CSS',
    'TypeScript',
  ]); // placeholder items in array, to remove

  const clickHandler = () => {
    setIsFiltered(!isFiltered);
    setFilteredList(filteredList); // to remove later, placeholder only
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isFiltered && <FilterTable list={filteredList} />}
      <button type="button" onClick={clickHandler}>
        Filter
      </button>
      <List>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </List>
    </>
  );
};

export default JobList;
