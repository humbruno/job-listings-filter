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

  const clickHandler = () => setIsFiltered(!isFiltered);

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
      {isFiltered && <FilterTable />}
      {isLoading && <p>Loading</p>}
      <button type="button" onClick={clickHandler}>
        Filter
      </button>
      {jobs && <JobList jobs={jobs} />}
    </Container>
  );
}

export default App;
