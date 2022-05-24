import { useEffect, useState } from 'react';
import FilterTable from './components/FilterTable';
import JobList from './components/JobList';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

import Job from './types/Job';

function App() {
  const [jobs, setJobs] = useState<Job[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<string[]>([
    'JavaScript',
    'React',
    'CSS',
    'TypeScript',
  ]); // placeholder items in array, to remove

  /*  const addFilterItem = (item: string) => {
    setFilteredList((currentList) => [...currentList, item]);
  }; */

  const clickHandler = () => {
    setIsFiltered(!isFiltered);
    setFilteredList(filteredList); // to remove later, placeholder only
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container>
      <GlobalStyles />
      {isFiltered && <FilterTable list={filteredList} />}
      {isLoading && <p>Loading</p>}
      <button type="button" onClick={clickHandler}>
        Filter
      </button>
      {jobs && <JobList jobs={jobs} />}
    </Container>
  );
}

export default App;
