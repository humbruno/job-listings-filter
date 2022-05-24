import JobList from './components/JobList';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import { JobContextProvider } from './context/JobContext';

function App() {
  return (
    <JobContextProvider>
      <GlobalStyles />
      <Container>
        <JobList />
      </Container>
    </JobContextProvider>
  );
}

export default App;
