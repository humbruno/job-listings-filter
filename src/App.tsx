import JobList from './components/JobList';
import GlobalStyles from './components/styles/Global';

function App() {
  console.log('testing connection');

  return (
    <div>
      <GlobalStyles />
      <JobList />
    </div>
  );
}

export default App;
