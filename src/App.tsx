import JobList from './components/JobList';
import Container from './styles/Container.styled';
import GlobalStyles from './styles/Global';
import { JobContextProvider } from './contexts/JobContext';

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
