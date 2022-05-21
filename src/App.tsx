import JobList from './components/JobList';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

function App() {
  console.log('testing connection');

  return (
    <Container>
      <GlobalStyles />
      <JobList />
    </Container>
  );
}

export default App;
